import type { Phase } from '../../types/plan';

export const phase3: Phase = {
  id: 'phase-3',
  number: 3,
  name: 'Sharpen',
  sectionLabel: 'Phase 3 · Sharpen · Weeks 9–11',
  meta: '1 Sep – 19 Sep · Max 25s · Starts/Turns · Dress Rehearsal · Gym = power only',
  accent: 'violet',
  tags: [
    { label: 'Max 25s', tone: 'rose' },
    { label: 'Race Rehearsal', tone: 'cyan' },
    { label: 'Power Gym', tone: 'violet' },
  ],
  weeks: [
    {
      id: 'w9',
      num: 'W9',
      dates: '1–6 Sep',
      title: 'Sprint Specificity · Max 25s · 100 Fly Race Effort',
      accent: 'violet',
      badges: ['~3500m pool', '3 gym power'],
      days: [
        {
          label: 'Mon',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool A',
              title: 'Max 25s + Race 50 Fly',
              items: [
                { text: '**WU:** 400 easy, 4×50 build' },
                { text: '**Starts:** 6×(start + 15m UW + breakout) from blocks' },
                { text: '**Max 25s Fly:** 6×25 @MAX — 3 min rest — record each time', emphasis: 'key' },
                { text: '**Race 50 Fly:** 2×50 @98% — full intent — record', emphasis: 'key' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~1200m · quality only',
            },
            {
              kind: 'gym',
              label: 'Gym A',
              title: 'Sprint Gym — Power Only',
              items: [
                { text: '**SA Activation:** Full circuit' },
                { text: '**Jump Squat:** 5×3 @30% — max intent, full rest' },
                { text: '**Hip Thrust Explosive:** 4×4 heavy, drive fast' },
                { text: '**Trap Bar DL:** 3×2 @85%' },
                { text: '**Explosive Pull-up:** 4×3' },
                { text: '_Volume drops. Intent stays MAX._' },
              ],
              volume: '~45 min',
            },
          ],
        },
        {
          label: 'Tue',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool B',
              title: '★ 100 Fly Race Effort + 50 Free',
              items: [
                { text: '**WU:** 400 easy, 4×50 build' },
                { text: '**Priming:** 3×25 @90% — 3 min rest' },
                {
                  text: '**100 Fly:** 1×100 @95% — data point 3 — record 50 split + strokes',
                  emphasis: 'key',
                },
                { text: '**Rest:** 15 min full' },
                { text: '**50 Free:** 2×50 @95% — record' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~1100m · key data point',
            },
          ],
        },
        {
          label: 'Wed',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool C',
              title: 'Turn + Breakout Precision',
              items: [
                { text: '**WU:** 300 easy, 4×50 build' },
                { text: '**Turns:** 8×(approach+turn+UW+breakout to 10m) fly' },
                { text: '**25s Fly @MAX:** 4×25 — 2.5 min rest' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~800m',
            },
            {
              kind: 'gym',
              label: 'Gym B',
              title: 'Reactive Power — Lower',
              items: [
                { text: '**Depth Jump:** 4×4 — instant rebound' },
                { text: '**Box Jump:** 3×4 max height' },
                { text: '**Single-leg Bound:** 3×5 each' },
                { text: '**GHR:** 3×6' },
                { text: '**Pallof:** 3×10, Dead Bug 3×8' },
              ],
              volume: '~40 min',
            },
          ],
        },
        {
          label: 'Thu',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool D',
              title: 'Speed Endurance + Broken 100',
              items: [
                { text: '**WU:** 400 easy, 4×50 drill' },
                { text: '**UW Kick:** 6×25 max hold' },
                { text: '**Speed Endurance:** 3×(25@MAX+50@87%) — 2.5 min' },
                { text: '**Broken 100:** 75+25 fly, 15s rest — pace check' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1000m',
            },
          ],
        },
        {
          label: 'Fri',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool E',
              title: 'Easy Aerobic Recovery',
              items: [
                { text: '**WU:** 300 easy' },
                { text: '**Drill:** 6×50 easy' },
                { text: '**Easy Fly:** 6×50 @70%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1000m · easy',
            },
            {
              kind: 'gym',
              label: 'Gym C',
              title: 'Upper Sprint — Med Ball + SA',
              items: [
                { text: '**Med Ball Chest Pass:** 5×5 max velocity' },
                { text: '**SA Speed:** Cable protraction fast 4×8' },
                { text: '**Explosive Pull-up:** 3×4' },
                { text: '**Face Pull:** 3×15' },
              ],
              volume: '~40 min',
            },
          ],
        },
        {
          label: 'Sat',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool F',
              title: 'Sprint Sharpener — Max 50s',
              items: [
                { text: '**WU:** 400 easy, 4×50 build' },
                { text: '**Priming:** 3×25 @90%' },
                { text: '**50 Fly @MAX:** 2×50 — full rest — record', emphasis: 'key' },
                { text: '**50 Free @MAX:** 2×50 — record', emphasis: 'key' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~1000m · high quality',
            },
          ],
        },
      ],
      note: {
        label: 'W9',
        text: "**Neural sharpening starts now.** Max efforts only happen with full rest — 3 min between max 25s is non-negotiable. Tuesday's 100 Fly @95% is data point 3 — compare the 50 split to W7's TT. Saturday's max 50s predict the Asian Masters result. Gym is low volume high velocity — zero fatigue carries into pool sessions.",
      },
    },
    {
      id: 'w10',
      num: 'W10',
      dates: '8–13 Sep',
      title: 'Race Sharpening · Full Dress Rehearsal Thursday',
      accent: 'violet',
      badges: ['~3200m pool', '3 gym activation'],
      days: [
        {
          label: 'Mon',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool A',
              title: 'Race-Ready 50 Fly + 50 Free',
              items: [
                { text: '**WU:** 400 easy, 4×50 build' },
                { text: '**Priming:** 4×25 @92%' },
                { text: '**50 Fly @MAX:** 2×50 — full rest — feel like 36.x?', emphasis: 'key' },
                { text: '**50 Free @MAX:** 2×50 — feel like 33.x?', emphasis: 'key' },
                { text: '**CD:** 400 easy' },
              ],
              volume: '~1100m',
            },
            {
              kind: 'gym',
              label: 'Gym A',
              title: 'Activation + Power Touches',
              items: [
                { text: '**SA Activation:** Full circuit — now the anchor' },
                { text: '**Jump Squat:** 4×3 @30% perfect reps' },
                { text: '**Hip Thrust:** 3×4 explosive' },
                { text: '**Explosive Pull-up:** 3×3' },
                { text: '**Med Ball:** 3×4' },
                { text: '_Gym serves the pool. No fatigue left over._' },
              ],
              volume: '~35 min',
            },
          ],
        },
        {
          label: 'Tue',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool B',
              title: '100 Fly + 50 Free Race Set',
              items: [
                { text: '**WU:** 400 easy, 4×50 build' },
                { text: '**Priming:** 3×25 @90%' },
                {
                  text: '**100 Fly:** 1×100 @96% — data point 4 — record split + strokes',
                  emphasis: 'key',
                },
                { text: '**Rest:** 15 min' },
                { text: '**50 Free:** 1×50 @96%' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~1000m',
            },
          ],
        },
        {
          label: 'Wed',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool C',
              title: 'Start + UW Refinement',
              items: [
                { text: '**WU:** 300 easy, 4×50 build' },
                { text: '**Starts:** 8×(block start+UW+breakout) — fly and free' },
                { text: '**25s Fly @MAX:** 4×25 — 3 min rest each' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~700m',
            },
            {
              kind: 'gym',
              label: 'Gym B',
              title: 'Sprint Power — Lower Short',
              items: [
                { text: '**Box Jump:** 4×3 max height' },
                { text: '**Depth Jump:** 3×3' },
                { text: '**Single-leg Hip Thrust:** 3×6 each explosive' },
                { text: '**GHR:** 2×6' },
                { text: '**Dead Bug:** 2×8, Pallof 2×8' },
              ],
              volume: '~35 min',
            },
          ],
        },
        {
          label: 'Thu',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool D',
              title: '★ Full Dress Rehearsal',
              items: [
                { text: '**WU:** 500 easy, 6×50 build' },
                { text: '**Priming:** 3×25 @90%, 5 min rest' },
                { text: '**1×100 Fly @95%** — race entry — rest 20 min', emphasis: 'key' },
                { text: '**1×50 Fly @MAX** — rest 15 min', emphasis: 'key' },
                { text: '**1×50 Free @MAX**', emphasis: 'key' },
                { text: '**CD:** 400 easy' },
              ],
              volume: '~1200m · competition order sim',
            },
          ],
        },
        {
          label: 'Fri',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool E',
              title: 'Easy Recovery Swim',
              items: [
                { text: '**WU:** 300 easy' },
                { text: '**Drill:** 6×50 easy' },
                { text: '**Easy Fly:** 4×50 @70%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~800m · easy',
            },
            {
              kind: 'gym',
              label: 'Gym C',
              title: 'Upper Activation — Light',
              items: [
                { text: '**SA Activation:** Full circuit' },
                { text: '**Med Ball:** 3×4 fast' },
                { text: '**Explosive Pull-up:** 3×3' },
                { text: '**Face Pull:** 3×15' },
              ],
              volume: '~30 min',
            },
          ],
        },
        {
          label: 'Sat',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool F',
              title: 'Sprint Sharpener',
              items: [
                { text: '**WU:** 400 easy, 4×50 build' },
                { text: '**Priming:** 3×25' },
                { text: '**50 Fly @MAX:** 2×50 — full rest', emphasis: 'key' },
                { text: '**50 Free @MAX:** 2×50', emphasis: 'key' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~1000m',
            },
          ],
        },
      ],
      note: {
        label: 'W10',
        text: "**Thursday's dress rehearsal is the closest thing to Asian Masters this plan has.** Race in competition order (100 Fly → 50 Fly → 50 Free) with correct recovery intervals. Record everything. This tells you whether the race plan is sound and the energy systems sequence correctly. Gym is activation only — no soreness anywhere this week.",
      },
    },
    {
      id: 'w11',
      num: 'W11',
      dates: '15–20 Sep',
      title: 'Final Quality Week · Lock Mechanics · Taper Begins Friday',
      accent: 'violet',
      badges: ['~2700m pool', '2 gym only'],
      days: [
        {
          label: 'Mon',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool A',
              title: 'Confidence 50s — Feel the New Body',
              items: [
                { text: '**WU:** 400 easy, 4×50 build' },
                { text: '**Priming:** 3×25 @90%' },
                { text: '**50 Fly:** 3×50 @96% — does it feel like 36.x?', emphasis: 'key' },
                { text: '**50 Free:** 2×50 @93% — controlled race feel' },
                { text: '**CD:** 400 easy' },
              ],
              volume: '~1000m',
            },
            {
              kind: 'gym',
              label: 'Gym A',
              title: 'Penultimate Gym — Activation',
              items: [
                { text: '**SA Activation:** Full circuit — embed as pre-swim ritual' },
                { text: '**Jump Squat:** 3×3 feel fast' },
                { text: '**Explosive Pull-up:** 3×3' },
                { text: '**Hip Thrust:** 3×4 explosive' },
                { text: '**Shoulder health circuit:** 2 rounds' },
              ],
              volume: '~30 min only',
            },
          ],
        },
        {
          label: 'Tue',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool B',
              title: '★ 100 Fly Pre-Taper Data Point',
              items: [
                { text: '**WU:** 400 easy, 4×50 build' },
                { text: '**Priming:** 3×25 @90% — 3 min rest' },
                {
                  text: '**100 Fly:** 1×100 honest full effort — data point 5 — record split + strokes',
                  emphasis: 'key',
                },
                { text: '**25s Fly:** 4×25 @MAX — clean speed' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~900m · key data point',
            },
          ],
        },
        {
          label: 'Wed',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool C',
              title: 'Turn + Breakout Polish',
              items: [
                { text: '**WU:** 300 easy' },
                { text: '**Turns:** 6×(approach+turn+UW+breakout)' },
                { text: '**25s Fly @MAX:** 4×25 — 3 min rest' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~700m',
            },
            {
              kind: 'gym',
              label: 'Gym B',
              title: 'Final Gym — Lower Touches',
              items: [
                { text: '**Box Jump:** 3×3' },
                { text: '**Single-leg Hip Thrust:** 3×5 each' },
                { text: '**GHR:** 2×5 easy' },
                { text: '**Dead Bug:** 2×8' },
                { text: '_Last loaded gym session of the build._' },
              ],
              volume: '~30 min',
            },
          ],
        },
        {
          label: 'Thu',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool D',
              title: 'Easy Aerobic + Touches',
              items: [
                { text: '**WU:** 400 easy' },
                { text: '**Drill:** 6×50 easy' },
                { text: '**25s fly:** 4×25 @85% feel' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~700m',
            },
          ],
        },
        {
          label: 'Fri',
          rest: true,
          sessions: [
            {
              kind: 'rest',
              label: 'Rest',
              title: 'Full Rest · Taper Begins',
              items: [{ text: 'Sleep. Walk. Eat well. No training.' }],
            },
          ],
        },
        {
          label: 'Sat',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool E',
              title: 'Easy Taper Swim',
              items: [
                { text: '**WU:** 300 easy' },
                { text: '**Easy Fly:** 4×50 @70% — feel the water' },
                { text: '**2×25 fly @race pace** — just feel' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~600m',
            },
          ],
        },
      ],
      note: {
        label: 'W11 · Phase 3 Close',
        text: "**Gym drops to 2 sessions. Friday is full rest — taper starts there.** Tuesday's 100 Fly is data point 5 and the last hard effort before Asian Masters. Combined with Monday's 50 Fly feel, you'll know exactly where you're going to race. Trust the 11 weeks. Add nothing.",
      },
    },
  ],
};
