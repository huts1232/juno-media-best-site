import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const css = fs.readFileSync(
  path.join(root, '.reference/css/outcrowd-2-0-new-superfinal.webflow.shared.586b00c50.min.css'),
  'utf8',
);

function unique(values) {
  return [...new Set(values.filter(Boolean).map((value) => value.trim()))].sort((a, b) =>
    a.localeCompare(b),
  );
}

function declarationsFor(props) {
  const found = [];
  const ruleRe = /([^{}]+)\{([^{}]*)\}/g;
  let rule;
  while ((rule = ruleRe.exec(css))) {
    const body = rule[2];
    for (const decl of body.split(';')) {
      const index = decl.indexOf(':');
      if (index < 0) continue;
      const prop = decl.slice(0, index).trim();
      const value = decl.slice(index + 1).trim();
      if (props.includes(prop)) found.push(value);
    }
  }
  return unique(found);
}

function fontFaceValues() {
  const found = [];
  const faceRe = /@font-face\{([^{}]+)\}/g;
  let match;
  while ((match = faceRe.exec(css))) {
    found.push(match[1].trim());
  }
  return unique(found);
}

function mediaQueries() {
  return unique([...css.matchAll(/@media\s+([^{]+)\{/g)].map((match) => match[1]));
}

function colorValues() {
  const raw = declarationsFor(['color', 'background-color', 'border-color', 'fill']);
  const colors = [];
  const colorRe =
    /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|hsla?\([^)]*\)|\b(?:transparent|currentColor|black|white|red|inherit|unset)\b|var\(--[^)]+\)/g;
  for (const value of raw) {
    const matches = value.match(colorRe);
    colors.push(...(matches || [value]));
  }
  return unique(colors);
}

function customProperties() {
  const found = [];
  const customRe = /(--[a-zA-Z0-9_-]+)\s*:\s*([^;{}]+)/g;
  let match;
  while ((match = customRe.exec(css))) {
    found.push(`${match[1]}: ${match[2]}`);
  }
  return unique(found);
}

function writeGroup(lines, label, prefix, values) {
  lines.push('');
  lines.push(`  /* Raw ${label} values extracted from the Webflow bundle. */`);
  values.forEach((value, index) => {
    lines.push(`  --ref-${prefix}-${String(index + 1).padStart(3, '0')}: ${value};`);
  });
}

const lines = [
  ':root {',
  '  --color-bg: #080808;',
  '  --color-bg-alt: #101010;',
  '  --color-ink: #fff;',
  '  --color-ink-muted: #a3a3a3;',
  '  --color-accent: #fe4a23;',
  '  --color-accent-soft: #8a5cff;',
  '  --color-line: #ffffff1a;',
  '',
  '  --font-display: var(--font-itc-avant-garde-md), "Itcavantgardestd Md", sans-serif;',
  '  --font-body: var(--font-itc-avant-garde-md), "Itcavantgardestd Md", sans-serif;',
  '  --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", monospace;',
  '',
  '  --fs-hero: 7.5rem;',
  '  --fs-h1: 7.5rem;',
  '  --fs-h2: 4.44444rem;',
  '  --fs-h3: 3.5rem;',
  '  --fs-h4: 1.5rem;',
  '  --fs-h5: 1rem;',
  '  --fs-h6: .875rem;',
  '  --fs-body-lg: 1.25rem;',
  '  --fs-body: 1rem;',
  '  --fs-caption: .875rem;',
  '  --fs-eyebrow: .97222rem;',
  '',
  '  --lh-tight: 100%;',
  '  --lh-normal: 140%;',
  '  --lh-loose: 160%;',
  '  --ls-tight: -.08333rem;',
  '  --ls-normal: 0;',
  '  --ls-wide: .12em;',
  '',
  '  --space-1: .5rem;',
  '  --space-2: 1rem;',
  '  --space-3: 1.25rem;',
  '  --space-4: 1.5rem;',
  '  --space-5: 2rem;',
  '  --space-6: 2.5rem;',
  '  --space-7: 3rem;',
  '  --space-8: 4rem;',
  '  --space-9: 5rem;',
  '  --space-10: 6rem;',
  '  --space-11: 8rem;',
  '  --space-12: 10rem;',
  '  --container-max: 90rem;',
  '  --gutter: 1.25rem;',
  '',
  '  --radius-sm: .56rem;',
  '  --radius-md: 1.25rem;',
  '  --radius-lg: 1.88rem;',
  '  --radius-pill: 100px;',
  '  --shadow-card: 0 0 0 1px #ffffff1a;',
  '  --shadow-float: 0 1.25rem 3rem #00000026;',
  '',
  '  --dur-fast: .3s;',
  '  --dur-base: .5s;',
  '  --dur-slow: .8s;',
  '  --dur-reveal: 1s;',
  '  --ease-out-expo: cubic-bezier(.16, 1, .3, 1);',
  '  --ease-out-quart: cubic-bezier(.25, 1, .5, 1);',
  '  --ease-in-out: cubic-bezier(.65, 0, .35, 1);',
];

writeGroup(lines, 'custom properties', 'custom', customProperties());
writeGroup(lines, 'colors', 'color', colorValues());
writeGroup(lines, 'font-face declarations', 'font-face', fontFaceValues());
writeGroup(lines, 'font-family stacks', 'font-family', declarationsFor(['font-family']));
writeGroup(lines, 'font sizes', 'font-size', declarationsFor(['font-size']));
writeGroup(lines, 'line heights', 'line-height', declarationsFor(['line-height']));
writeGroup(lines, 'letter spacing', 'letter-spacing', declarationsFor(['letter-spacing']));
writeGroup(
  lines,
  'spacing',
  'space',
  declarationsFor([
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
  ]),
);
writeGroup(lines, 'media queries', 'media', mediaQueries());
writeGroup(
  lines,
  'radii, shadows, and borders',
  'surface',
  declarationsFor(['border-radius', 'box-shadow', 'border', 'border-color', 'border-style', 'border-width']),
);
writeGroup(lines, 'transitions and animations', 'motion', declarationsFor(['transition', 'animation']));

lines.push('}');
lines.push('');

fs.writeFileSync(path.join(root, 'src/styles/tokens.css'), lines.join('\n'));
