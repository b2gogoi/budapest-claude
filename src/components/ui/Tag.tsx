import type { AccentColor } from '../../types/plan';
import { ACCENTS } from '../../theme/accents';

interface TagProps {
  label: string;
  tone: AccentColor;
}

/** Small square-cornered accent tag (phase header chips). */
export function Tag({ label, tone }: TagProps) {
  const accent = ACCENTS[tone];
  return (
    <span
      className={`rounded border px-2 py-0.5 font-mono text-[8.5px] ${accent.borderSoft} ${accent.text} ${accent.bgSoft}`}
    >
      {label}
    </span>
  );
}
