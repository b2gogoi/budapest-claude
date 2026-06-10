import type { PhaseOverviewCard } from '../../types/plan';
import { ACCENTS } from '../../theme/accents';
import { SectionHeader } from '../ui/SectionHeader';

interface PhaseOverviewProps {
  sectionLabel: string;
  cards: PhaseOverviewCard[];
}

export function PhaseOverview({ sectionLabel, cards }: PhaseOverviewProps) {
  return (
    <section className="mb-11">
      <SectionHeader label={sectionLabel} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const accent = ACCENTS[card.tone];
          return (
            <article
              key={card.phaseLabel}
              className="relative overflow-hidden rounded-[10px] border border-line-2 bg-surface p-4"
            >
              <div
                className={`absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-current to-transparent ${accent.text}`}
              />
              <div className="mb-1 font-mono text-[8px] uppercase tracking-[0.2em] text-faint">
                {card.phaseLabel}
              </div>
              <div className={`mb-0.5 font-display text-[19px] leading-none ${accent.text}`}>{card.name}</div>
              <div className="mb-2 font-mono text-[8.5px] text-muted">{card.dates}</div>
              <div className="font-display text-[26px] leading-none text-ink">
                {card.duration} <span className="font-sans text-[10px] text-muted">{card.durationUnit}</span>
              </div>
              <div className="mt-2 flex flex-col gap-1">
                {card.tags.map((tag, i) => (
                  <div
                    key={tag.label}
                    className={`text-[10px] text-muted ${i > 0 ? 'border-t border-line pt-1' : ''}`}
                  >
                    <strong className="font-semibold text-ink">{tag.label}:</strong> {tag.text}
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
