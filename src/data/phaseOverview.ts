import type { PhaseOverviewCard } from '../types/plan';

export const phaseOverviewSectionLabel = '4-Phase Season Architecture';

export const phaseOverview: PhaseOverviewCard[] = [
  {
    phaseLabel: 'Phase 1 · W1–4',
    name: 'Foundation',
    dates: '7 Jul – 3 Aug',
    duration: '4',
    durationUnit: 'weeks',
    tone: 'cyan',
    tags: [
      { label: 'Pool', text: 'Technique reset, SA cues in water, 100 Fly weekly TT, drill-heavy' },
      { label: 'Gym', text: 'Full-body compound, SA loading, hypertrophy base' },
    ],
  },
  {
    phaseLabel: 'Phase 2 · W5–8',
    name: 'Build',
    dates: '4 Aug – 31 Aug',
    duration: '4',
    durationUnit: 'weeks',
    tone: 'gold',
    tags: [
      { label: 'Pool', text: 'Broken 100s, race-pace 50s, speed endurance' },
      { label: 'Gym', text: 'Strength peak 5×5, power foundations, loaded SA' },
    ],
  },
  {
    phaseLabel: 'Phase 3 · W9–11',
    name: 'Sharpen',
    dates: '1 Sep – 19 Sep',
    duration: '3',
    durationUnit: 'weeks',
    tone: 'violet',
    tags: [
      { label: 'Pool', text: 'Max 25s, starts/turns, full dress rehearsal, 100 Fly at race effort' },
      { label: 'Gym', text: 'Power conversion, velocity only, volume drops sharply' },
    ],
  },
  {
    phaseLabel: 'Phase 4 · Taper',
    name: 'Peak',
    dates: '22 Sep – 2 Oct',
    duration: '10',
    durationUnit: 'days',
    tone: 'rose',
    tags: [
      { label: 'Pool', text: 'Short sharp touches, race activation only' },
      { label: 'Gym', text: 'Activation only then nothing' },
    ],
  },
];
