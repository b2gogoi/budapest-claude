import type { TrainingPlan } from '../types/plan';
import { header } from './header';
import { philosophy, philosophySectionLabel } from './philosophy';
import { phaseOverview, phaseOverviewSectionLabel } from './phaseOverview';
import { tracker } from './tracker';
import { phase1 } from './phases/phase1';
import { phase2 } from './phases/phase2';
import { phase3 } from './phases/phase3';
import { phase4 } from './phases/phase4';

/** Bundled default plan. Bump `version` whenever this content changes so the
 * copy seeded into localStorage gets refreshed. */
export const defaultPlan: TrainingPlan = {
  version: 2,
  header,
  philosophy: { sectionLabel: philosophySectionLabel, items: philosophy },
  phaseOverview: { sectionLabel: phaseOverviewSectionLabel, cards: phaseOverview },
  phases: [phase1, phase2, phase3, phase4],
  tracker,
  footer:
    'Budapest 2027 Build · AG 40–44 · 5 Pool + 3 Gym / Week · Mon–Sat · Sunday Off · Pool Before Gym · Fly First · Always',
};
