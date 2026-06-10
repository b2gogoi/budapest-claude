# Budapest Build — Training Plan 2026

The Budapest Qualifier. A React + TypeScript + Tailwind CSS web app for the
"Budapest Build" 12-week swim training plan (July → October 2026), converted
from a static HTML page into a modular, configurable, data-driven application.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Features

- **Dark / light mode** — token-based design system; theme persisted to
  localStorage and applied before first paint (no flash). Falls back to the
  OS preference on first visit.
- **All data in localStorage** — the plan content itself is seeded into
  localStorage (versioned, refreshed when the bundled plan's `version` is
  bumped), alongside all user state:
  - expanded/collapsed weeks
  - per-session completion checkboxes (with a `n/m done` counter per week)
  - editable 100 Fly tracker times
  - theme choice
- **Fully data-driven** — every section (header, philosophy, phase cards,
  weekly session grids, tracker, footer) renders from typed config in
  `src/data`. Editing the plan never requires touching components.

## Architecture

```
src/
  types/plan.ts            # Domain types (TrainingPlan, Phase, Week, Session…)
  config/storage.ts        # Centralised localStorage keys
  data/                    # Plan content as typed config
    plan.ts                #   Assembles the default plan (versioned)
    loadPlan.ts            #   Seeds/loads the plan from localStorage
    header.ts, philosophy.ts, phaseOverview.ts, tracker.ts
    phases/phase1..4.ts    #   Weekly session data per training phase
  theme/
    ThemeProvider.tsx      # Theme context + <html class="dark"> toggling
    accents.ts             # Accent colour → Tailwind class lookups
  hooks/useLocalStorage.ts # Generic persisted state hook
  state/PlanStateProvider.tsx  # Expanded weeks, completion, tracker times
  components/
    ui/                    # Design-system primitives
      SectionHeader, Pill, Tag, Badge, RichText, ThemeToggle
    plan/                  # Feature components
      PlanHeader, PhilosophyGrid, PhaseOverview, PhaseSection,
      WeekCard, DayColumn, SessionCard, FlyTracker, PlanFooter
```

### Design system

Design tokens live in `src/index.css` as CSS variables (RGB triplets) defined
per theme (`:root` = light, `.dark` = dark) and surfaced through Tailwind as
semantic colours: `base`, `surface`, `surface-2`, `line`, `line-2`, `ink`,
`muted`, `faint`, and six `accent-*` colours. Accents are brighter in dark
mode and deeper in light mode for contrast, and support Tailwind opacity
modifiers (e.g. `bg-accent-gold/10`).

Typography: Bebas Neue (display), Barlow Condensed, Barlow (body), DM Mono.

### Configurability

- Plan content: edit files under `src/data` (or the `bb:plan` localStorage
  entry directly) — bump `defaultPlan.version` to push new bundled content
  over a stale stored copy.
- Item text supports markdown-lite (`**bold**`, `_em_`) rendered by
  `<RichText/>`.
- Accent tones, storage keys, and fonts each have a single source of truth
  (`theme/accents.ts`, `config/storage.ts`, `tailwind.config.js`).
