"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What kind of projects does Webcodder take on?",
    a: "We work on marketing websites, e-commerce experiences, dashboards, web apps, brand identities and custom software. If it needs a sharp digital experience and dependable code, it is in our lane.",
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
          <div className="faq-item" key={faq.q}>
            <button
              className="faq-question"
              onClick={() => setActive(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              {faq.q}
              {isOpen ? <Minus size={22} /> : <Plus size={22} />}
            </button>
            {isOpen && (
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
