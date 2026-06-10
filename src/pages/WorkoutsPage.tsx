import { useMemo, useState } from 'react';
import { usePlanState } from '../state/PlanStateProvider';
import { extractWorkouts } from '../utils/workouts';
import { SectionHeader } from '../components/ui/SectionHeader';
import { WorkoutCard } from '../components/workouts/WorkoutCard';

export function WorkoutsPage() {
  const { plan } = usePlanState();
  const [query, setQuery] = useState('');

  const workouts = useMemo(() => extractWorkouts(plan), [plan]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return workouts;
    return workouts.filter(
      (w) =>
        w.name.toLowerCase().includes(q) ||
        w.variations.some((v) => v.prescription.toLowerCase().includes(q)),
    );
  }, [workouts, query]);

  const variationCount = workouts.reduce((sum, w) => sum + w.variations.length, 0);

  return (
    <>
      <header className="mb-9 border-b border-line-2 pb-6">
        <div className="mb-2.5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.35em] text-accent-gold">
          <span className="h-px w-5 bg-accent-gold" />
          Gym Library
        </div>
        <h1 className="font-display text-[clamp(36px,5vw,56px)] leading-[0.92] tracking-[0.02em] text-ink">
          Workouts
        </h1>
        <p className="mt-1.5 font-condensed text-[15px] text-muted">
          Every gym exercise in the plan, deduplicated — with each set × rep variation it appears
          as, and the weeks that prescribe it.
        </p>
        <div className="mt-4 flex flex-wrap gap-6">
          <div className="flex flex-col gap-px">
            <div className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">
              Unique Workouts
            </div>
            <div className="font-condensed text-[15px] font-bold text-accent-gold">{workouts.length}</div>
          </div>
          <div className="flex flex-col gap-px">
            <div className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">Variations</div>
            <div className="font-condensed text-[15px] font-bold text-accent-cyan">{variationCount}</div>
          </div>
        </div>
      </header>

      <section>
        <SectionHeader label={`Exercise Library · ${filtered.length} shown`} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by name or prescription…"
          aria-label="Filter workouts"
          className="mb-4 w-full max-w-sm rounded-md border border-line-2 bg-surface px-3 py-2 text-xs text-ink outline-none transition-colors placeholder:text-faint focus:border-accent-gold/60"
        />
        {filtered.length === 0 ? (
          <p className="text-xs text-muted">No workouts match “{query}”.</p>
        ) : (
          <div className="columns-1 gap-3 md:columns-2 xl:columns-3 [&>*]:mb-3 [&>*]:break-inside-avoid">
            {filtered.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
