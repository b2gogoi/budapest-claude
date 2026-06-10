import type { TrackerConfig } from '../types/plan';

export const tracker: TrackerConfig = {
  sectionLabel: '100 Fly · Longitudinal Series · Fill in as you go',
  title: '100 Fly Foundation Tracker — 2026',
  subtitle:
    'Race honestly · Record 50 split + stroke count per 25 + breakdown point · Watch the foundation build',
  tone: 'violet',
  meets: [
    { id: 'baseline', label: 'Baseline', date: 'Last Year PB', caption: 'starting point', fixedTime: '1:39.56' },
    { id: 'w1-tt', label: 'W1 TT', date: '~7 Jul', caption: 'season zero' },
    { id: 'w7-tt', label: 'W7 TT ★', date: '~18 Aug', caption: 'mid-block key' },
    { id: 'w9-w10', label: 'W9 + W10', date: '~2 / 9 Sep', caption: 'phase 3 checks' },
    { id: 'w11-pretaper', label: 'W11 Pre-Taper', date: '~16 Sep', caption: 'final pre-taper' },
    { id: 'e1-asian-masters', label: 'E1 Asian Masters', date: '3–10 Oct', caption: 'first race post-recomp' },
    { id: 'e2-e3', label: 'E2 + E3', date: '24 Oct / 20 Nov', caption: '100 fly focus meets' },
    { id: 'e4-optional', label: 'E4 Optional', date: '12 Dec', caption: 'season close if ready' },
  ],
};
