import type { AccentColor } from '../../types/plan';
import { ACCENTS } from '../../theme/accents';

interface PillProps {
  label: string;
  tone: AccentColor;
}

/** Rounded outline pill, accent-toned (header summary chips). */
export function Pill({ label, tone }: PillProps) {
  const accent = ACCENTS[tone];
  return (
    <div
      className={`whitespace-nowrap rounded-full border px-3 py-1 font-mono text-[9.5px] tracking-[0.12em] ${accent.borderSoft} ${accent.text} ${accent.bgSoft}`}
    >
      {label}
    </div>
  );
}
