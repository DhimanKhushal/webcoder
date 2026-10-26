"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What kind of projects does Webcodder take on?",
    a: "Websites, e-commerce, custom software and brand identities, plus AI work: chatbots trained on your content, workflow automation and AI features inside existing products. If it needs dependable code or saves your team time, it is in our lane.",
  },
  {
    q: "How long does a typical website take?",
    a: "A focused business website usually takes 4–8 weeks. Larger platforms and custom software are scoped in phases, with clear milestones before development begins.",
  },
  {
    q: "Do you handle design and development together?",
    a: "Yes. Our process covers strategy, UX, visual design, motion and development, so the final product stays consistent from the first idea to launch.",
  },
  {
    q: "Will you support the product after launch?",
    a: "Absolutely. We offer ongoing support, optimization, feature development and maintenance plans based on how much help your team needs.",
  },
];

export function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = index === active;
        return (
          <div className="faq-item" key={faq.q} data-reveal-card>
            <button
              className="faq-question"
              onClick={() => setActive(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.q}
              {isOpen ? <Minus size={22} /> : <Plus size={22} />}
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`faq-answer ${isOpen ? "open" : ""}`}
              aria-hidden={!isOpen}
            >
              <div>
                <p>{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
