"use client";

import { useMemo, useRef, useState } from "react";
import { Bot, Code2, Megaphone, Palette, PanelsTopLeft, Workflow } from "lucide-react";
import { BusinessStageSelector } from "./BusinessStageSelector";
import { GoalSelector } from "./GoalSelector";
import { ProjectSnapshot } from "./ProjectSnapshot";
import { RoadmapModal } from "./RoadmapModal";
import { ServiceCard } from "./ServiceCard";
import type {
  GoalId,
  GoalOption,
  ProjectEstimate,
  ServiceId,
  ServiceOption,
  StageId,
  StageOption,
} from "./project-scope-types";

const services: ServiceOption[] = [
  { id: "website", title: "Website Development", description: "Corporate websites, landing pages and e-commerce platforms", icon: Code2, complexity: 8 },
  { id: "design", title: "UI/UX Design", description: "Research-driven interfaces and complete design systems", icon: PanelsTopLeft, complexity: 7 },
  { id: "software", title: "Custom Software", description: "Dashboards, portals, APIs and business applications", icon: Workflow, complexity: 18 },
  { id: "marketing", title: "Digital Marketing", description: "SEO, paid campaigns, social media and lead generation", icon: Megaphone, complexity: 7 },
  { id: "ai", title: "AI & Automation", description: "AI chatbots, workflow automation and smart integrations", icon: Bot, complexity: 20 },
  { id: "branding", title: "Branding", description: "Logo design, brand identity and marketing creatives", icon: Palette, complexity: 6 },
];

const stages: StageOption[] = [
  { id: "startup", title: "Startup", description: "Launch and validate your idea" },
  { id: "growing", title: "Growing Business", description: "Improve performance and generate more leads" },
  { id: "established", title: "Established Brand", description: "Scale systems, marketing and operations" },
];

const goals: GoalOption[] = [
  { id: "launch", label: "Launch a new business" },
  { id: "redesign", label: "Redesign an existing website" },
  { id: "leads", label: "Generate more leads" },
  { id: "automate", label: "Automate business processes" },
  { id: "platform", label: "Build a custom platform" },
  { id: "visibility", label: "Improve online visibility" },
];

interface ContactDetails {
  name: string;
  email: string;
  phone: string;
}

const initialContact: ContactDetails = { name: "", email: "", phone: "" };

export function ProjectScopeBuilder() {
  const [selectedIds, setSelectedIds] = useState<ServiceId[]>([]);
  const [stage, setStage] = useState<StageId>("startup");
  const [goal, setGoal] = useState<GoalId>("launch");
  const [contact, setContact] = useState(initialContact);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactDetails | "services", string>>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const selectedServices = useMemo(
    () => services.filter((service) => selectedIds.includes(service.id)),
    [selectedIds]
  );
  const estimate = useMemo(
    () => calculateEstimate(selectedServices, stage, goal),
    [selectedServices, stage, goal]
  );

  function toggleService(id: ServiceId) {
    setSelectedIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
    setErrors((current) => ({ ...current, services: undefined }));
  }

  function validate() {
    const nextErrors: typeof errors = {};
    if (!selectedIds.length) nextErrors.services = "Select at least one required service.";
    if (!contact.name.trim()) nextErrors.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(contact.email)) nextErrors.email = "Enter a valid work email.";
    if (!/^[+()\d\s-]{7,20}$/.test(contact.phone)) nextErrors.phone = "Enter a valid phone number.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function submitRoadmap() {
    if (!validate()) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      formRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      return;
    }
    setModalOpen(true);
  }

  return (
    <section className="bg-paper py-[clamp(82px,9vw,128px)]" data-home-section aria-labelledby="scope-builder-title">
      <div className="mx-auto w-[min(1240px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]">
        <div className="mb-12 grid gap-6 border-b border-ink/15 pb-9 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="eyebrow">Project scope builder</p>
            <h2 id="scope-builder-title" className="m-0 max-w-2xl text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.04em] text-ink">
              Turn an ambitious idea into a clear starting point.
            </h2>
          </div>
          <p className="m-0 max-w-lg text-[15px] leading-6 text-muted lg:justify-self-end">
            Choose what you need. We&apos;ll shape the right delivery model, timeline and specialist team around your priorities.
          </p>
        </div>

        <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1.18fr)_minmax(390px,0.82fr)] xl:gap-12">
          <form id="project-scope-form" ref={formRef} onSubmit={(event) => { event.preventDefault(); submitRoadmap(); }} noValidate className="min-w-0 scroll-mt-28">
            <FormSection number="01" title="Required services" description="Select every capability your project needs.">
              <div className="grid gap-3 md:grid-cols-2">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} selected={selectedIds.includes(service.id)} onToggle={toggleService} />
                ))}
              </div>
              {errors.services && <p role="alert" className="mb-0 mt-3 text-sm font-medium text-danger">{errors.services}</p>}
            </FormSection>

            <FormSection number="02" title="Business stage" description="This helps us calibrate pace, risk and scale.">
              <BusinessStageSelector options={stages} value={stage} onChange={setStage} />
            </FormSection>

            <FormSection number="03" title="Primary goal" description="Choose the outcome that matters most right now.">
              <GoalSelector options={goals} value={goal} onChange={setGoal} />
            </FormSection>

            <div className="border-t border-ink/15 pt-8">
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h3 className="m-0 text-xl font-semibold tracking-[-0.025em]">Where should we send the roadmap?</h3>
                <span className="hidden text-xs text-[#777] sm:block">All fields required</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" autoComplete="name" value={contact.name} error={errors.name} onChange={(value) => setContact({ ...contact, name: value })} />
                <Field label="Work email" name="email" type="email" autoComplete="email" value={contact.email} error={errors.email} onChange={(value) => setContact({ ...contact, email: value })} />
                <div className="sm:col-span-2">
                  <Field label="Phone" name="phone" type="tel" autoComplete="tel" value={contact.phone} error={errors.phone} onChange={(value) => setContact({ ...contact, phone: value })} />
                </div>
              </div>
            </div>
          </form>

          <ProjectSnapshot estimate={estimate} selectedServices={selectedServices} />
        </div>
      </div>
      <RoadmapModal open={modalOpen} name={contact.name} onClose={() => setModalOpen(false)} />
    </section>
  );
}

function FormSection({ number, title, description, children }: { number: string; title: string; description: string; children: React.ReactNode }) {
  return (
    <fieldset className="mb-10 border-0 border-t border-ink/15 p-0 pt-7">
      <legend className="sr-only">{title}</legend>
      <div className="mb-6 grid grid-cols-[34px_1fr] gap-3">
        <span className="pt-1 text-xs font-semibold tracking-[0.12em] text-accent" aria-hidden="true">{number}</span>
        <div>
          <h3 className="m-0 text-xl font-semibold tracking-[-0.025em]">{title}</h3>
          <p className="mb-0 mt-1 text-sm text-muted">{description}</p>
        </div>
      </div>
      {children}
    </fieldset>
  );
}

function Field({ label, name, type = "text", autoComplete, value, error, onChange }: { label: string; name: keyof ContactDetails; type?: string; autoComplete: string; value: string; error?: string; onChange: (value: string) => void }) {
  const errorId = `${name}-error`;
  return (
    <label className="block text-sm font-medium text-[#303030]">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`mt-2 block min-h-13 w-full rounded-xl border bg-white px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-[#999] focus:border-accent focus:ring-2 focus:ring-accent/15 ${error ? "border-danger" : "border-ink/15"}`}
      />
      {error && <span id={errorId} role="alert" className="mt-1.5 block text-xs font-medium text-danger">{error}</span>}
    </label>
  );
}

function calculateEstimate(selected: ServiceOption[], stage: StageId, goal: GoalId): ProjectEstimate {
  const ids = new Set(selected.map((service) => service.id));
  const count = selected.length;
  let timeline = count === 0 ? "—" : count === 1 ? "3–5 weeks" : count === 2 ? "5–8 weeks" : "8–14 weeks";
  if (stage === "established" && count > 0) timeline = count === 1 ? "4–6 weeks" : count === 2 ? "6–9 weeks" : "10–16 weeks";

  const stageWeight = stage === "established" ? 10 : stage === "growing" ? 5 : 0;
  const goalWeight = goal === "automate" || goal === "platform" ? 8 : 2;
  const complexity = count === 0 ? 12 : Math.min(96, 20 + selected.reduce((sum, service) => sum + service.complexity, 0) + stageWeight + goalWeight);

  let solution = "Select services to shape your solution";
  if (ids.has("ai") && ids.has("software")) solution = "Intelligent Business Platform";
  else if (ids.has("website") && ids.has("design") && ids.has("marketing")) solution = "Digital Growth Ecosystem";
  else if (ids.has("website") && ids.has("design")) solution = "Conversion-Ready Web Experience";
  else if (ids.has("branding") && ids.has("marketing")) solution = "Brand Growth Engine";
  else if (ids.has("software")) solution = "Custom Digital Product";
  else if (ids.has("ai")) solution = "AI-Enabled Workflow System";
  else if (selected[0]) solution = `${selected[0].title} Programme`;

  const team = ["Strategy Lead"];
  if (ids.has("design") || ids.has("branding") || ids.has("website")) team.push("Product Designer");
  if (ids.has("website") || ids.has("software") || ids.has("ai")) team.push("Senior Developer");
  if (ids.has("marketing")) team.push("Growth Specialist");
  if (count >= 3) team.push("Project Manager");

  const outcomes: string[] = [];
  if (ids.has("website") || ids.has("design")) outcomes.push("A faster, clearer customer experience");
  if (ids.has("marketing")) outcomes.push("More qualified reach and lead opportunities");
  if (ids.has("software") || ids.has("ai") || goal === "automate") outcomes.push("Less manual work and stronger operations");
  if (ids.has("branding")) outcomes.push("A consistent, recognisable market presence");
  if (!outcomes.length) outcomes.push("A focused plan aligned to your primary goal", "Clear priorities, milestones and next steps");

  return { solution, timeline, complexity, team: [...new Set(team)], outcomes: outcomes.slice(0, 3) };
}
