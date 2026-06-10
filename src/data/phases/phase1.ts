import type { Phase } from '../../types/plan';

export const phase1: Phase = {
  id: 'phase-1',
  number: 1,
  name: 'Foundation',
  sectionLabel: 'Phase 1 · Foundation · Weeks 1–4',
  meta: '7 Jul – 3 Aug · 5 pool + 3 gym/week · Mon–Sat',
  accent: 'cyan',
  tags: [
    { label: 'Technique', tone: 'cyan' },
    { label: 'SA Loading', tone: 'gold' },
    { label: '100 Fly Series', tone: 'cyan' },
  ],
  weeks: [
    {
      id: 'w1',
      num: 'W1',
      startDate: '2026-07-07',
      title: 'Movement Reset · SA Intro · 100 Fly Season Zero Baseline',
      accent: 'cyan',
      badges: ['~4000m pool', '3 gym'],
      defaultOpen: true,
      days: [
        {
          label: 'Mon',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool A',
              title: '★ 100 Fly Baseline + Drill Reset',
              items: [
                { text: '**WU:** 400 easy, 4×50 drill (fly/free alt)' },
                { text: '**SA Drill:** 6×25 single-arm fly — feel catch press' },
                {
                  text: '**100 Fly TT:** 1×100 honest effort — record 50 split, stroke count per 25, exact metre of first stroke breakdown',
                  emphasis: 'key',
                },
                { text: '**50 Free:** 4×50 @75% easy' },
                { text: '**CD:** 200 easy back' },
              ],
              volume: '~1300m · Season Zero data point',
            },
            {
              kind: 'gym',
              label: 'Gym A',
              title: 'Full Body Foundation',
              items: [
                { text: '**SA Activation:** Wall slide 3×10, serratus punch 3×12' },
                { text: '**Goblet Squat:** 4×10 @60%' },
                { text: '**DB RDL:** 3×12' },
                { text: '**Cable Row:** 3×12 neutral grip' },
                { text: '**DB Incline Press:** 3×12' },
                { text: '**Pallof Press:** 3×10 each side' },
              ],
              volume: '~55 min · pattern over load',
            },
          ],
        },
        {
          label: 'Tue',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool B',
              title: 'UW Kick + 50 Fly Drill',
              items: [
                { text: '**WU:** 400 easy, 4×50 build' },
                { text: '**UW Kick:** 8×25 dolphin — count kicks to 10m mark' },
                { text: '**Drill:** 8×50 — 25 single-arm fly / 25 full fly' },
                { text: '**Fly Build:** 4×50 @70–80% — long stroke, SA press cue every entry' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1400m · technique only',
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
              title: 'Speed Touch + 50 Free',
              items: [
                { text: '**WU:** 300 easy, 6×50 build fly/free' },
                { text: '**25s Fly:** 6×25 @85% — SA press at entry cue' },
                { text: '**50 Free:** 6×50 @80% — note stroke rate' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1100m',
            },
            {
              kind: 'gym',
              label: 'Gym B',
              title: 'Hip Drive + Posterior Chain',
              items: [
                { text: '**SA Warmup:** Band protraction 3×15' },
                { text: '**Hip Thrust:** 4×12 — think 2nd kick drive' },
                { text: '**Nordic Curl:** 3×6 eccentric' },
                { text: '**Single-leg RDL:** 3×10 each' },
                { text: '**Lat Pulldown:** 3×12' },
                { text: '**Hanging Knee Raise:** 3×12' },
              ],
              volume: '~50 min',
            },
          ],
        },
        {
          label: 'Thu',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool D',
              title: 'Broken 100 Fly Intro',
              items: [
                { text: '**WU:** 400 easy, 4×50 drill' },
                { text: '**Kick:** 6×25 UW dolphin off every wall' },
                {
                  text: '**Broken 100 Fly:** 50+50 fly, 30s rest — record split differential',
                  emphasis: 'key',
                },
                { text: '**Broken 100 Fly:** 25+25+25+25 fly, 20s rest each' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~1200m · 100 Fly pattern work',
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
              title: 'Aerobic Base + Easy Fly',
              items: [
                { text: '**WU:** 400 easy mixed' },
                { text: '**Drill:** 8×50 alt fly/free — technique, no clock' },
                { text: '**Easy Fly:** 4×50 @70%, **Easy Free:** 4×50 @70%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1200m · aerobic base',
            },
            {
              kind: 'gym',
              label: 'Gym C',
              title: 'Upper Body + SA Load',
              items: [
                { text: '**Push-up Plus:** 3×15 — SA emphasis' },
                { text: '**DB Bench Press:** 4×10' },
                { text: '**Seated Cable Row:** 4×12' },
                { text: '**Face Pull:** 3×15' },
                { text: '**Tricep Pushdown:** 3×15' },
                { text: '**Dead Bug:** 3×8 each' },
              ],
              volume: '~50 min',
            },
          ],
        },
        {
          label: 'Sat',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool F',
              title: 'Aerobic Volume + Kick',
              items: [
                { text: '**WU:** 600 easy mixed strokes' },
                { text: '**Kick:** 10×25 alt dolphin/flutter' },
                { text: '**Fly:** 6×50 @75% — count strokes per length' },
                { text: '**Free:** 4×50 @75%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1400m · aerobic base',
            },
          ],
        },
      ],
      note: {
        label: 'W1',
        text: '**The Monday 100 Fly baseline is Season Zero.** Race honestly, record the 50 split, stroke count per 25, and exact metre where the stroke first breaks down. This anchors the entire longitudinal series. Gym is pattern work only — establish the SA connection before loading. The 5 pool sessions this week are lower intensity by design — the body needs to calibrate to 6-day training before adding load.',
      },
    },
    {
      id: 'w2',
      num: 'W2',
      startDate: '2026-07-14',
      title: 'Load Progression · Broken 100 Build · Box Jump Intro',
      accent: 'cyan',
      badges: ['~4200m pool', '3 gym'],
      days: [
        {
          label: 'Mon',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool A',
              title: 'Broken 100 Fly + Drill',
              items: [
                { text: '**WU:** 400 easy, 4×50 drill' },
                { text: '**SA Drill:** 6×25 single-arm fly' },
                {
                  text: '**Broken 100:** 3×(50+50 fly, 25s rest) — compare split differential to W1',
                  emphasis: 'key',
                },
                { text: '**50 Free:** 4×50 @80%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1400m',
            },
            {
              kind: 'gym',
              label: 'Gym A',
              title: 'Full Body +5% Load',
              items: [
                { text: '**SA Activation:** Wall slide 3×12, band protraction 3×15' },
                { text: '**Goblet Squat:** 4×10 +5% vs W1' },
                { text: '**DB RDL:** 4×10 increase load' },
                { text: '**Cable Row:** 4×10 — pull to hip' },
                { text: '**DB Incline:** 4×10' },
                { text: '**Landmine Pallof:** 3×10 each' },
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
              title: 'UW Kick + Fly Speed Ladders',
              items: [
                { text: '**WU:** 400 easy, 4×50 build' },
                { text: '**UW Kick:** 8×25 dolphin — 3 UW then surface' },
                { text: '**Speed Ladder:** 4×(25@85%/25@90%/25@80%) fly — 30s rest' },
                { text: '**Drill:** 6×50 — 25 catch-up / 25 full fly' },
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
              title: '25s Speed + 50 Free Build',
              items: [
                { text: '**WU:** 300 easy, 6×50 build' },
                { text: '**25s Fly:** 8×25 @87% — SA press every entry' },
                { text: '**50 Free:** 6×50 @82% — note stroke rate' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1100m',
            },
            {
              kind: 'gym',
              label: 'Gym B',
              title: 'Hip Drive + Box Jump Intro',
              items: [
                { text: '**Hip Thrust:** 4×10 add load vs W1' },
                { text: '**Box Jump:** 3×5 — explosive hip extension, land soft' },
                { text: '**Single-leg RDL:** 3×10 each' },
                { text: '**Nordic Curl:** 3×8 eccentric' },
                { text: '**Lat Pulldown:** 3×12' },
                { text: '**Cable Crunch:** 3×15' },
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
              title: '100 Fly Race Shape',
              items: [
                { text: '**WU:** 400 easy, 4×50 drill' },
                { text: '**Kick:** 6×25 UW dolphin' },
                {
                  text: '**Broken 100:** 75+25 fly, 20s rest — hold same pace on last 25',
                  emphasis: 'key',
                },
                { text: '**Speed Endurance:** 3×(50@85%+25@92%) fly — 2 min rest' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1100m',
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
              title: 'Aerobic Base + Technique',
              items: [
                { text: '**WU:** 400 easy' },
                { text: '**Drill:** 8×50 varied fly drills' },
                { text: '**Easy Fly:** 4×50 @72%, **Easy Free:** 4×50 @72%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1200m · easy',
            },
            {
              kind: 'gym',
              label: 'Gym C',
              title: 'Upper Volume + SA',
              items: [
                { text: '**Push-up Plus:** 4×12' },
                { text: '**DB Bench:** 4×10 add load vs W1' },
                { text: '**Seated Row:** 4×10' },
                { text: '**Cable Fly:** 3×12 stretch emphasis' },
                { text: '**Face Pull:** 3×15' },
                { text: '**Tricep + Bicep:** 2×15 each' },
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
              title: 'Aerobic Volume + Stroke Count',
              items: [
                { text: '**WU:** 600 easy' },
                { text: '**Kick:** 8×25 dolphin/flutter alt' },
                { text: '**Fly:** 8×50 @78% — count strokes per length vs W1' },
                { text: '**Free:** 4×50 @78%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1500m',
            },
          ],
        },
      ],
      note: {
        label: 'W2',
        text: "**Track the broken 100 split differential on Monday.** If the second 50 is more than 4s slower than the first, aerobic ceiling is the current limiter. This number should narrow week by week through Phase 2. Box jumps on Wednesday are new — land softly, full hip extension every rep. All gym loads +5% from W1. Sat stroke count vs W1 is the efficiency KPI.",
      },
    },
    {
      id: 'w3',
      num: 'W3',
      startDate: '2026-07-21',
      title: 'Intensity Step · Race-Pace 50s · Barbell Introduced',
      accent: 'cyan',
      badges: ['~4500m pool', '3 gym'],
      days: [
        {
          label: 'Mon',
          double: true,
          sessions: [
            {
              kind: 'pool',
              label: 'Pool A',
              title: 'Race-Pace 50 Fly + Broken 100',
              items: [
                { text: '**WU:** 400 easy, 4×50 build' },
                { text: '**Drill:** 6×25 — 2-kick timing focus' },
                {
                  text: '**Race-Pace 50s:** 6×50 fly @90–92% — 1:30 rest — quality finish',
                  emphasis: 'key',
                },
                { text: '**Broken 100:** 25+25+25+25 fly, 15s rest — hold pace' },
                { text: '**CD:** 300 easy' },
              ],
              volume: '~1500m',
            },
            {
              kind: 'gym',
              label: 'Gym A',
              title: 'Strength Step — Barbell Intro',
              items: [
                { text: '**SA Warmup:** Full circuit 2 rounds' },
                { text: '**Back Squat:** 4×8 @70% — bar introduced this week' },
                { text: '**Romanian DL:** 4×8 slow eccentric (3s)' },
                { text: '**Hip Thrust:** 4×10 heavy' },
                { text: '**Cable Row:** 4×10' },
                { text: '**Pallof Press:** 3×12 each — controlled' },
              ],
              volume: '~60 min',
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
                { text: '**UW Kick:** 8×25 — max distance, breathe every 3 on surface' },
                { text: '**Speed Endurance:** 3×(50@85%+25@95%) fly — 2 min rest' },
                { text: '**50 Free:** 4×50 @90% — note stroke rate' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1200m',
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
              title: '25s Max + 50 Free Race-Pace',
              items: [
                { text: '**WU:** 300 easy, 4×50 build' },
                { text: '**25s Fly:** 8×25 @92% — 90s rest — record each time', emphasis: 'key' },
                { text: '**50 Free:** 4×50 @90–93% — hold stroke rate' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1000m',
            },
            {
              kind: 'gym',
              label: 'Gym B',
              title: 'Power Block — Posterior',
              items: [
                { text: '**Trap Bar Deadlift:** 4×6 @75% — explosive concentric' },
                { text: '**Box Jump:** 4×4 — reset each rep, full hip ext' },
                { text: '**Glute-Ham Raise:** 3×8' },
                { text: '**Single-leg Hip Thrust:** 3×10 each' },
                { text: '**Lat Pulldown:** 4×8 add weight' },
                { text: '**Hanging Leg Raise:** 3×10' },
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
              title: '100 Fly Race Shape',
              items: [
                { text: '**WU:** 400 easy, 4×50 drill' },
                { text: '**Kick:** 6×25 UW max hold' },
                { text: '**Broken 100:** 50+50 fly 20s rest — split diff vs W2?', emphasis: 'key' },
                { text: '**Broken 100:** 75+25 fly, 20s — hold pace on 25' },
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
              title: 'Aerobic Easy + Recovery',
              items: [
                { text: '**WU:** 400 easy' },
                { text: '**Drill:** 6×50 technique only' },
                { text: '**Easy Fly:** 6×50 @72% — long strokes' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1100m · easy',
            },
            {
              kind: 'gym',
              label: 'Gym C',
              title: 'Upper Push + Loaded SA',
              items: [
                { text: '**Cable Protraction + pause:** 3×12' },
                { text: '**Barbell Bench:** 4×8 — bar introduced' },
                { text: '**DB Incline:** 3×10' },
                { text: '**Chest-supported Row:** 4×10' },
                { text: '**Face Pull:** 3×15' },
                { text: '**Overhead Tricep:** 3×12' },
              ],
              volume: '~60 min',
            },
          ],
        },
        {
          label: 'Sat',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool F',
              title: 'Volume + Stroke Efficiency KPI',
              items: [
                { text: '**WU:** 600 easy' },
                { text: '**Kick:** 10×25 dolphin' },
                { text: '**Fly:** 8×50 @80% — count strokes — target lower than W2', emphasis: 'key' },
                { text: '**Free:** 6×50 @80%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1500m',
            },
          ],
        },
      ],
      note: {
        label: 'W3',
        text: "**First real intensity week.** 6×50 fly at 90–92% — if stroke breaks on reps 5–6 that's the aerobic ceiling. Record it. Barbell introduced in gym — move well before loading. Sat stroke count vs W2 is the efficiency signal: a lower count means better mechanics are embedding.",
      },
    },
    {
      id: 'w4',
      num: 'W4',
      startDate: '2026-07-28',
      title: 'Deload · Consolidate · Let Adaptation Land',
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
              title: 'Feel Session — No Clock',
              items: [
                { text: '**WU:** 400 easy mixed' },
                { text: '**Drill:** 8×50 — feel only, no pace' },
                { text: '**Easy 100 Fly:** 2×100 @65% — count strokes per length' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1100m · no effort',
            },
            {
              kind: 'gym',
              label: 'Gym A',
              title: 'Deload — 60% Load All Patterns',
              items: [
                { text: '**SA Activation:** Full circuit — no load' },
                { text: '**Goblet Squat:** 3×10 @50%' },
                { text: '**RDL:** 3×10 light' },
                { text: '**Cable Row:** 3×12 light' },
                { text: '**DB Press:** 3×12 light' },
              ],
              volume: '~40 min · move well only',
            },
          ],
        },
        {
          label: 'Tue',
          sessions: [
            {
              kind: 'pool',
              label: 'Pool B',
              title: 'Kick + Easy Fly',
              items: [
                { text: '**WU:** 300 easy' },
                { text: '**Kick:** 6×25 UW — relaxed' },
                { text: '**Fly:** 6×50 @70% — long stroke' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~800m',
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
              title: 'Easy Touches Only',
              items: [
                { text: '**WU:** 300 easy' },
                { text: '**Drill:** 6×50 technique' },
                { text: '**25s fly:** 6×25 @80% — quality only' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~800m',
            },
            {
              kind: 'gym',
              label: 'Gym B',
              title: 'Deload — Hip + Posterior',
              items: [
                { text: '**Hip Thrust:** 3×10 @50%' },
                { text: '**Single-leg RDL:** 3×10 bodyweight' },
                { text: '**Nordic Curl:** 2×6 easy' },
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
              title: 'Easy 100 Fly Feel Check',
              items: [
                { text: '**WU:** 300 easy' },
                { text: '**Kick:** 4×25 easy dolphin' },
                { text: '**100 Fly:** 1×100 @68% — how does the stroke feel at low effort vs W1?' },
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
                { text: '**SA Activation only**' },
                { text: '**DB Bench:** 3×12 @50%' },
                { text: '**Seated Row:** 3×12 light' },
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
                { text: '**Drill:** 8×50 varied — no pace, just feel' },
                { text: '**Easy Fly:** 6×50 @68%, **Free:** 2×50 @68%' },
                { text: '**CD:** 200 easy' },
              ],
              volume: '~1200m · recovery only',
            },
          ],
        },
      ],
      note: {
        label: 'W4 Deload',
        text: '**Do not compress or skip this week.** With 5 pool sessions/week the cumulative load of W1–3 is significant. Body recomposition happens in recovery, not in training. The easy 100 Fly on Thursday is a feel check — note stroke quality at 68% vs W1. That delta is early adaptation showing. Do not add extra sessions or intensity.',
      },
    },
  ],
};
