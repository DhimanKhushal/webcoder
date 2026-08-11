import { tw } from "@/lib/tailwind";
const philosophyWords = ["Think.", "Design.", "Build.", "Scale."];

export function CompanyPhilosophy() {
  return (
    <section className={tw("company-philosophy")} aria-labelledby="philosophy-title" data-philosophy>
      <div className={tw("philosophy-blueprint")} aria-hidden="true" data-philosophy-blueprint>
        <span className={tw("philosophy-line philosophy-line-v-one")} />
        <span className={tw("philosophy-line philosophy-line-v-two")} />
        <span className={tw("philosophy-line philosophy-line-h-one")} />
        <span className={tw("philosophy-line philosophy-line-h-two")} />
        <span className={tw("philosophy-axis-mark philosophy-axis-mark-one")} />
        <span className={tw("philosophy-axis-mark philosophy-axis-mark-two")} />
      </div>

      <div className={tw("container philosophy-container")} data-philosophy-content>
        <div className={tw("philosophy-statement")}>
          <p className={tw("eyebrow philosophy-eyebrow")}>Our philosophy</p>
          <div className={tw("philosophy-heading-wrap")}>
            <span className={tw("philosophy-rail")} aria-hidden="true">
              <span className={tw("philosophy-rail-progress")} data-philosophy-progress />
            </span>
            <h2 className={tw("philosophy-heading")} id="philosophy-title">
              {philosophyWords.map((word) => (
                <span className={tw("philosophy-word")} key={word} data-philosophy-word>
                  <i aria-hidden="true" data-philosophy-indicator />
                  {word}
                </span>
              ))}
            </h2>
          </div>
        </div>

        <p className={tw("philosophy-copy")}>
          <span>Every project begins with understanding.</span>
          <span>Every decision is driven by strategy.</span>
          <span>Every interface is designed with intention.</span>
          <span>Every solution is engineered for long-term growth.</span>
        </p>
      </div>
    </section>
  );
}
