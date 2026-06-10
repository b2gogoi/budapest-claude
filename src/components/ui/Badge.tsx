interface BadgeProps {
  label: string;
}

/** Neutral mono badge (week volume summaries). */
export function Badge({ label }: BadgeProps) {
  return (
    <span className="rounded-sm border border-muted/20 px-1.5 py-0.5 font-mono text-[7.5px] text-muted">
      {label}
    </span>
  );
}
