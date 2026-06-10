import type { Week } from '../../types/plan';
import { ACCENTS } from '../../theme/accents';
import { formatWeekRange } from '../../utils/dates';

interface WeekDateRowProps {
  week: Week;
  onChange: (startDate: string) => void;
}

/** Editable row: week identity + native date picker + live range preview. */
export function WeekDateRow({ week, onChange }: WeekDateRowProps) {
  const accent = ACCENTS[week.accent];
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-line px-3.5 py-2.5 last:border-b-0">
      <span className="w-9 flex-shrink-0 font-display text-lg leading-none text-faint">{week.num}</span>
      <span className={`min-w-0 flex-1 truncate font-condensed text-xs font-bold tracking-[0.04em] ${accent.text}`}>
        {week.title}
      </span>
      <input
        type="date"
        value={week.startDate}
        onChange={(e) => onChange(e.target.value)}
        aria-label={`${week.num} start date`}
        className="flex-shrink-0 rounded-md border border-line-2 bg-surface-2 px-2 py-1 font-mono text-[11px] text-ink outline-none transition-colors focus:border-accent-gold/60"
      />
      <span className="w-24 flex-shrink-0 text-right font-mono text-[9px] text-muted">
        {formatWeekRange(week.startDate, week.spanDays)}
      </span>
    </div>
  );
}
