import { useState } from 'react';
import { usePlanState } from '../state/PlanStateProvider';
import { ACCENTS } from '../theme/accents';
import { SectionHeader } from '../components/ui/SectionHeader';
import { WeekDateRow } from '../components/configure/WeekDateRow';
import { formatDate } from '../utils/dates';

export function ConfigurePage() {
  const { plan, setWeekStartDate, resetPlan } = usePlanState();
  const [cascade, setCascade] = useState(true);

  const allWeeks = plan.phases.flatMap((p) => p.weeks);
  const planStart = allWeeks[0]?.startDate;
  const lastWeek = allWeeks[allWeeks.length - 1];

  return (
    <>
      <header className="mb-9 border-b border-line-2 pb-6">
        <div className="mb-2.5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.35em] text-accent-gold">
          <span className="h-px w-5 bg-accent-gold" />
          Plan Settings
        </div>
        <h1 className="font-display text-[clamp(36px,5vw,56px)] leading-[0.92] tracking-[0.02em] text-ink">
          Configure
        </h1>
        <p className="mt-1.5 font-condensed text-[15px] text-muted">
          Adjust week start dates — changes apply to the dashboard immediately and persist in your
          browser.
        </p>
        {planStart && (
          <div className="mt-4 flex flex-wrap gap-6">
            <div className="flex flex-col gap-px">
              <div className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">Plan Start</div>
              <div className="font-condensed text-[15px] font-bold text-accent-cyan">{formatDate(planStart)}</div>
            </div>
            <div className="flex flex-col gap-px">
              <div className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">Final Week</div>
              <div className="font-condensed text-[15px] font-bold text-accent-gold">
                {formatDate(lastWeek.startDate)}
              </div>
            </div>
            <div className="flex flex-col gap-px">
              <div className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">Weeks</div>
              <div className="font-condensed text-[15px] font-bold text-ink">{allWeeks.length}</div>
            </div>
          </div>
        )}
      </header>

      <section className="mb-7">
        <SectionHeader label="Editing Behaviour" />
        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-line-2 bg-surface px-4 py-3">
          <input
            type="checkbox"
            checked={cascade}
            onChange={(e) => setCascade(e.target.checked)}
            className="mt-0.5 h-3.5 w-3.5 cursor-pointer accent-current text-accent-gold"
          />
          <span>
            <span className="block font-condensed text-sm font-bold text-ink">
              Cascade changes to following weeks
            </span>
            <span className="block text-[11px] text-muted">
              Moving a week shifts every later week by the same number of days, keeping the gaps
              between weeks intact. Untick to move a single week independently.
            </span>
          </span>
        </label>
      </section>

      {plan.phases.map((phase) => {
        const accent = ACCENTS[phase.accent];
        return (
          <section key={phase.id} className="mb-7">
            <SectionHeader label={phase.sectionLabel} />
            <div className="relative overflow-hidden rounded-[10px] border border-line bg-surface">
              <div className={`absolute inset-y-0 left-0 w-[3px] ${accent.bg}`} />
              {phase.weeks.map((week) => (
                <WeekDateRow
                  key={week.id}
                  week={week}
                  onChange={(startDate) => setWeekStartDate(week.id, startDate, cascade)}
                />
              ))}
            </div>
          </section>
        );
      })}

      <section className="mb-7">
        <SectionHeader label="Danger Zone" />
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-accent-rose/40 bg-accent-rose/10 px-4 py-3">
          <div>
            <div className="font-condensed text-sm font-bold text-accent-rose">Reset plan to defaults</div>
            <div className="text-[11px] text-muted">
              Restores the bundled plan (including original dates). Your session check-offs and
              tracker times are kept.
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Reset the plan to its default dates? This cannot be undone.')) {
                resetPlan();
              }
            }}
            className="rounded-md border border-accent-rose/50 px-4 py-1.5 font-condensed text-sm font-bold text-accent-rose transition-colors hover:bg-accent-rose/20"
          >
            Reset
          </button>
        </div>
      </section>
    </>
  );
}
