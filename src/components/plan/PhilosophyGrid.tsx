import type { PhilosophyItem } from '../../types/plan';
import { ACCENTS } from '../../theme/accents';
import { SectionHeader } from '../ui/SectionHeader';

interface PhilosophyGridProps {
  sectionLabel: string;
  items: PhilosophyItem[];
}

export function PhilosophyGrid({ sectionLabel, items }: PhilosophyGridProps) {
  return (
    <section className="mb-11">
      <SectionHeader label={sectionLabel} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const accent = ACCENTS[item.tone];
          return (
            <article
              key={item.number}
              className="relative overflow-hidden rounded-lg border border-line-2 bg-surface p-3.5"
            >
              <div className={`absolute inset-x-0 top-0 h-0.5 ${accent.bg}`} />
              <div className={`mb-1 font-display text-[30px] leading-none opacity-20 ${accent.text}`}>
                {item.number}
              </div>
              <h3
                className={`mb-1.5 font-condensed text-xs font-bold uppercase tracking-[0.06em] ${accent.text}`}
              >
                {item.title}
              </h3>
              <p className="text-[10.5px] leading-relaxed text-muted">{item.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
