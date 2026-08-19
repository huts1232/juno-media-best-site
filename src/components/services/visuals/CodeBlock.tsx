/**
 * Codeblok met regels die zich typen: elke regel wordt via clip-path
 * opengeschoven met stagger (GSAP, [data-code-line]). De cursor knippert via
 * CSS.
 */
const LINES = [
  [
    { text: "export const", tone: "keyword" },
    { text: " launch", tone: "name" },
    { text: " = ", tone: "plain" },
    { text: "async", tone: "keyword" },
    { text: " () => {", tone: "plain" },
  ],
  [
    { text: "  await", tone: "keyword" },
    { text: " build", tone: "fn" },
    { text: "(system)", tone: "plain" },
  ],
  [
    { text: "  track", tone: "fn" },
    { text: "(", tone: "plain" },
    { text: "'launch'", tone: "string" },
    { text: ")", tone: "plain" },
  ],
  [
    { text: "  return", tone: "keyword" },
    { text: " ship", tone: "fn" },
    { text: "()", tone: "plain" },
  ],
  [{ text: "}", tone: "plain" }],
] as const;

export function CodeBlock() {
  return (
    <div className="sv-code" aria-hidden="true">
      <div className="sv-code__gutter">
        {LINES.map((_, index) => (
          <span key={index}>{index + 1}</span>
        ))}
      </div>
      <pre className="sv-code__body">
        {LINES.map((line, index) => (
          <span key={index} data-code-line className="sv-code__line">
            {line.map((token, tokenIndex) => (
              <span key={tokenIndex} className={`sv-code__token sv-code__token--${token.tone}`}>
                {token.text}
              </span>
            ))}
            {index === LINES.length - 1 ? <span className="sv-code__cursor" /> : null}
          </span>
        ))}
      </pre>
    </div>
  );
}
