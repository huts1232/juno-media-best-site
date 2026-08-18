import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const refDir = path.join(root, '.reference');
const cssPath = path.join(
  refDir,
  'css/outcrowd-2-0-new-superfinal.webflow.shared.586b00c50.min.css',
);

const htmlFiles = [
  ['home', path.join(refDir, 'home.html')],
  ['cases', path.join(refDir, 'cases.html')],
  ['services', path.join(refDir, 'services.html')],
  ['about', path.join(refDir, 'about.html')],
];

const css = fs.readFileSync(cssPath, 'utf8');
const htmlByPage = Object.fromEntries(
  htmlFiles.map(([name, file]) => [name, fs.readFileSync(file, 'utf8')]),
);
const jsBundleFiles = fs
  .readdirSync(path.join(refDir, 'js'))
  .filter((file) => file.endsWith('.js'))
  .map((file) => [file, path.join(refDir, 'js', file)]);

const voidTags = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

function stripCssComments(input) {
  return input.replace(/\/\*[\s\S]*?\*\//g, '');
}

function splitOutside(input, separator) {
  const parts = [];
  let start = 0;
  let depth = 0;
  let quote = '';
  for (let i = 0; i < input.length; i += 1) {
    const c = input[i];
    if (quote) {
      if (c === '\\') i += 1;
      else if (c === quote) quote = '';
      continue;
    }
    if (c === '"' || c === "'") {
      quote = c;
      continue;
    }
    if (c === '(' || c === '[') depth += 1;
    else if (c === ')' || c === ']') depth = Math.max(0, depth - 1);
    else if (c === separator && depth === 0) {
      parts.push(input.slice(start, i).trim());
      start = i + 1;
    }
  }
  const last = input.slice(start).trim();
  if (last) parts.push(last);
  return parts;
}

function parseDeclarations(input) {
  return splitOutside(input, ';')
    .map((entry) => {
      const idx = entry.indexOf(':');
      if (idx < 0) return null;
      return {
        prop: entry.slice(0, idx).trim(),
        value: entry.slice(idx + 1).trim(),
      };
    })
    .filter(Boolean);
}

function findMatchingBrace(input, startIndex) {
  let depth = 1;
  let quote = '';
  for (let i = startIndex; i < input.length; i += 1) {
    const c = input[i];
    if (quote) {
      if (c === '\\') i += 1;
      else if (c === quote) quote = '';
      continue;
    }
    if (c === '"' || c === "'") {
      quote = c;
      continue;
    }
    if (c === '{') depth += 1;
    else if (c === '}') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function parseCssRules(input, context = 'base') {
  const source = stripCssComments(input);
  const rules = [];
  let i = 0;
  while (i < source.length) {
    while (i < source.length && /\s/.test(source[i])) i += 1;
    const preludeStart = i;
    while (i < source.length && source[i] !== '{') i += 1;
    if (i >= source.length) break;
    const prelude = source.slice(preludeStart, i).trim();
    const bodyStart = i + 1;
    const bodyEnd = findMatchingBrace(source, bodyStart);
    if (bodyEnd < 0) break;
    const body = source.slice(bodyStart, bodyEnd);
    i = bodyEnd + 1;

    if (!prelude) continue;
    if (prelude.startsWith('@media')) {
      rules.push({
        type: 'media',
        media: prelude,
        selectors: [],
        declarations: [],
      });
      rules.push(...parseCssRules(body, prelude));
      continue;
    }
    if (prelude.startsWith('@supports') || prelude.startsWith('@layer')) {
      const nextContext = context === 'base' ? prelude : `${context} / ${prelude}`;
      rules.push(...parseCssRules(body, nextContext));
      continue;
    }
    if (prelude.startsWith('@font-face')) {
      rules.push({
        type: 'font-face',
        media: context,
        selectors: ['@font-face'],
        declarations: parseDeclarations(body),
      });
      continue;
    }
    if (prelude.includes('keyframes')) {
      rules.push({
        type: 'keyframes',
        media: context,
        selectors: [prelude],
        declarations: [],
        body,
      });
      continue;
    }
    rules.push({
      type: 'rule',
      media: context,
      selectors: splitOutside(prelude, ','),
      declarations: parseDeclarations(body),
    });
  }
  return rules;
}

const rules = parseCssRules(css);

function inc(map, key, amount = 1) {
  if (!key) return;
  map.set(key, (map.get(key) || 0) + amount);
}

function sortedEntries(map) {
  return [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function declarationValue(rule, prop) {
  return rule.declarations.find((decl) => decl.prop === prop)?.value;
}

function collectCustomProperties() {
  const vars = new Map();
  for (const rule of rules) {
    for (const decl of rule.declarations) {
      if (decl.prop.startsWith('--') && !vars.has(decl.prop)) {
        vars.set(decl.prop, decl.value);
      }
    }
  }
  return vars;
}

const customProperties = collectCustomProperties();

function resolveVar(value) {
  const match = value.match(/^var\((--[^),\s]+)(?:,[^)]+)?\)$/);
  if (!match) return null;
  return customProperties.get(match[1]) || null;
}

function extractColorLiterals(value) {
  const result = [];
  const normalized = value.trim();
  const colorRegex =
    /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|hsla?\([^)]*\)|\b(?:transparent|currentColor|black|white)\b|var\(--[^)]+\)/g;
  let match;
  while ((match = colorRegex.exec(normalized))) {
    result.push(match[0]);
  }
  return result.length ? result : [normalized];
}

function formatResolved(value) {
  const resolved = resolveVar(value);
  return resolved ? `${value} = ${resolved}` : value;
}

function selectorList(rule) {
  return rule.selectors.join(', ');
}

function markdownTable(headers, rows) {
  if (!rows.length) return '_Geen waarden gevonden._\n';
  return [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.map((cell) => String(cell).replace(/\|/g, '\\|')).join(' | ')} |`),
    '',
  ].join('\n');
}

function code(value) {
  return `\`${String(value).replace(/`/g, '\\`')}\``;
}

function compactSelector(selector, max = 96) {
  return selector.length > max ? `${selector.slice(0, max - 1)}…` : selector;
}

function collectByProperty(props, predicate = () => true) {
  const values = new Map();
  const examples = new Map();
  for (const rule of rules) {
    if (rule.type !== 'rule') continue;
    for (const decl of rule.declarations) {
      if (!props.includes(decl.prop) || !predicate(rule, decl)) continue;
      inc(values, decl.value);
      const key = decl.value;
      if (!examples.has(key)) examples.set(key, []);
      if (examples.get(key).length < 5) {
        examples.get(key).push({
          selector: selectorList(rule),
          media: rule.media,
          prop: decl.prop,
        });
      }
    }
  }
  return { values, examples };
}

function collectPropsStarting(prefixes) {
  const values = new Map();
  const examples = new Map();
  for (const rule of rules) {
    if (rule.type !== 'rule') continue;
    for (const decl of rule.declarations) {
      if (!prefixes.some((prefix) => decl.prop === prefix || decl.prop.startsWith(`${prefix}-`))) continue;
      inc(values, `${decl.prop}: ${decl.value}`);
      const key = `${decl.prop}: ${decl.value}`;
      if (!examples.has(key)) examples.set(key, []);
      if (examples.get(key).length < 4) {
        examples.get(key).push({
          selector: selectorList(rule),
          media: rule.media,
        });
      }
    }
  }
  return { values, examples };
}

function lengthApproxPx(token) {
  const match = token.match(/^(-?\d*\.?\d+)(px|rem|em|vw|vh|%)$/);
  if (!match) return null;
  const value = Number(match[1]);
  const unit = match[2];
  if (unit === 'px') return value;
  if (unit === 'rem' || unit === 'em') return value * 16;
  return null;
}

function extractLengthTokens(value) {
  const tokens = [];
  const regex = /-?\d*\.?\d+(?:px|rem|em|vw|vh|%)/g;
  let match;
  while ((match = regex.exec(value))) tokens.push(match[0]);
  return tokens;
}

function typeCategory(selector) {
  const lower = selector.toLowerCase();
  if (/(^|[\s>,])h1\b|\.h1\b|hero-heading|headline/.test(lower)) return 'h1 / hero / headline';
  if (/(^|[\s>,])h2\b|\.h2\b|anim-heading|case-heading/.test(lower)) return 'h2';
  if (/(^|[\s>,])h3\b|\.h3\b/.test(lower)) return 'h3';
  if (/(^|[\s>,])h4\b|\.h4\b/.test(lower)) return 'h4';
  if (/(^|[\s>,])h5\b|\.h5\b/.test(lower)) return 'h5';
  if (/(^|[\s>,])h6\b|\.h6\b/.test(lower)) return 'h6';
  if (/(^|[\s>,])p\b|paragraph|\.b1\b|\.b2\b|\.body|description|desc/.test(lower)) return 'p / body';
  if (/eyebrow|tag|caption|label|small|subtext|subtitle/.test(lower)) return 'eyebrow / caption / small';
  if (/button|btn|nav_link|link/.test(lower)) return 'button / link';
  return 'other';
}

function generateTokensMarkdown() {
  const colorProps = new Set(['color', 'background-color', 'border-color', 'fill']);
  const colorFreq = new Map();
  const colorExamples = new Map();

  for (const rule of rules) {
    if (rule.type !== 'rule') continue;
    for (const decl of rule.declarations) {
      if (!colorProps.has(decl.prop)) continue;
      for (const rawColor of extractColorLiterals(decl.value)) {
        const value = formatResolved(rawColor);
        inc(colorFreq, value);
        if (!colorExamples.has(value)) colorExamples.set(value, []);
        if (colorExamples.get(value).length < 4) {
          colorExamples.get(value).push(`${decl.prop} @ ${compactSelector(selectorList(rule))}`);
        }
      }
    }
  }

  const customColorRows = [...customProperties.entries()]
    .filter(([, value]) => extractColorLiterals(value).some((token) => token !== value || /^#|rgb|hsl|transparent|black|white/.test(token)))
    .map(([name, value]) => [code(name), code(value)]);

  const fontFaces = rules.filter((rule) => rule.type === 'font-face');
  const fontFamily = collectByProperty(['font-family']);
  const fontWeights = collectByProperty(['font-weight', 'font-style']);

  const typeRows = [];
  for (const rule of rules) {
    if (rule.type !== 'rule') continue;
    const fs = declarationValue(rule, 'font-size');
    if (!fs) continue;
    const selector = selectorList(rule);
    typeRows.push([
      typeCategory(selector),
      code(fs),
      code(declarationValue(rule, 'line-height') || 'niet expliciet'),
      code(declarationValue(rule, 'letter-spacing') || 'niet expliciet'),
      code(declarationValue(rule, 'font-weight') || 'niet expliciet'),
      code(rule.media),
      code(compactSelector(selector, 120)),
    ]);
  }
  typeRows.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));

  const sectionSelectorRegex =
    /(?:^|[.\s#-])(section|container|hero|header|nav|footer|case|cases|service|services|testimonial|award|awards|blog|news|faq|cta|banner|main)(?:$|[.\s#-])/i;
  const spacingProps = [
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'padding-block',
    'padding-inline',
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    'gap',
    'grid-column-gap',
    'grid-row-gap',
    'column-gap',
    'row-gap',
  ];
  const sectionSpacing = collectByProperty(spacingProps, (rule) =>
    sectionSelectorRegex.test(selectorList(rule)),
  );

  const spacingLengthFreq = new Map();
  for (const [value, count] of sectionSpacing.values.entries()) {
    for (const token of extractLengthTokens(value)) inc(spacingLengthFreq, token, count);
  }
  const spacingScaleRows = [...spacingLengthFreq.entries()]
    .map(([token, count]) => ({
      token,
      count,
      px: lengthApproxPx(token),
    }))
    .sort((a, b) => {
      if (a.px !== null && b.px !== null) return a.px - b.px || a.token.localeCompare(b.token);
      if (a.px !== null) return -1;
      if (b.px !== null) return 1;
      return a.token.localeCompare(b.token);
    })
    .map(({ token, count, px }) => [code(token), px === null ? 'viewport/%' : `${px}px`, count]);

  const mediaRows = [...new Set(rules.filter((rule) => rule.type === 'media').map((rule) => rule.media))]
    .map((query) => [code(query), rules.filter((rule) => rule.media === query).length])
    .sort((a, b) => a[0].localeCompare(b[0]));

  const radiusShadowBorder = collectPropsStarting(['border-radius', 'box-shadow', 'border']);
  const transitionAnimation = collectPropsStarting(['transition', 'animation']);

  const rootVarRows = [...customProperties.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([name, value]) => [code(name), code(value)]);

  const content = [];
  content.push('# TOKENS.md');
  content.push('');
  content.push(`Bron-CSS: \`${path.relative(root, cssPath)}\``);
  content.push(`Aantal CSS-regels/blokken geparseerd: ${rules.length}`);
  content.push('');
  content.push('## 1. Kleuren');
  content.push('');
  content.push('Frequenties zijn gebaseerd op declaraties voor `color`, `background-color`, `border-color` en `fill`. `var(...)`-waarden zijn waar mogelijk naar hun CSS custom property opgelost.');
  content.push('');
  content.push('### Palette-kandidaten top 6');
  content.push(
    markdownTable(
      ['Rang', 'Waarde', 'Frequentie', 'Voorbeelden'],
      sortedEntries(colorFreq)
        .slice(0, 6)
        .map(([value, count], index) => [
          index + 1,
          code(value),
          count,
          (colorExamples.get(value) || []).map(code).join('<br>'),
        ]),
    ),
  );
  content.push('### Alle unieke kleurwaarden op frequentie');
  content.push(
    markdownTable(
      ['Waarde', 'Frequentie', 'Voorbeelden'],
      sortedEntries(colorFreq).map(([value, count]) => [
        code(value),
        count,
        (colorExamples.get(value) || []).map(code).join('<br>'),
      ]),
    ),
  );
  content.push('### Custom properties met kleurwaarden');
  content.push(markdownTable(['Naam', 'Waarde'], customColorRows));
  content.push('');

  content.push('## 2. Fonts');
  content.push('');
  content.push('### @font-face');
  content.push(
    markdownTable(
      ['Family', 'Weight', 'Style', 'Src', 'Media'],
      fontFaces.map((rule) => [
        code(declarationValue(rule, 'font-family') || 'niet expliciet'),
        code(declarationValue(rule, 'font-weight') || 'niet expliciet'),
        code(declarationValue(rule, 'font-style') || 'niet expliciet'),
        code(declarationValue(rule, 'src') || 'niet expliciet'),
        code(rule.media),
      ]),
    ),
  );
  content.push('### Font-family stacks');
  content.push(
    markdownTable(
      ['Waarde', 'Frequentie', 'Selectors'],
      sortedEntries(fontFamily.values).map(([value, count]) => [
        code(value),
        count,
        (fontFamily.examples.get(value) || [])
          .map((item) => `${code(item.media)} ${code(compactSelector(item.selector))}`)
          .join('<br>'),
      ]),
    ),
  );
  content.push('### Per-selector font-weight / font-style');
  content.push(
    markdownTable(
      ['Declaratie', 'Frequentie', 'Selectors'],
      sortedEntries(fontWeights.values).map(([value, count]) => [
        code(value),
        count,
        (fontWeights.examples.get(value) || [])
          .map((item) => `${code(item.media)} ${code(compactSelector(item.selector))}`)
          .join('<br>'),
      ]),
    ),
  );
  content.push('');

  content.push('## 3. Type-scale');
  content.push('');
  content.push('Elke rij is een selector met `font-size`; `line-height`, `letter-spacing` en `font-weight` staan erbij als ze in dezelfde regel staan. Als Webflow deze via een andere selector erft, staat hier `niet expliciet`.');
  content.push(
    markdownTable(
      ['Groep', 'font-size', 'line-height', 'letter-spacing', 'font-weight', 'Media', 'Selector'],
      typeRows,
    ),
  );
  content.push('');

  content.push('## 4. Spacing');
  content.push('');
  content.push('Sectie-niveau is gefilterd op selectors met o.a. `section`, `container`, `hero`, `footer`, `case(s)`, `service(s)`, `testimonial`, `award`, `blog`, `news`, `faq`, `cta` of `banner`.');
  content.push('### Unieke padding/margin/gap waarden op sectie-niveau');
  content.push(
    markdownTable(
      ['Declaratiewaarde', 'Frequentie', 'Voorbeelden'],
      sortedEntries(sectionSpacing.values).map(([value, count]) => [
        code(value),
        count,
        (sectionSpacing.examples.get(value) || [])
          .map((item) => `${code(item.prop)} ${code(item.media)} ${code(compactSelector(item.selector))}`)
          .join('<br>'),
      ]),
    ),
  );
  content.push('### Afgeleide spacing-schaal');
  content.push(markdownTable(['Token', 'Benadering', 'Frequentie'], spacingScaleRows));
  content.push('');

  content.push('## 5. Breakpoints');
  content.push(markdownTable(['Media query', 'Aantal regels in context'], mediaRows));
  content.push('');

  content.push('## 6. Radii, shadows, borders');
  content.push(
    markdownTable(
      ['Declaratie', 'Frequentie', 'Voorbeelden'],
      sortedEntries(radiusShadowBorder.values).map(([value, count]) => [
        code(value),
        count,
        (radiusShadowBorder.examples.get(value) || [])
          .map((item) => `${code(item.media)} ${code(compactSelector(item.selector))}`)
          .join('<br>'),
      ]),
    ),
  );
  content.push('');

  content.push('## 7. Transitions en animations');
  content.push(
    markdownTable(
      ['Declaratie', 'Frequentie', 'Voorbeelden'],
      sortedEntries(transitionAnimation.values).map(([value, count]) => [
        code(value),
        count,
        (transitionAnimation.examples.get(value) || [])
          .map((item) => `${code(item.media)} ${code(compactSelector(item.selector))}`)
          .join('<br>'),
      ]),
    ),
  );
  content.push('');

  content.push('## 8. Alle CSS custom properties');
  content.push(markdownTable(['Naam', 'Waarde'], rootVarRows));
  content.push('');

  return content.join('\n');
}

function stripHtmlForParsing(input) {
  return input
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');
}

function parseAttributes(input) {
  const attrs = {};
  const attrRe = /([:@\w-]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;
  while ((match = attrRe.exec(input))) {
    const [, name, doubleValue, singleValue, bareValue] = match;
    attrs[name] = doubleValue ?? singleValue ?? bareValue ?? true;
  }
  return attrs;
}

function parseHtml(input) {
  const source = stripHtmlForParsing(input);
  const rootNode = { tag: 'root', attrs: {}, classes: [], children: [], parent: null };
  const stack = [rootNode];
  const tagRe = /<[^>]+>/g;
  let match;
  while ((match = tagRe.exec(source))) {
    const token = match[0];
    if (/^<!|^<\?/.test(token)) continue;
    if (/^<\//.test(token)) {
      const tag = token.replace(/^<\//, '').replace(/>$/, '').trim().toLowerCase();
      for (let i = stack.length - 1; i > 0; i -= 1) {
        if (stack[i].tag === tag) {
          stack.length = i;
          break;
        }
      }
      continue;
    }
    const selfClosing = /\/>$/.test(token);
    const inner = token.slice(1, token.length - (selfClosing ? 2 : 1)).trim();
    const space = inner.search(/\s/);
    const tag = (space < 0 ? inner : inner.slice(0, space)).toLowerCase();
    if (!tag) continue;
    const attrText = space < 0 ? '' : inner.slice(space + 1);
    const attrs = parseAttributes(attrText);
    const classes = typeof attrs.class === 'string' ? attrs.class.split(/\s+/).filter(Boolean) : [];
    const node = {
      tag,
      attrs,
      classes,
      children: [],
      parent: stack.at(-1),
    };
    stack.at(-1).children.push(node);
    if (!selfClosing && !voidTags.has(tag)) stack.push(node);
  }
  return rootNode;
}

function walk(node, visitor) {
  visitor(node);
  for (const child of node.children || []) walk(child, visitor);
}

function findAll(node, predicate) {
  const result = [];
  walk(node, (item) => {
    if (item !== node && predicate(item)) result.push(item);
  });
  return result;
}

function findOne(node, predicate) {
  let result = null;
  walk(node, (item) => {
    if (!result && item !== node && predicate(item)) result = item;
  });
  return result;
}

function nodeName(node) {
  const id = node.attrs.id ? `#${node.attrs.id}` : '';
  const classes = node.classes.length ? `.${node.classes.join('.')}` : '';
  const attrs = [];
  if (node.attrs['data-w-id']) attrs.push(`data-w-id="${node.attrs['data-w-id']}"`);
  if (node.attrs['section-color']) attrs.push(`section-color="${node.attrs['section-color']}"`);
  if (node.attrs.href && node.tag === 'a') attrs.push(`href="${node.attrs.href}"`);
  if (node.attrs.src && ['img', 'video', 'source'].includes(node.tag)) attrs.push(`src="${node.attrs.src}"`);
  return `<${node.tag}${id}${classes}${attrs.length ? ` ${attrs.join(' ')}` : ''}>`;
}

function treeLines(node, depth = 0, lines = []) {
  lines.push(`${'  '.repeat(depth)}- ${nodeName(node)}`);
  for (const child of node.children || []) treeLines(child, depth + 1, lines);
  return lines;
}

function selectorMatchesSimple(selector, node) {
  let simple = selector.trim();
  if (!simple || simple.includes(' ') || /[>+~]/.test(simple)) return false;
  simple = simple.replace(/:(?:hover|focus|active|visited|before|after|first-child|last-child|nth-child\([^)]*\))/g, '');
  if (simple.includes(':') || simple.includes('[')) return false;
  const idMatches = [...simple.matchAll(/#([A-Za-z0-9_-]+)/g)].map((m) => m[1]);
  if (idMatches.some((id) => node.attrs.id !== id)) return false;
  const classMatches = [...simple.matchAll(/\.([A-Za-z0-9_-]+)/g)].map((m) => m[1]);
  if (classMatches.some((className) => !node.classes.includes(className))) return false;
  const tagMatch = simple.match(/^[A-Za-z][A-Za-z0-9_-]*/);
  if (tagMatch && tagMatch[0].toLowerCase() !== node.tag) return false;
  return idMatches.length > 0 || classMatches.length > 0 || Boolean(tagMatch);
}

const metricProps = [
  'max-width',
  'width',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'padding-block',
  'padding-inline',
  'gap',
  'grid-column-gap',
  'grid-row-gap',
  'column-gap',
  'row-gap',
  'display',
  'grid-template-columns',
];

function metricDeclarationsFor(node) {
  const byMedia = new Map();
  for (const rule of rules) {
    if (rule.type !== 'rule') continue;
    if (!rule.selectors.some((selector) => selectorMatchesSimple(selector, node))) continue;
    if (!byMedia.has(rule.media)) byMedia.set(rule.media, {});
    const current = byMedia.get(rule.media);
    for (const decl of rule.declarations) {
      if (metricProps.includes(decl.prop)) current[decl.prop] = decl.value;
    }
  }
  if (typeof node.attrs.style === 'string') {
    const inlineDecls = parseDeclarations(node.attrs.style);
    if (!byMedia.has('inline')) byMedia.set('inline', {});
    const current = byMedia.get('inline');
    for (const decl of inlineDecls) {
      if (metricProps.includes(decl.prop)) current[decl.prop] = decl.value;
    }
  }
  return byMedia;
}

function summarizeMetrics(node) {
  const byMedia = metricDeclarationsFor(node);
  if (!byMedia.size) return '_Geen expliciete container-metrics statisch gevonden._';
  const rows = [];
  for (const [media, decls] of byMedia.entries()) {
    const useful = Object.entries(decls)
      .filter(([, value]) => value !== undefined)
      .map(([prop, value]) => `${prop}: ${value}`)
      .join('; ');
    if (useful) rows.push([code(media), code(useful)]);
  }
  return markdownTable(['Context', 'Gevonden declaraties'], rows);
}

function directElementChildren(node) {
  return (node?.children || []).filter((child) => child.tag);
}

function isStructuralSection(node) {
  if (node.tag === 'section' || node.tag === 'header' || node.tag === 'footer') return true;
  const className = node.classes.join(' ');
  return /(section|hero-height|case--new-heading-wrap|footer|fs-cc-banner|cta|faq|blog|services|cases)/i.test(
    className,
  );
}

function generateStructureMarkdown() {
  const content = [];
  content.push('# STRUCTURE.md');
  content.push('');
  content.push('Structuur is geparseerd uit de gedownloade HTML. Tekstinhoud is weggelaten; element, classes, relevante attributen en nesting-volgorde blijven staan.');
  content.push('');

  for (const [pageName, html] of Object.entries(htmlByPage)) {
    const dom = parseHtml(html);
    const body = findOne(dom, (node) => node.tag === 'body');
    const main = findOne(dom, (node) => node.tag === 'main');
    const pageId = findOne(dom, (node) => node.tag === 'html')?.attrs?.['data-wf-page'] || 'niet gevonden';
    content.push(`## Pagina: ${pageName}`);
    content.push('');
    content.push(`Webflow page id: \`${pageId}\``);
    content.push('');

    const topLevel = directElementChildren(body || dom).filter(isStructuralSection);
    const mainChildren = directElementChildren(main || { children: [] });
    const fallbackSections = main
      ? []
      : findAll(body || dom, (node) => node.tag === 'section' || node.tag === 'header' || node.tag === 'footer');
    const structural = [
      ...topLevel.filter((node) => node.tag !== 'main'),
      ...mainChildren.filter(isStructuralSection),
      ...fallbackSections,
    ];
    const uniqueStructural = [];
    const seen = new Set();
    for (const item of structural) {
      if (seen.has(item)) continue;
      seen.add(item);
      uniqueStructural.push(item);
    }

    content.push('### Sectievolgorde');
    content.push(
      uniqueStructural.length
        ? uniqueStructural.map((node, index) => `${index + 1}. ${code(nodeName(node))}`).join('\n')
        : '_Geen structurele secties gevonden._',
    );
    content.push('');

    uniqueStructural.forEach((sectionNode, index) => {
      const containers = findAll(sectionNode, (node) => node.classes.includes('container'));
      content.push(`### ${index + 1}. ${nodeName(sectionNode)}`);
      content.push('');
      content.push('#### Container-metrics');
      content.push('');
      if (!containers.length) {
        content.push('_Geen descendant met class `container` gevonden._');
      } else {
        containers.slice(0, 12).forEach((containerNode, containerIndex) => {
          content.push(`Container ${containerIndex + 1}: ${code(nodeName(containerNode))}`);
          content.push(summarizeMetrics(containerNode));
        });
        if (containers.length > 12) {
          content.push(`_Nog ${containers.length - 12} containers gevonden; niet herhaald om dubbele collection-items leesbaar te houden._`);
        }
      }
      content.push('');
      content.push('#### DOM-boom');
      content.push('');
      content.push('```text');
      content.push(treeLines(sectionNode).join('\n'));
      content.push('```');
      content.push('');
    });
  }
  return content.join('\n');
}

function findMatchingParen(input, startIndex) {
  let depth = 1;
  let quote = '';
  for (let i = startIndex; i < input.length; i += 1) {
    const c = input[i];
    if (quote) {
      if (c === '\\') i += 1;
      else if (c === quote) quote = '';
      continue;
    }
    if (c === '"' || c === "'" || c === '`') {
      quote = c;
      continue;
    }
    if (c === '(') depth += 1;
    else if (c === ')') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function extractIx2Payload(html) {
  const marker = 'Webflow.require("ix2").init(';
  let index = html.indexOf(marker);
  if (index < 0) {
    const single = "Webflow.require('ix2').init(";
    index = html.indexOf(single);
    if (index < 0) return null;
    const start = index + single.length;
    const end = findMatchingParen(html, start);
    return html.slice(start, end);
  }
  const start = index + marker.length;
  const end = findMatchingParen(html, start);
  return html.slice(start, end);
}

function loadIx2Data() {
  const found = [];
  for (const [pageName, html] of Object.entries(htmlByPage)) {
    const payload = extractIx2Payload(html);
    if (!payload) continue;
    try {
      const data = vm.runInNewContext(`(${payload})`, Object.create(null), { timeout: 5000 });
      found.push({ pageName, data });
    } catch (error) {
      found.push({ pageName, error: error.message });
    }
  }
  for (const [fileName, filePath] of jsBundleFiles) {
    const js = fs.readFileSync(filePath, 'utf8');
    const payload = extractIx2Payload(js);
    if (!payload) continue;
    try {
      const data = vm.runInNewContext(`(${payload})`, Object.create(null), { timeout: 5000 });
      found.push({ pageName: `js/${fileName}`, data });
    } catch (error) {
      found.push({ pageName: `js/${fileName}`, error: error.message });
    }
  }
  return found;
}

function describeTarget(target = {}) {
  if (!target) return 'niet expliciet';
  if (target.selector) return `selector ${target.selector}`;
  if (target.id) return `id ${target.id}`;
  if (target.useEventTarget === true) return 'event target';
  if (target.useEventTarget) return `${target.useEventTarget}`;
  if (target.appliesTo) return target.appliesTo;
  return JSON.stringify(target);
}

function describeActionItem(item) {
  const cfg = item.config || {};
  const bits = [];
  switch (item.actionTypeId) {
    case 'TRANSFORM_MOVE':
      if (cfg.xValue !== undefined) bits.push(`x ${cfg.xValue}${cfg.xUnit || ''}`);
      if (cfg.yValue !== undefined) bits.push(`y ${cfg.yValue}${cfg.yUnit || ''}`);
      if (cfg.zValue !== undefined) bits.push(`z ${cfg.zValue}${cfg.zUnit || ''}`);
      break;
    case 'TRANSFORM_SCALE':
      if (cfg.xValue !== undefined) bits.push(`scaleX ${cfg.xValue}`);
      if (cfg.yValue !== undefined) bits.push(`scaleY ${cfg.yValue}`);
      break;
    case 'TRANSFORM_ROTATE':
      if (cfg.xValue !== undefined) bits.push(`rotateX ${cfg.xValue}${cfg.xUnit || 'deg'}`);
      if (cfg.yValue !== undefined) bits.push(`rotateY ${cfg.yValue}${cfg.yUnit || 'deg'}`);
      if (cfg.zValue !== undefined) bits.push(`rotateZ ${cfg.zValue}${cfg.zUnit || 'deg'}`);
      break;
    case 'STYLE_OPACITY':
      bits.push(`opacity ${cfg.value}`);
      break;
    case 'STYLE_SIZE':
      if (cfg.widthValue !== undefined) bits.push(`width ${cfg.widthValue}${cfg.widthUnit || ''}`);
      if (cfg.heightValue !== undefined) bits.push(`height ${cfg.heightValue}${cfg.heightUnit || ''}`);
      break;
    case 'STYLE_BACKGROUND_COLOR':
    case 'STYLE_TEXT_COLOR':
    case 'STYLE_BORDER':
      bits.push(
        `rgba(${cfg.rValue ?? '?'}, ${cfg.gValue ?? '?'}, ${cfg.bValue ?? '?'}, ${cfg.aValue ?? '?'})`,
      );
      break;
    case 'STYLE_FILTER':
      bits.push(`${cfg.filterId || 'filter'} ${cfg.value}${cfg.unit || ''}`);
      break;
    case 'GENERAL_DISPLAY':
      bits.push(`display ${cfg.value ?? 'default'}`);
      break;
    case 'PLUGIN_LOTTIE':
      bits.push(`lottie progress ${cfg.value}`);
      break;
    default:
      if (cfg.value !== undefined) bits.push(`value ${cfg.value}${cfg.unit || ''}`);
      break;
  }
  const timing = `duration ${cfg.duration ?? 'niet expliciet'}ms, delay ${cfg.delay ?? 0}ms, easing ${cfg.easing || 'lineair/geen'}`;
  return `${item.actionTypeId}: ${bits.join(', ') || 'config'} -> ${describeTarget(cfg.target)} (${timing})`;
}

function offsetSummary(event) {
  const cfg = event.config || {};
  const values = [];
  for (const key of [
    'scrollOffsetValue',
    'scrollOffsetUnit',
    'delay',
    'direction',
    'loop',
    'effectIn',
    'scrollingStart',
    'scrollingEnd',
  ]) {
    if (cfg[key] !== undefined) values.push(`${key}: ${cfg[key]}`);
  }
  return values.length ? values.join(', ') : 'niet expliciet';
}

function detectStagger(group) {
  const delays = (group.actionItems || [])
    .map((item) => item.config?.delay)
    .filter((value) => typeof value === 'number');
  if (delays.length < 3) return '';
  const diffs = [];
  for (let i = 1; i < delays.length; i += 1) diffs.push(delays[i] - delays[i - 1]);
  const positive = diffs.filter((diff) => diff > 0);
  if (!positive.length) return '';
  const first = positive[0];
  if (positive.every((diff) => Math.abs(diff - first) < 1)) return `stagger ca. ${first}ms`;
  return '';
}

function generateMotionMarkdown() {
  const ix2Data = loadIx2Data();
  const home =
    ix2Data.find((entry) => entry.pageName === 'home' && entry.data) ||
    ix2Data.find((entry) => entry.pageName.startsWith('js/') && entry.data);
  const content = [];
  content.push('# MOTION.md');
  content.push('');
  content.push('Bron: Webflow IX2 payload uit `.reference/home.html` of, zoals in deze export, uit de gedownloade Webflow JS-bundle; `data-w-id` in de HTML koppelt targets aan de events/actionLists hieronder.');
  content.push('');
  if (!home) {
    content.push('_Geen Webflow IX2 payload gevonden of payload kon niet worden geevalueerd._');
    content.push(markdownTable(['Pagina', 'Status'], ix2Data.map((entry) => [entry.pageName, entry.error || 'ok'])));
    return content.join('\n');
  }

  const data = home.data;
  const events = data.events || {};
  const actionLists = data.actionLists || {};
  const siteMedia = data.site?.mediaQueries || [];
  const eventsByAction = new Map();
  for (const [eventId, event] of Object.entries(events)) {
    const actionListId = event.action?.config?.actionListId;
    if (!actionListId) continue;
    if (!eventsByAction.has(actionListId)) eventsByAction.set(actionListId, []);
    eventsByAction.get(actionListId).push({ eventId, event });
  }

  content.push(`Aantal events: ${Object.keys(events).length}`);
  content.push(`Aantal actionLists: ${Object.keys(actionLists).length}`);
  content.push('');
  content.push('## Media queries uit IX2');
  content.push(
    markdownTable(
      ['Key', 'Min', 'Max'],
      siteMedia.map((item) => [code(item.key), item.min, item.max]),
    ),
  );
  content.push('');
  content.push('## Easing mapping voor GSAP');
  content.push(
    markdownTable(
      ['Webflow easing', 'GSAP'],
      [
        ['ease out / outQuad', '`power2.out`'],
        ['outQuart', '`power4.out`'],
        ['ease', '`power1.inOut`'],
        ['outExpo', '`expo.out`'],
        ['geen easing in continuous keyframes', '`ease: "none"` met `scrub`'],
      ],
    ),
  );
  content.push('');

  content.push('## Trigger-overzicht');
  content.push(
    markdownTable(
      ['Action list', 'Titel', 'Trigger types', 'Offsets', 'Media', 'Targets'],
      Object.entries(actionLists).map(([actionId, actionList]) => {
        const usedBy = eventsByAction.get(actionId) || [];
        return [
          code(actionId),
          code(actionList.title || 'zonder titel'),
          [...new Set(usedBy.map(({ event }) => event.eventTypeId))].map(code).join('<br>') || 'niet gebruikt in home payload',
          [...new Set(usedBy.map(({ event }) => offsetSummary(event)))].map(code).join('<br>') || 'niet expliciet',
          [...new Set(usedBy.flatMap(({ event }) => event.mediaQueries || []))].map(code).join(', ') || 'niet expliciet',
          [...new Set(usedBy.map(({ event }) => describeTarget(event.target)))].map(code).join('<br>') || 'niet expliciet',
        ];
      }),
    ),
  );
  content.push('');

  content.push('## Action list details');
  content.push('');
  const sortedActionEntries = Object.entries(actionLists).sort((a, b) => {
    const ai = Number(a[0].replace(/\D/g, '')) || 0;
    const bi = Number(b[0].replace(/\D/g, '')) || 0;
    return ai - bi || a[0].localeCompare(b[0]);
  });

  for (const [actionId, actionList] of sortedActionEntries) {
    const usedBy = eventsByAction.get(actionId) || [];
    content.push(`### ${actionId} — ${actionList.title || 'zonder titel'}`);
    content.push('');
    if (usedBy.length) {
      content.push('Triggers:');
      for (const { eventId, event } of usedBy) {
        content.push(
          `- ${code(eventId)} ${code(event.eventTypeId)} target ${code(describeTarget(event.target))}; offsets ${code(
            offsetSummary(event),
          )}; media ${(event.mediaQueries || []).map(code).join(', ') || '`niet expliciet`'}`,
        );
      }
    } else {
      content.push('Triggers: _niet direct gebruikt in de home payload._');
    }
    content.push('');

    if (actionList.continuousParameterGroups?.length) {
      content.push('Continuous scroll/mouse keyframes:');
      for (const parameterGroup of actionList.continuousParameterGroups) {
        content.push(`- Parameter: ${code(parameterGroup.type || parameterGroup.parameterLabel || parameterGroup.id)}`);
        for (const continuousGroup of parameterGroup.continuousActionGroups || []) {
          content.push(`  - Keyframe ${continuousGroup.keyframe}%`);
          for (const item of continuousGroup.actionItems || []) {
            content.push(`    - ${describeActionItem(item)}`);
          }
        }
      }
    }

    if (actionList.actionItemGroups?.length) {
      content.push('Discrete groepen:');
      actionList.actionItemGroups.forEach((group, index) => {
        const stagger = detectStagger(group);
        content.push(`- Groep ${index}${index === 0 && actionList.useFirstGroupAsInitialState ? ' (initial state)' : ''}${stagger ? ` — ${stagger}` : ''}`);
        for (const item of group.actionItems || []) {
          content.push(`  - ${describeActionItem(item)}`);
        }
      });
    }
    content.push('');
  }

  return content.join('\n');
}

function generateProgressMarkdown() {
  const cssFiles = fs.readdirSync(path.join(refDir, 'css')).filter((file) => file.endsWith('.css'));
  const jsFiles = fs.readdirSync(path.join(refDir, 'js')).filter((file) => file.endsWith('.js'));
  const ix2Data = loadIx2Data();
  return [
    '# PROGRESS.md',
    '',
    '## FASE 0 — Reverse engineering',
    '',
    '- Status: afgerond voor akkoord.',
    `- HTML gedownload: ${htmlFiles.map(([name]) => name).join(', ')}.`,
    `- CSS gedownload: ${cssFiles.join(', ')}.`,
    `- Webflow runtime-JS gedownload: ${jsFiles.join(', ')}.`,
    `- IX2 payload: ${
      ix2Data.find((entry) => entry.pageName === 'home' && entry.data) ||
      ix2Data.find((entry) => entry.pageName.startsWith('js/') && entry.data)
        ? 'gevonden en geparseerd uit Webflow IX2 payload'
        : 'niet gevonden of niet parsebaar'
    }.`,
    '- Afwijkingen: geen component-code geschreven; geen visuele browsermeting gedaan in FASE 0.',
    '- Ontbrekende extractiewaarden: waarden die niet rechtstreeks in CSS/HTML staan zijn in de markdown als `niet expliciet` gemarkeerd.',
    '',
    '## Volgende stap na akkoord',
    '',
    '- FASE 1: Next.js 15 project setup in deze map.',
    '',
  ].join('\n');
}

fs.writeFileSync(path.join(refDir, 'TOKENS.md'), generateTokensMarkdown());
fs.writeFileSync(path.join(refDir, 'MOTION.md'), generateMotionMarkdown());
fs.writeFileSync(path.join(refDir, 'STRUCTURE.md'), generateStructureMarkdown());
fs.writeFileSync(path.join(root, 'PROGRESS.md'), generateProgressMarkdown());

console.log('Generated .reference/TOKENS.md');
console.log('Generated .reference/MOTION.md');
console.log('Generated .reference/STRUCTURE.md');
console.log('Generated PROGRESS.md');
