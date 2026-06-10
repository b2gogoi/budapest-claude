import type { Workout } from '../../utils/workouts';
import { ACCENTS } from '../../theme/accents';

interface WorkoutCardProps {
  workout: Workout;
}

/** One unique gym exercise with its set×rep variations across the plan. */
export function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-line-2 bg-surface">
      {/* Phase presence strip */}
      <div className="absolute inset-x-0 top-0 flex h-0.5">
        {workout.phaseAccents.map((accent) => (
          <span key={accent} className={`h-full flex-1 ${ACCENTS[accent].bg}`} />
        ))}
      </div>

      <div className="flex items-baseline justify-between gap-2 border-b border-line px-3.5 pb-2 pt-3">
        <h3 className="font-condensed text-sm font-bold uppercase tracking-[0.05em] text-ink">
          {workout.name}
        </h3>
        <span className="whitespace-nowrap font-mono text-[8px] text-faint">
          {workout.totalOccurrences}× in plan
        </span>
      </div>

      <ul className="flex flex-col">
        {workout.variations.map((variation) => (
          <li
            key={variation.prescription}
            className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 border-b border-line px-3.5 py-2 last:border-b-0"
          >
            {variation.setsReps && (
              <span className="rounded border border-accent-gold/40 bg-accent-gold/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-accent-gold">
                {variation.setsReps}
              </span>
            )}
            <span className="min-w-0 flex-1 text-[10.5px] leading-relaxed text-muted">
              {variation.note || '—'}
            </span>
            <span className="flex flex-wrap justify-end gap-1">
              {variation.occurrences.map((occ, i) => (
                <span
                  key={`${occ.weekId}-${occ.dayLabel}-${i}`}
                  title={`${occ.phaseName} · ${occ.dayLabel} · ${occ.sessionLabel}`}
                  className={`rounded-sm px-1 font-mono text-[7.5px] ${ACCENTS[occ.phaseAccent].text} ${ACCENTS[occ.phaseAccent].bgSoft}`}
                >
                  {occ.weekNum}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
