import { Fragment, useMemo } from 'react';

interface RichTextProps {
  text: string;
  /** Class applied to **bold** segments. */
  strongClassName?: string;
  /** Class applied to _em_ segments. */
  emClassName?: string;
}

type Token = { type: 'text' | 'strong' | 'em'; value: string };

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  // Matches **bold** or _em_ spans; everything else is plain text.
  const pattern = /\*\*(.+?)\*\*|_([^_]+)_/g;
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    if (match.index! > last) tokens.push({ type: 'text', value: text.slice(last, match.index) });
    if (match[1] !== undefined) tokens.push({ type: 'strong', value: match[1] });
    else tokens.push({ type: 'em', value: match[2] });
    last = match.index! + match[0].length;
  }
  if (last < text.length) tokens.push({ type: 'text', value: text.slice(last) });
  return tokens;
}

/** Renders markdown-lite (**bold**, _em_) strings from plan data. */
export function RichText({
  text,
  strongClassName = 'font-semibold text-ink',
  emClassName = 'not-italic text-accent-cyan',
}: RichTextProps) {
  const tokens = useMemo(() => tokenize(text), [text]);
  return (
    <>
      {tokens.map((token, i) =>
        token.type === 'strong' ? (
          <strong key={i} className={strongClassName}>
            {token.value}
          </strong>
        ) : token.type === 'em' ? (
          <em key={i} className={emClassName}>
            {token.value}
          </em>
        ) : (
          <Fragment key={i}>{token.value}</Fragment>
        ),
      )}
    </>
  );
}
