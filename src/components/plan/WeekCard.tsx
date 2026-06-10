import type { Week } from '../../types/plan';
import { ACCENTS } from '../../theme/accents';
import { Badge } from '../ui/Badge';
import { RichText } from '../ui/RichText';
import { DayColumn } from './DayColumn';
import { sessionKey, usePlanState } from '../../state/PlanStateProvider';
import { formatWeekRange } from '../../utils/dates';

interface WeekCardProps {
  week: Week;
}

export function WeekCard({ week }: WeekCardProps) {
  const { isWeekExpanded, toggleWeek, isSessionDone } = usePlanState();
  const open = isWeekExpanded(week);
  const accent = ACCENTS[week.accent];

  const trackable = week.days.flatMap((day) =>
    day.sessions
      .filter((s) => s.kind !== 'rest')
      .map((s) => sessionKey(week.id, day.label, s.label)),
  );
  const doneCount = trackable.filter(isSessionDone).length;

  return (
    <div className="mb-2 overflow-hidden rounded-lg border border-line bg-surface">
      <button
        type="button"
        onClick={() => toggleWeek(week.id)}
        aria-expanded={open}
        className="flex w-full items-center gap-2.5 border-b border-line bg-surface-2 px-3.5 py-2 text-left select-none"
      >
        <span className="w-7 flex-shrink-0 font-display text-xl leading-none text-faint">{week.num}</span>
        <span className="flex-shrink-0 font-mono text-[8.5px] text-faint">
          {formatWeekRange(week.startDate, week.spanDays)}
        </span>
        <span className={`flex-1 font-condensed text-[12.5px] font-bold tracking-[0.04em] ${accent.text}`}>
          {week.title}
        </span>
        <span className="ml-auto hidden flex-shrink-0 gap-1 sm:flex">
          {week.badges.map((badge) => (
            <Badge key={badge} label={badge} />
          ))}
          {trackable.length > 0 && (
            <Badge label={`${doneCount}/${trackable.length} done`} />
          )}
        </span>
        <span
          className={`flex-shrink-0 text-[11px] text-faint transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          ▾
        </span>
      </button>

      {open && (
        <>
          <div className="grid grid-cols-2 border-t border-line sm:grid-cols-3 lg:grid-cols-6">
            {week.days.map((day) => (
              <DayColumn key={day.label} day={day} weekId={week.id} />
            ))}
          </div>
          {week.note && (
            <div className="border-t border-line bg-black/5 px-3.5 py-2 text-[10.5px] leading-relaxed text-muted dark:bg-black/20">
              <span className="mr-1.5 font-mono text-[7.5px] uppercase tracking-[0.18em] text-faint">
                {week.note.label}
              </span>
              <RichText text={week.note.text} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
