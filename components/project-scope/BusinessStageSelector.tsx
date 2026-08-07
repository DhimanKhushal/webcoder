"use client";

import type { StageId, StageOption } from "./project-scope-types";

interface BusinessStageSelectorProps {
  options: StageOption[];
  value: StageId;
  onChange: (value: StageId) => void;
}

export function BusinessStageSelector({ options, value, onChange }: BusinessStageSelectorProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Business stage"
      className="grid overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1E293B] p-1.5 md:grid-cols-3"
    >
      {options.map((option) => {
        const active = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.id)}
            className={`rounded-xl px-4 py-4 text-left transition-colors focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] ${
              active ? "bg-[#0F172A] text-white" : "text-white hover:bg-[#243244]"
            }`}
          >
            <span className="block text-sm font-semibold">{option.title}</span>
            <span className={`mt-1 block text-xs leading-[1.45] ${active ? "text-white/60" : "text-[#CBD5E1]"}`}>
              {option.description}
            </span>
          </button>
        );
      })}
    </div>
  );
}
