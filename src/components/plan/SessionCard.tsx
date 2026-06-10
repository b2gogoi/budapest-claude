import type { Session } from '../../types/plan';
import { ACCENTS } from '../../theme/accents';
import { RichText } from '../ui/RichText';
import { usePlanState } from '../../state/PlanStateProvider';

interface SessionCardProps {
  session: Session;
  /** Persisted completion key; omit for rest blocks. */
  completionKey?: string;
}

const KIND_TONE = { pool: 'cyan', gym: 'gold', rest: 'slate', competition: 'gold' } as const;

export function SessionCard({ session, completionKey }: SessionCardProps) {
  const { isSessionDone, toggleSession } = usePlanState();
  const tone = session.accent ?? KIND_TONE[session.kind];
  const accent = ACCENTS[tone];
  const trackable = completionKey !== undefined && session.kind !== 'rest';
  const done = trackable && isSessionDone(completionKey);

  if (session.kind === 'rest') {
    return (
      <div className="flex min-h-[100px] flex-col items-center justify-center p-2.5 opacity-40">
        <div className="mb-1 flex items-center gap-1">
          <span className="h-[5px] w-[5px] rounded-full bg-faint" />
          <span className="font-condensed text-[9.5px] font-bold uppercase tracking-[0.1em] text-faint">
            {session.label}
          </span>
        </div>
        <div className="text-center font-condensed text-xs font-bold text-ink">{session.title}</div>
        <div className="mt-1 text-center text-[9.5px] text-muted">
          {session.items.map((item) => (
            <RichText key={item.text} text={item.text} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`p-2.5 transition-opacity ${done ? 'opacity-50' : ''}`}>
      <div className="mb-1 flex items-center gap-1">
        <span className={`h-[5px] w-[5px] flex-shrink-0 rounded-full ${accent.bg}`} />
        <span
          className={`font-condensed text-[9.5px] font-bold uppercase tracking-[0.1em] ${accent.text}`}
        >
          {session.label}
        </span>
        {trackable && (
          <input
            type="checkbox"
            checked={done}
            onChange={() => toggleSession(completionKey)}
            aria-label={`Mark ${session.label} — ${session.title} as done`}
            className={`ml-auto h-3 w-3 cursor-pointer accent-current ${accent.text}`}
          />
        )}
      </div>
      <h4
        className={`mb-1.5 font-condensed text-xs font-bold leading-tight ${
          session.kind === 'competition' ? accent.text : 'text-ink'
        } ${done ? 'line-through' : ''}`}
      >
        {session.title}
      </h4>
      <ul className="flex flex-col gap-[3px]">
        {session.items.map((item) => {
          const marker =
            item.emphasis === 'key'
              ? 'before:bg-accent-gold'
              : item.emphasis === 'alert'
                ? 'before:bg-accent-rose'
                : 'before:bg-line-2';
          const textTone =
            item.emphasis === 'key'
              ? 'text-ink'
              : item.emphasis === 'alert'
                ? 'text-accent-rose'
                : 'text-muted';
          return (
            <li
              key={item.text}
              className={`relative border-l border-line-2 pl-[7px] text-[9.5px] leading-normal ${textTone} before:absolute before:-left-[3px] before:top-[6px] before:h-px before:w-[5px] ${marker}`}
            >
              <RichText
                text={item.text}
                strongClassName={
                  item.emphasis === 'alert' ? 'font-semibold text-accent-rose' : 'font-semibold text-ink'
                }
              />
            </li>
          );
        })}
      </ul>
      {session.volume && (
        <div className={`mt-1.5 border-t border-line pt-1 font-mono text-[7px] tracking-[0.05em] ${accent.textDim}`}>
          {session.volume}
        </div>
      )}
    </div>
  );
}
