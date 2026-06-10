import type { TrackerConfig } from '../../types/plan';
import { ACCENTS } from '../../theme/accents';
import { SectionHeader } from '../ui/SectionHeader';
import { usePlanState } from '../../state/PlanStateProvider';

interface FlyTrackerProps {
  config: TrackerConfig;
}

/** Longitudinal time-trial tracker. Times typed in here persist to localStorage. */
export function FlyTracker({ config }: FlyTrackerProps) {
  const { trackerTimes, setTrackerTime } = usePlanState();
  const accent = ACCENTS[config.tone];

  return (
    <section className="mb-11">
      <SectionHeader label={config.sectionLabel} />
      <div className={`relative overflow-hidden rounded-[10px] border p-[22px] ${accent.borderSoft} ${accent.bgSoft}`}>
        <div className={`absolute inset-x-0 top-0 h-0.5 ${accent.bg}`} />
        <h2 className={`mb-1 font-display text-xl tracking-[0.05em] ${accent.text}`}>{config.title}</h2>
        <p className={`mb-4 font-mono text-[8.5px] tracking-[0.15em] ${accent.textDim}`}>{config.subtitle}</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {config.meets.map((meet) => (
            <div
              key={meet.id}
              className="rounded-[7px] border border-line-2 bg-surface p-2.5 text-center"
            >
              <div className="mb-1 font-mono text-[7px] uppercase tracking-[0.1em] text-faint">{meet.label}</div>
              <div className="mb-1.5 font-condensed text-[10px] text-muted">{meet.date}</div>
              {meet.fixedTime ? (
                <div className="mb-0.5 font-mono text-xs tracking-[0.05em] text-muted/60">{meet.fixedTime}</div>
              ) : (
                <input
                  type="text"
                  inputMode="numeric"
                  value={trackerTimes[meet.id] ?? ''}
                  onChange={(e) => setTrackerTime(meet.id, e.target.value)}
                  placeholder="_:_ _._ _"
                  aria-label={`${meet.label} time`}
                  className={`mb-0.5 w-full bg-transparent text-center font-mono text-[15px] tracking-[0.05em] outline-none placeholder:text-current placeholder:opacity-40 ${
                    trackerTimes[meet.id] ? accent.text : accent.textDim
                  }`}
                />
              )}
              <div className="text-[8.5px] text-faint">{meet.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
