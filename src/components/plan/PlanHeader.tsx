import type { PlanHeaderConfig } from '../../types/plan';
import { ACCENTS } from '../../theme/accents';
import { Pill } from '../ui/Pill';
import { ThemeToggle } from '../ui/ThemeToggle';

interface PlanHeaderProps {
  config: PlanHeaderConfig;
}

export function PlanHeader({ config }: PlanHeaderProps) {
  return (
    <header className="mb-11 border-b border-line-2 pb-7">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <div className="mb-2.5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.35em] text-accent-gold">
            <span className="h-px w-5 bg-accent-gold" />
            {config.eyebrow}
          </div>
          <h1 className="font-display text-[clamp(52px,7vw,92px)] leading-[0.88] tracking-[0.02em] text-ink">
            {config.titleLines.map((line, i) => (
              <span key={line} className={`block ${i === config.accentLine ? 'text-accent-gold' : ''}`}>
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-1.5 font-condensed text-[17px] text-muted">{config.subtitle}</p>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-end gap-1.5">
            {config.pills.map((pill) => (
              <Pill key={pill.label} label={pill.label} tone={pill.tone} />
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
      <div className="mt-[18px] flex flex-wrap gap-6 border-t border-line pt-[18px]">
        {config.meta.map((item) => (
          <div key={item.label} className="flex flex-col gap-px">
            <div className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">{item.label}</div>
            <div
              className={`font-condensed text-[15px] font-bold ${item.tone ? ACCENTS[item.tone].text : 'text-ink'}`}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
