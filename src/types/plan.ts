/** Core domain types for the training plan. All plan content is data-driven
 * config conforming to these types — see src/data. */

export type AccentColor = 'gold' | 'cyan' | 'violet' | 'rose' | 'emerald' | 'slate';

export type SessionKind = 'pool' | 'gym' | 'rest' | 'competition';

export interface SessionItem {
  /** Markdown-lite: **bold** and _em_ are supported (see <RichText/>). */
  text: string;
  /** 'key' = highlighted set (gold marker), 'alert' = race-critical (rose). */
  emphasis?: 'key' | 'alert';
}

export interface Session {
  kind: SessionKind;
  /** Short label, e.g. "Pool A", "Gym B", "Rest", "Competition". */
  label: string;
  title: string;
  items: SessionItem[];
  /** Footer line, e.g. "~1300m · Season Zero data point". */
  volume?: string;
  /** Accent override (used by competition sessions). */
  accent?: AccentColor;
}

export interface PlanDay {
  /** Column header, e.g. "Mon", "Thu 3 Oct", "Day 4–5". */
  label: string;
  /** Double day → shows the Pool+Gym tag in the column header. */
  double?: boolean;
  /** Rest day → dimmed column treatment. */
  rest?: boolean;
  /** Tinted column header for special days (race days). */
  highlight?: AccentColor;
  sessions: Session[];
}

export interface WeekNote {
  label: string;
  /** Markdown-lite text. */
  text: string;
}

export interface Week {
  id: string;
  num: string;
  /** ISO date (yyyy-mm-dd) of the week's first day — editable in Configure. */
  startDate: string;
  /** Days the week spans for the displayed date range (default 6, Mon–Sat). */
  spanDays?: number;
  title: string;
  accent: AccentColor;
  badges: string[];
  days: PlanDay[];
  note?: WeekNote;
  /** Expanded on first visit (before the user has toggled anything). */
  defaultOpen?: boolean;
}

export interface PhaseTag {
  label: string;
  tone: AccentColor;
}

export interface Phase {
  id: string;
  number: number;
  name: string;
  sectionLabel: string;
  meta: string;
  accent: AccentColor;
  tags: PhaseTag[];
  weeks: Week[];
}

/* ---- Page-level config ---- */

export interface HeaderPill {
  label: string;
  tone: AccentColor;
}

export interface HeaderMetaItem {
  label: string;
  value: string;
  tone?: AccentColor;
}

export interface PlanHeaderConfig {
  eyebrow: string;
  titleLines: [string, string];
  /** Index of the title line rendered in the accent colour. */
  accentLine: number;
  subtitle: string;
  pills: HeaderPill[];
  meta: HeaderMetaItem[];
}

export interface PhilosophyItem {
  number: string;
  title: string;
  body: string;
  tone: AccentColor;
}

export interface PhaseOverviewCard {
  phaseLabel: string;
  name: string;
  dates: string;
  duration: string;
  durationUnit: string;
  tone: AccentColor;
  tags: { label: string; text: string }[];
}

export interface TrackerMeet {
  id: string;
  label: string;
  date: string;
  caption: string;
  /** Pre-filled, non-editable value (e.g. last year's PB). */
  fixedTime?: string;
}

export interface TrackerConfig {
  title: string;
  subtitle: string;
  sectionLabel: string;
  tone: AccentColor;
  meets: TrackerMeet[];
}

export interface TrainingPlan {
  version: number;
  header: PlanHeaderConfig;
  philosophy: { sectionLabel: string; items: PhilosophyItem[] };
  phaseOverview: { sectionLabel: string; cards: PhaseOverviewCard[] };
  phases: Phase[];
  tracker: TrackerConfig;
  footer: string;
}
