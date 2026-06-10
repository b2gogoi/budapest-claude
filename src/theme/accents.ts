import type { AccentColor } from '../types/plan';

/** Static class lookups per accent — Tailwind needs literal class names. */
export interface AccentClasses {
  text: string;
  textDim: string;
  border: string;
  borderSoft: string;
  bgSoft: string;
  bg: string;
}

export const ACCENTS: Record<AccentColor, AccentClasses> = {
  gold: {
    text: 'text-accent-gold',
    textDim: 'text-accent-gold/50',
    border: 'border-accent-gold',
    borderSoft: 'border-accent-gold/40',
    bgSoft: 'bg-accent-gold/10',
    bg: 'bg-accent-gold',
  },
  cyan: {
    text: 'text-accent-cyan',
    textDim: 'text-accent-cyan/50',
    border: 'border-accent-cyan',
    borderSoft: 'border-accent-cyan/40',
    bgSoft: 'bg-accent-cyan/10',
    bg: 'bg-accent-cyan',
  },
  violet: {
    text: 'text-accent-violet',
    textDim: 'text-accent-violet/50',
    border: 'border-accent-violet',
    borderSoft: 'border-accent-violet/40',
    bgSoft: 'bg-accent-violet/10',
    bg: 'bg-accent-violet',
  },
  rose: {
    text: 'text-accent-rose',
    textDim: 'text-accent-rose/50',
    border: 'border-accent-rose',
    borderSoft: 'border-accent-rose/40',
    bgSoft: 'bg-accent-rose/10',
    bg: 'bg-accent-rose',
  },
  emerald: {
    text: 'text-accent-emerald',
    textDim: 'text-accent-emerald/50',
    border: 'border-accent-emerald',
    borderSoft: 'border-accent-emerald/40',
    bgSoft: 'bg-accent-emerald/10',
    bg: 'bg-accent-emerald',
  },
  slate: {
    text: 'text-accent-slate',
    textDim: 'text-accent-slate/50',
    border: 'border-accent-slate',
    borderSoft: 'border-accent-slate/40',
    bgSoft: 'bg-accent-slate/10',
    bg: 'bg-accent-slate',
  },
};
