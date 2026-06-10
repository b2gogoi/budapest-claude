import type { Phase } from '../../types/plan';

export const phase2: Phase = {
  id: 'phase-2',
  number: 2,
  name: 'Build',
  sectionLabel: 'Phase 2 · Build · Weeks 5–8',
  meta: '4 Aug – 31 Aug · Strength 5×5 · Broken 100s · Race-Pace 50s · W7 Key TT',
  accent: 'gold',
  tags: [
    { label: 'Strength 5×5', tone: 'gold' },
    { label: 'Broken 100s', tone: 'cyan' },
    { label: 'Race-Pace 50s', tone: 'rose' },
  ],
  weeks: [
    {
      id: 'w5',
      num: 'W5',
      startDate: '2026-08-04',
      title: 'Strength Phase Begins · Broken 100s · Speed Endurance',
      accent: 'gold',
      badges: ['~4500m pool', '3 gym'],
      days: [
        {
          label: 'Mon',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool A',
              title: 'Broken 100 Fly + Race-Pace 50s',
              items: [
                { text: '**WU:** 400 easy, 4×50 build' },
                { text: '**Drill:** 6×25 — entry/press/pull mechanics' },
                { text: '**Broken 100 Fly:** 3×(50+50, 20s rest) — target even splits', emphasis: 'key' },
                { text: '**Race-Pace 50s:** 4×50 fly @92–95% — 2 min rest', emphasis: 'key' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~1500m',
            },
            {
              kind: 'gym',
              label: 'Gym A',
              title: 'Strength Lower — 5×5',
              items: [
                { text: '**SA Activation:** Loaded protraction 3×12' },
                { text: '**Back Squat:** 5×5 @75–80%' },
                { text: '**Romanian DL:** 4×6 @80% — 3s eccentric' },
                { text: '**Hip Thrust:** 4×8 heavy' },
                { text: '**Weighted Pull-up:** 3×5' },
                { text: '**Landmine Pallof:** 3×10 each heavy' },
              ],
              volume: '~65 min · strength pacing',
            },
          ],
        },
        {
          label: 'Tue',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool B',
              title: 'Speed Endurance + UW Kick',
              items: [
                { text: '**WU:** 400 easy, 4×50 drill' },
                { text: '**UW Kick:** 8×25 — max hold' },
                { text: '**Speed Endurance:** 4×(25@95%+50@85%) fly — 2.5 min rest' },
                { text: '**50 Free:** 6×50 @90–93% — hold stroke rate' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1400m',
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
              title: 'Max 25s Fly + 50 Free',
              items: [
                { text: '**WU:** 300 easy, 4×50 build' },
                { text: '**25s Fly @MAX:** 6×25 — 2 min rest — record time each', emphasis: 'key' },
                { text: '**50 Free:** 6×50 @92% — 1:30 rest' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1000m',
            },
            {
              kind: 'gym',
              label: 'Gym B',
              title: 'Explosive Power — Lower',
              items: [
                { text: '**Trap Bar DL:** 5×3 @82% — explosive' },
                { text: '**Box Jump:** 4×5 — max height, full hip ext' },
                { text: '**Depth Drop:** 3×4 — reactive landing' },
                { text: '**Single-leg Squat:** 3×8 each' },
                { text: '**GHR:** 3×8' },
                { text: '**Cable Crunch:** 3×15' },
              ],
              volume: '~60 min',
            },
          ],
        },
        {
          label: 'Thu',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool D',
              title: '100 Fly Race Shape + Broken',
              items: [
                { text: '**WU:** 400 easy, 4×50 drill' },
                { text: '**Kick:** 6×25 UW' },
                { text: '**Broken 100:** 50+25+25 fly, 15s rest — fastest 25 on last rep', emphasis: 'key' },
                { text: '**Broken 100:** 75+25 fly, 20s rest' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~1200m',
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
              title: 'Aerobic Base — Easy Fly',
              items: [
                { text: '**WU:** 400 easy' },
                { text: '**Drill:** 6×50 technique' },
                { text: '**Fly:** 6×50 @74% — long stroke count' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1100m · easy',
            },
            {
              kind: 'gym',
              label: 'Gym C',
              title: 'Upper Strength 5×5 + SA Heavy',
              items: [
                { text: '**Weighted Push-up Plus:** 4×10' },
                { text: '**Barbell Bench:** 5×5 @78%' },
                { text: '**Weighted Pull-up:** 4×5' },
                { text: '**Incline DB:** 3×8' },
                { text: '**Face Pull:** 3×15' },
                { text: '**Weighted Tricep Dip:** 3×10' },
              ],
              volume: '~65 min',
            },
          ],
        },
        {
          label: 'Sat',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool F',
              title: 'Volume + Stroke Efficiency',
              items: [
                { text: '**WU:** 600 easy' },
                { text: '**Kick:** 10×25 dolphin' },
                { text: '**Fly:** 8×50 @80% — stroke count KPI vs W3', emphasis: 'key' },
                { text: '**Free:** 6×50 @80%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1600m',
            },
          ],
        },
      ],
      note: {
        label: 'W5',
        text: '**Strength is the primary gym variable now.** 5×5 squat and bench are the main events — give them full rest. In the pool the Wednesday max 25s fly should be recorded each week through Phase 2 to see how sprint speed responds to the strength load. Sat stroke count vs W3 is the aerobic efficiency KPI.',
      },
    },
    {
      id: 'w6',
      num: 'W6',
      startDate: '2026-08-11',
      title: 'Peak Strength Load · Race Simulation 50s · Start Mechanics',
      accent: 'gold',
      badges: ['~4500m pool', '3 gym'],
      days: [
        {
          label: 'Mon',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool A',
              title: '★ Race Simulation — 50 Fly + 50 Free',
              items: [
                { text: '**WU:** 400 easy, 6×50 build with SA cue' },
                { text: '**Priming:** 4×25 @95% — 3 min rest each' },
                {
                  text: '**Race Sim 50 Fly:** 2×50 @95–97% — record time — does 36.x feel possible?',
                  emphasis: 'key',
                },
                { text: '**Race Sim 50 Free:** 2×50 @95–97% — record time', emphasis: 'key' },
                { text: '**CD:** 400 easy' },
              ],
              volume: '~1400m · milestone session',
            },
            {
              kind: 'gym',
              label: 'Gym A',
              title: 'Peak Load — Lower 5×4',
              items: [
                { text: '**SA Activation:** Full circuit' },
                { text: '**Back Squat:** 5×4 @82%' },
                { text: '**RDL:** 4×5 @83% — explosive concentric' },
                { text: '**Hip Thrust:** 4×6 heavy + 2s hold top' },
                { text: '**Weighted Pull-up:** 4×4' },
                { text: '**Pallof + rotation:** 3×10 each' },
              ],
              volume: '~65 min',
            },
          ],
        },
        {
          label: 'Tue',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool B',
              title: 'Speed Endurance + UW Max',
              items: [
                { text: '**WU:** 400 easy, 4×50 drill' },
                { text: '**UW Kick:** 8×25 — max hold distance' },
                { text: '**Speed Endurance:** 4×(50@87%+25@95%) fly — 2.5 min' },
                { text: '**50 Free:** 6×50 @92–95%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1400m',
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
              title: 'Start Mechanics + Max 25s',
              items: [
                { text: '**WU:** 300 easy, 4×50 build' },
                { text: '**Starts:** 6×25 from block — entry angle, first stroke' },
                { text: '**25s Fly @MAX:** 6×25 — 2.5 min rest — record each', emphasis: 'key' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~900m',
            },
            {
              kind: 'gym',
              label: 'Gym B',
              title: 'Power + Plyometric Peak',
              items: [
                { text: '**Trap Bar DL:** 4×3 @85% — max intent' },
                { text: '**Weighted Box Jump:** 3×4 — 10kg vest' },
                { text: '**Lateral Bound:** 3×5 each' },
                { text: '**GHR:** 3×8' },
                { text: '**Lat Pulldown:** 4×6 @85%' },
                { text: '**Hanging Leg Raise:** 3×12' },
              ],
              volume: '~65 min',
            },
          ],
        },
        {
          label: 'Thu',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool D',
              title: 'Broken 100 Fly Peak Week',
              items: [
                { text: '**WU:** 400 easy, 4×50 drill' },
                { text: '**Kick:** 6×25 UW max' },
                { text: '**Broken 100:** 50+50, 20s — smallest split diff yet?', emphasis: 'key' },
                { text: '**Broken 100:** 75+25, 15s — hold pace on last 25' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~1200m',
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
                { text: '**WU:** 400 easy' },
                { text: '**Drill:** 6×50 varied technique' },
                { text: '**Easy Fly:** 6×50 @72%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1100m · easy',
            },
            {
              kind: 'gym',
              label: 'Gym C',
              title: 'Upper Peak Load 5×4',
              items: [
                { text: '**Barbell Bench:** 5×4 @82%' },
                { text: '**Weighted Pull-up:** 4×4' },
                { text: '**SA Loaded:** Cable protraction 4×10 max controlled' },
                { text: '**DB Incline:** 3×8' },
                { text: '**Chest-supported Row:** 4×8' },
                { text: '**Weighted Dip:** 3×8' },
              ],
              volume: '~65 min',
            },
          ],
        },
        {
          label: 'Sat',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool F',
              title: 'Volume + Race-Pace Free',
              items: [
                { text: '**WU:** 600 easy' },
                { text: '**Kick:** 10×25' },
                { text: '**Fly:** 6×50 @82%' },
                { text: '**Free Race-Pace:** 6×50 @92% — hold stroke rate each rep', emphasis: 'key' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1500m',
            },
          ],
        },
      ],
      note: {
        label: 'W6',
        text: '**Monday race simulations are a milestone.** First near-max 50s of the block — record every time. If 50 Fly comes in at 36.x, qualification at Asian Masters is close to locked — Phase 3 taper will close any remaining gap. Gym at peak strength load this week. Power conversion begins W7.',
      },
    },
    {
      id: 'w7',
      num: 'W7',
      startDate: '2026-08-18',
      title: '★ KEY — 100 Fly Full TT · Strength→Power Transition',
      accent: 'gold',
      badges: ['~4200m pool', '3 gym'],
      days: [
        {
          label: 'Mon',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool A',
              title: '★ 100 Fly Full TT + 50 Fly',
              items: [
                { text: '**WU:** 500 easy, 6×50 build to 85%' },
                { text: '**Priming:** 3×25 @90% — 5 min rest' },
                {
                  text: '**100 Fly TT:** 1×100 full race effort — record 50 split, stroke count each 25, breakdown metre',
                  emphasis: 'key',
                },
                { text: '**Rest:** 15 min full' },
                { text: '**50 Fly:** 1×50 @95% — note contrast vs 100 Fly fatigue' },
                { text: '**CD:** 400 easy' },
              ],
              volume: '~1600m · key benchmark',
            },
            {
              kind: 'gym',
              label: 'Gym A',
              title: 'Power Conversion — Lower',
              items: [
                { text: '**Jump Squat:** 4×5 @30% — max velocity intent' },
                { text: '**Back Squat:** 3×5 @75% — maintain' },
                { text: '**Hip Thrust:** 4×6 explosive — drive fast' },
                { text: '**RDL:** 3×8 moderate' },
                { text: '**Pallof Press:** 3×10 each' },
                { text: '_Intent shift: moving fast > moving heavy_' },
              ],
              volume: '~55 min',
            },
          ],
        },
        {
          label: 'Tue',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool B',
              title: 'Speed Endurance + 50 Free',
              items: [
                { text: '**WU:** 400 easy, 4×50 drill' },
                { text: '**UW Kick:** 8×25 max hold' },
                { text: '**Speed Endurance:** 3×(50@87%+25@95%) — 2.5 min' },
                { text: '**50 Free:** 4×50 @92–95%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1300m',
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
              title: 'Max 25s + Starts',
              items: [
                { text: '**WU:** 300 easy, 4×50 build' },
                { text: '**Starts:** 6×(start+UW+breakout to 10m)' },
                { text: '**25s Fly @MAX:** 6×25 — 2.5 min rest each', emphasis: 'key' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~900m',
            },
            {
              kind: 'gym',
              label: 'Gym B',
              title: 'Velocity — Posterior Power',
              items: [
                { text: '**Trap Bar DL:** 3×3 @80% — speed focus' },
                { text: '**Box Jump:** 5×4 — max height' },
                { text: '**Single-leg Bound:** 3×5 each' },
                { text: '**GHR:** 3×8' },
                { text: '**Pull-up:** 3×6 fast concentric' },
                { text: '**Hanging Leg Raise:** 3×12' },
              ],
              volume: '~55 min',
            },
          ],
        },
        {
          label: 'Thu',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool D',
              title: 'Broken 100 Fly + Kick',
              items: [
                { text: '**WU:** 400 easy, 4×50 drill' },
                { text: '**Kick:** 8×25 UW dolphin' },
                { text: '**Broken 100:** 50+50 fly 20s — compare split diff vs W5', emphasis: 'key' },
                { text: '**Broken 100:** 25+25+25+25 fly, 15s rest' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~1200m',
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
              title: 'Easy Aerobic',
              items: [
                { text: '**WU:** 400 easy' },
                { text: '**Drill:** 6×50 technique' },
                { text: '**Easy Fly:** 6×50 @72%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1100m · easy',
            },
            {
              kind: 'gym',
              label: 'Gym C',
              title: 'Upper Power + SA Speed',
              items: [
                { text: '**Med Ball Chest Pass:** 4×6 explosive' },
                { text: '**Bench Press:** 3×5 @75% maintain' },
                { text: '**SA Speed:** Cable protraction fast, controlled return 4×10' },
                { text: '**Explosive Pull-up:** 3×4' },
                { text: '**Face Pull:** 3×15' },
              ],
              volume: '~55 min',
            },
          ],
        },
        {
          label: 'Sat',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool F',
              title: 'Volume + Stroke Count KPI',
              items: [
                { text: '**WU:** 500 easy' },
                { text: '**Kick:** 10×25' },
                { text: '**Fly:** 8×50 @80% — stroke count vs W5', emphasis: 'key' },
                { text: '**Free:** 4×50 @80%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1400m',
            },
          ],
        },
      ],
      note: {
        label: '★ W7 Key Benchmark',
        text: "**Monday's 100 Fly TT is the most important single session of the plan.** Record: total time, 50m split, stroke count per 25, exact metre of stroke breakdown. Compare to W1 baseline — the delta over 6 weeks of recomp + SA work reveals the rate of adaptation. Gym shifts to power this week — moving fast is now more important than moving heavy. This intent must be genuine on every rep.",
      },
    },
    {
      id: 'w8',
      num: 'W8',
      startDate: '2026-08-25',
      title: 'Deload · Phase 2 Close · Prepare Sprint Block',
      accent: 'slate',
      badges: ['~2800m pool', '3 gym reduced'],
      days: [
        {
          label: 'Mon',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool A',
              title: 'Easy Fly + Feel',
              items: [
                { text: '**WU:** 400 easy' },
                { text: '**Drill:** 8×50 easy — no clock' },
                { text: '**Easy Fly:** 4×50 @72%, **Free:** 4×50 @72%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1200m',
            },
            {
              kind: 'gym',
              label: 'Gym A',
              title: 'Deload — Velocity Maintenance',
              items: [
                { text: '**Jump Squat:** 3×4 @30% — maintain pattern' },
                { text: '**Goblet Squat:** 3×10 light' },
                { text: '**Hip Thrust:** 3×10 moderate' },
                { text: '**SA Activation:** Full circuit, no load' },
                { text: '**Cable Row:** 3×12 light' },
              ],
              volume: '~40 min',
            },
          ],
        },
        {
          label: 'Tue',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool B',
              title: 'Kick + Easy Drill',
              items: [
                { text: '**WU:** 300 easy' },
                { text: '**Kick:** 6×25 relaxed dolphin' },
                { text: '**Drill:** 6×50 easy' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~700m',
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
              title: 'Short Touches Only',
              items: [
                { text: '**WU:** 300 easy' },
                { text: '**25s fly:** 6×25 @80% — crisp, not hard' },
                { text: '**25s free:** 4×25 @80%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~600m',
            },
            {
              kind: 'gym',
              label: 'Gym B',
              title: 'Deload — Posterior Easy',
              items: [
                { text: '**Box Jump:** 3×3 easy' },
                { text: '**RDL:** 3×10 light' },
                { text: '**Nordic Curl:** 2×6' },
                { text: '**Lat Pulldown:** 3×12 light' },
                { text: '**Dead Bug:** 3×8' },
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
              title: 'Easy 100 Fly Feel',
              items: [
                { text: '**WU:** 300 easy' },
                { text: '**Kick:** 4×25 relaxed' },
                { text: '**100 Fly:** 1×100 @68% — stroke feel check vs W7 TT' },
                { text: '**Free:** 4×50 @70%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~700m',
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
                { text: '**Easy Fly + Free:** 4×50 each @70%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~900m',
            },
            {
              kind: 'gym',
              label: 'Gym C',
              title: 'Deload — Upper Easy',
              items: [
                { text: '**Med Ball Pass:** 3×4 easy' },
                { text: '**DB Bench:** 3×12 light' },
                { text: '**SA activation only**' },
                { text: '**Face Pull:** 3×15' },
                { text: '**Band shoulder circuit:** 2 rounds' },
              ],
              volume: '~35 min',
            },
          ],
        },
        {
          label: 'Sat',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool F',
              title: 'Easy Volume — Enjoy the Stroke',
              items: [
                { text: '**WU:** 400 easy' },
                { text: '**Drill:** 8×50 varied' },
                { text: '**Easy Fly:** 4×50 @68%, **Free:** 4×50 @68%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1100m',
            },
          ],
        },
      ],
      note: {
        label: 'W8 Deload',
        text: '**Phase 2 closes here. Phase 3 starts with a fully fresh system.** With 5 pool sessions/week the cumulative fatigue of W5–7 is significant. Do not compress this week. The body composition shift will be most visible around this point. The Phase 3 sprint block requires a rested nervous system. Protect this week completely.',
      },
    },
  ],
};
