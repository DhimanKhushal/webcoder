"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import styles from "./service-detail.module.css";

export function ServiceFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, index) => {
        const isOpen = index === active;
        return (
          <div className={styles.faqItem} key={faq.q}>
            <button
              type="button"
              className={styles.faqQuestion}
              onClick={() => setActive(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`service-faq-${index}`}
            >
              {faq.q}
              {isOpen ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
            </button>
            <div
              id={`service-faq-${index}`}
              className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}
              aria-hidden={!isOpen}
            >
              <div><p>{faq.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
