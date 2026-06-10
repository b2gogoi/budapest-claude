interface PlanFooterProps {
  text: string;
}

export function PlanFooter({ text }: PlanFooterProps) {
  return (
    <footer className="mt-9 border-t border-line pt-[18px] text-center font-mono text-[8px] uppercase tracking-[0.2em] text-faint/60">
      {text}
    </footer>
  );
}
