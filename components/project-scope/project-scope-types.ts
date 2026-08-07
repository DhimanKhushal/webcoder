import type { LucideIcon } from "lucide-react";

export type ServiceId =
  | "website"
  | "design"
  | "software"
  | "marketing"
  | "ai"
  | "branding";

export type StageId = "startup" | "growing" | "established";

export type GoalId =
  | "launch"
  | "redesign"
  | "leads"
  | "automate"
  | "platform"
  | "visibility";

export interface ServiceOption {
  id: ServiceId;
  title: string;
  description: string;
  icon: LucideIcon;
  complexity: number;
}

export interface StageOption {
  id: StageId;
  title: string;
  description: string;
}

export interface GoalOption {
  id: GoalId;
  label: string;
}

export interface ProjectEstimate {
  solution: string;
  timeline: string;
  complexity: number;
  team: string[];
  outcomes: string[];
}
