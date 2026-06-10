import type { PlanHeaderConfig } from '../types/plan';

export const header: PlanHeaderConfig = {
  eyebrow: 'Budapest 2027 · Training Architecture',
  titleLines: ['Budapest', 'Build'],
  accentLine: 1,
  subtitle: 'July → October 2026 · 5 Pool + 3 Gym / Week · AG 40–44',
  pills: [
    { label: '5× Pool / Week', tone: 'cyan' },
    { label: '3× Gym / Week · Pool Before Gym', tone: 'gold' },
    { label: 'Mon–Sat · Sunday Off', tone: 'violet' },
    { label: 'Fly First · Always', tone: 'rose' },
  ],
  meta: [
    { label: 'Plan Start', value: '7 Jul 2026' },
    { label: 'Competition', value: '3 Oct · Asian Masters', tone: 'gold' },
    { label: 'Weeks', value: '12 Weeks', tone: 'cyan' },
    { label: 'Schedule', value: 'Mon–Sat · Sun Rest' },
    { label: 'Double Days', value: 'Mon / Wed / Fri (Pool → Gym)' },
    { label: 'Pool Only', value: 'Tue / Thu / Sat' },
  ],
};
