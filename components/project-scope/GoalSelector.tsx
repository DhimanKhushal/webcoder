"use client";

import { Check } from "lucide-react";
import type { GoalId, GoalOption } from "./project-scope-types";

interface GoalSelectorProps {
  options: GoalOption[];
  value: GoalId;
  onChange: (value: GoalId) => void;
}

export function GoalSelector({ options, value, onChange }: GoalSelectorProps) {
  return (
    <div role="radiogroup" aria-label="Primary goal" className="grid gap-2.5 sm:grid-cols-2">
      {options.map((option) => {
        const active = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.id)}
            className={`flex min-h-12 items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8CFF] ${
              active
                ? "border-[#4F8CFF] bg-[#EAF2FF] text-[#121212]"
                : "border-[#121212]/12 bg-white text-[#454545] hover:border-[#121212]/35"
            }`}
          >
            <span className={`grid size-5 shrink-0 place-items-center rounded-full border ${active ? "border-[#4F8CFF] bg-[#4F8CFF]" : "border-[#121212]/25"}`}>
              {active && <Check size={12} strokeWidth={3} aria-hidden="true" />}
            </span>
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
