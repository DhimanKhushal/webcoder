import type { LegalDocument } from "@/lib/legal";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow" data-hero>{document.eyebrow}</p>
          <h1 data-hero>{document.title}</h1>
          <div className="page-hero-copy" data-hero>
            <p />
            <p>
              {document.summary}
              <span className="mt-4 block text-xs font-semibold uppercase tracking-label text-muted-mid">
                Last updated <time dateTime={document.updatedOn}>{document.updatedLabel}</time>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-label text-muted">On this page</p>
            <ol className="m-0 grid list-none gap-1 p-0">
              {document.sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex min-h-11 items-center gap-3 border-b border-line py-2 text-sm text-ink-soft transition-colors hover:text-accent-deep focus-visible:text-accent-deep"
                  >
                    <span className="w-5 shrink-0 text-xs tabular-nums text-muted-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="min-w-0 max-w-[68ch]">
            {document.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="scroll-mt-28 border-t border-line py-9 first:border-t-0 first:pt-0"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="m-0 mb-4 flex items-baseline gap-3 text-[clamp(20px,2vw,24px)] font-semibold leading-snug tracking-tight text-ink"
                >
                  <span className="text-sm tabular-nums text-muted-light">{String(index + 1).padStart(2, "0")}</span>
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="m-0 mb-4 text-[15px] leading-[1.75] text-muted last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="m-0 mt-4 grid list-disc gap-2 pl-5 text-[15px] leading-[1.7] text-muted marker:text-accent">
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
