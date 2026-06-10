import type { PlanDay } from '../../types/plan';
import { ACCENTS } from '../../theme/accents';
import { SessionCard } from './SessionCard';
import { sessionKey } from '../../state/PlanStateProvider';

interface DayColumnProps {
  day: PlanDay;
  weekId: string;
}

export function DayColumn({ day, weekId }: DayColumnProps) {
  const headerTint = day.highlight
    ? ACCENTS[day.highlight].bgSoft
    : day.double
      ? 'bg-accent-gold/5'
      : 'bg-black/5 dark:bg-black/20';

  return (
    <div
      className={`flex flex-col border-r border-line last:border-r-0 ${
        day.rest ? 'bg-black/5 dark:bg-black/10' : ''
      }`}
    >
      <div
        className={`flex items-center justify-between border-b border-line px-2.5 py-[5px] font-mono text-[7.5px] uppercase tracking-[0.12em] text-faint ${headerTint}`}
      >
        {day.label}
        {day.double && (
          <span className="rounded-sm border border-accent-gold/20 bg-accent-gold/10 px-1 text-[6.5px] normal-case text-accent-gold">
            Pool+Gym
          </span>
        )}
      </div>
      {day.sessions.map((session, i) => (
        <div key={session.label} className={i > 0 ? 'border-t border-line' : ''}>
          <SessionCard
            session={session}
            completionKey={sessionKey(weekId, day.label, session.label)}
          />
        </div>
      ))}
    </div>
  );
}
