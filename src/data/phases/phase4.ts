import type { Phase } from '../../types/plan';

export const phase4: Phase = {
  id: 'phase-4',
  number: 4,
  name: 'Peak Taper',
  sectionLabel: 'Phase 4 · Peak Taper · 22 Sep – 2 Oct',
  meta: '22 Sep – 2 Oct · Volume −60% · Intensity stays · Arrive sharp',
  accent: 'rose',
  tags: [
    { label: 'Volume −60%', tone: 'emerald' },
    { label: '1 Gym Session Total', tone: 'emerald' },
    { label: 'Race 3 Oct', tone: 'rose' },
  ],
  weeks: [
    {
      id: 't1',
      num: 'T1',
      startDate: '2026-09-22',
      title: 'Taper Week · 3 Pool · 1 Gym · Rest Is Training Now',
      accent: 'rose',
      badges: ['~1800m pool', '1 gym only'],
      days: [
        {
          label: 'Mon',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool A',
              title: 'Taper Sharpener',
              items: [
                { text: '**WU:** 400 easy — feel the water' },
                { text: '**Build:** 4×50 to 85%' },
                {
                  text: '**25s Fly @MAX:** 4×25 — 3 min full rest — feel how fast you are now',
                  emphasis: 'key',
                },
                { text: '**25s Free @MAX:** 2×25' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~700m · quality only',
            },
            {
              kind: 'gym',
              label: 'Gym — Final',
              title: 'SA Activation + Power Touches',
              items: [
                { text: '**SA Activation:** Full circuit — your pre-comp ritual now' },
                { text: '**Jump Squat:** 3×2 — feel explosive' },
                { text: '**Explosive Pull-up:** 3×2' },
                { text: '**Hip Thrust:** 3×3 drive fast' },
                { text: '_Final gym session before Asian Masters._' },
              ],
              volume: '~25 min max',
            },
          ],
        },
        {
          label: 'Tue',
          rest: true,
          sessions: [
            {
              kind: 'rest',
              label: 'Rest',
              title: 'Full Rest',
              items: [{ text: 'SA activation if desired. Walk. Sleep.' }],
            },
          ],
        },
        {
          label: 'Wed',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool B',
              title: 'Race Feel Swim',
              items: [
                { text: '**WU:** 300 easy' },
                { text: '**Build:** 4×50 to 85%' },
                { text: '**50 Fly:** 1×50 @race feel — feel the power', emphasis: 'key' },
                { text: '**50 Free:** 1×50 @race feel' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~600m',
            },
          ],
        },
        {
          label: 'Thu',
          rest: true,
          sessions: [
            {
              kind: 'rest',
              label: 'Rest',
              title: 'Full Rest',
              items: [{ text: 'Sleep. Eat. Prepare kit.' }],
            },
          ],
        },
        {
          label: 'Fri',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool C',
              title: 'Final Sharpener',
              items: [
                { text: '**WU:** 200 easy' },
                { text: '**Starts:** 4×(start+UW+breakout) — feel entry' },
                { text: '**50 Fly:** 1×50 @race feel' },
                { text: '**50 Free:** 1×50 @race feel' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~500m',
            },
          ],
        },
        {
          label: 'Sat',
          rest: true,
          sessions: [
            {
              kind: 'rest',
              label: 'Rest',
              title: 'Rest + Travel Prep',
              items: [{ text: 'Review race plan. SA activation only.' }],
            },
          ],
        },
      ],
      note: {
        label: 'Taper Week',
        text: "**Volume drops 60%. Intensity stays high on the few reps that happen.** The max 25s on Monday will feel different — faster, lighter, elastic. That's the taper working. One gym session only. Rest days are not optional. Race plan: 100 Fly Day 1–2 of the meet, rest, 50 Fly + 50 Free Day 4–5.",
      },
    },
    {
      id: 't2',
      num: 'T2',
      startDate: '2026-09-29',
      spanDays: 5,
      title: 'Race Week · Asian Masters Opens 3 Oct',
      accent: 'rose',
      badges: ['~500m pool', 'No gym'],
      days: [
        {
          label: 'Mon',
          rest: true,
          sessions: [
            {
              kind: 'rest',
              label: 'Rest',
              title: '3 Days Out',
              items: [{ text: 'SA activation only. Walk.' }],
            },
          ],
        },
        {
          label: 'Tue',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool — Final',
              title: 'Race Activation Swim',
              items: [
                { text: '**200 easy** — feel the water' },
                { text: '**2×25 fly @race pace** — not a test. Just feel.', emphasis: 'key' },
                { text: '**2×25 free @race pace**' },
                { text: '**200 easy CD**' },
                { text: '_You are ready. Trust the 12 weeks._' },
              ],
              volume: '~500m max',
            },
          ],
        },
        {
          label: 'Wed',
          rest: true,
          sessions: [
            {
              kind: 'rest',
              label: 'Rest · 1 Day Out',
              title: 'Race Tomorrow',
              items: [{ text: 'SA activation. Sleep. Race plan review.' }],
            },
          ],
        },
        {
          label: 'Thu 3 Oct',
          highlight: 'gold',
          sessions: [
            {
              kind: 'competition',
              label: 'Competition',
              accent: 'gold',
              title: 'Asian Masters — Opens',
              items: [
                { text: '**100 Fly:** Race Day 1–2 — honest effort — data point 6', emphasis: 'key' },
                { text: 'Record 50 split, stroke count per 25' },
                { text: 'Rest, recover, prepare for 50s' },
              ],
              volume: 'Budapest mission begins',
            },
          ],
        },
        {
          label: 'Day 4–5',
          highlight: 'rose',
          sessions: [
            {
              kind: 'competition',
              label: 'Competition',
              accent: 'rose',
              title: '50 Fly + 50 Free — Qualify',
              items: [
                { text: '**50 Fly:** Full race intent — target 36.50', emphasis: 'alert' },
                { text: '**50 Free:** Full race intent — target 33.50', emphasis: 'alert' },
                { text: "_12 weeks of work. Race what you've built._" },
              ],
              volume: 'Budapest qualifiers',
            },
          ],
        },
        {
          label: 'Sun',
          rest: true,
          sessions: [
            {
              kind: 'rest',
              label: 'Rest',
              title: 'Between Races',
              items: [{ text: 'Recover between race days. Easy movement only.' }],
            },
          ],
        },
      ],
      note: {
        label: 'Race Week',
        text: '**No training. SA activation and one 500m feel swim Tuesday only.** The work is done. The recomp is complete, the SA integration has happened, the nervous system is sharpened. Arrive at Asian Masters knowing a genuinely different body is racing a genuinely refined butterfly. 100 Fly first, then peak for the 50s. Record everything.',
      },
    },
  ],
};
