import type { Phase } from '../../types/plan';
import { ACCENTS } from '../../theme/accents';
import { SectionHeader } from '../ui/SectionHeader';
import { Tag } from '../ui/Tag';
import { WeekCard } from './WeekCard';

interface PhaseSectionProps {
  phase: Phase;
}

export function PhaseSection({ phase }: PhaseSectionProps) {
  const accent = ACCENTS[phase.accent];
  return (
    <section className="mb-12">
      <SectionHeader label={phase.sectionLabel} />
      <div className="relative mb-4 flex flex-wrap items-center gap-3.5 overflow-hidden rounded-[10px] border border-line-2 bg-surface px-[18px] py-3">
        <div className={`absolute inset-y-0 left-0 w-[3px] ${accent.bg}`} />
        <div className={`font-display text-[44px] leading-none opacity-10 ${accent.text}`}>{phase.number}</div>
        <div>
          <div className="mb-0.5 font-mono text-[8px] uppercase tracking-[0.2em] text-faint">
            Phase {phase.number}
          </div>
          <div className={`font-display text-2xl leading-none tracking-[0.04em] ${accent.text}`}>
            {phase.name}
          </div>
          <div className="mt-0.5 font-mono text-[9px] text-muted">{phase.meta}</div>
        </div>
        <div className="ml-auto flex flex-wrap justify-end gap-1.5">
          {phase.tags.map((tag) => (
            <Tag key={tag.label} label={tag.label} tone={tag.tone} />
          ))}
        </div>
      </div>
      {phase.weeks.map((week) => (
        <WeekCard key={week.id} week={week} />
      ))}
    </section>
  );
}
