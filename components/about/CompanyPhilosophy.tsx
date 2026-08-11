const philosophyWords = ["Think.", "Design.", "Build.", "Scale."];

export function CompanyPhilosophy() {
  return (
    <section className="company-philosophy" aria-labelledby="philosophy-title" data-philosophy>
      <div className="philosophy-blueprint" aria-hidden="true" data-philosophy-blueprint>
        <span className="philosophy-line philosophy-line-v-one" />
        <span className="philosophy-line philosophy-line-v-two" />
        <span className="philosophy-line philosophy-line-h-one" />
        <span className="philosophy-line philosophy-line-h-two" />
        <span className="philosophy-axis-mark philosophy-axis-mark-one" />
        <span className="philosophy-axis-mark philosophy-axis-mark-two" />
      </div>

      <div className="container philosophy-container" data-philosophy-content>
        <div className="philosophy-statement">
          <p className="eyebrow philosophy-eyebrow">Our philosophy</p>
          <div className="philosophy-heading-wrap">
            <span className="philosophy-rail" aria-hidden="true">
              <span className="philosophy-rail-progress" data-philosophy-progress />
            </span>
            <h2 className="philosophy-heading" id="philosophy-title">
              {philosophyWords.map((word) => (
                <span className="philosophy-word" key={word} data-philosophy-word>
                  <i aria-hidden="true" data-philosophy-indicator />
                  {word}
                </span>
              ))}
            </h2>
          </div>
        </div>

        <p className="philosophy-copy">
          <span>Every project begins with understanding.</span>
          <span>Every decision is driven by strategy.</span>
          <span>Every interface is designed with intention.</span>
          <span>Every solution is engineered for long-term growth.</span>
        </p>
      </div>
    </section>
  );
}
