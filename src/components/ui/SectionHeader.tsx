interface SectionHeaderProps {
  label: string;
}

/** Mono uppercase section label with a trailing rule. */
export function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <div className="mb-3.5 flex items-center gap-2.5">
      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-faint">{label}</div>
      <div className="h-px flex-1 bg-line-2" />
    </div>
  );
}
