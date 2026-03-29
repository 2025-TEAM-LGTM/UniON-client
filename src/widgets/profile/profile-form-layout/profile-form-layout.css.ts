import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
});

export const summarySection = style({
  width: '100%',
});

export const contentSection = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
  gap: '1.6rem',
  alignItems: 'stretch',
});

export const leftColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  minWidth: 0,
});

export const rightColumn = style({
  minWidth: 0,
  height: '100%',
});

export const personalitySection = style({
  height: '100%',
});

export const page = style({
  width: '100%',
  maxWidth: '120rem',
  margin: '0 auto',
  padding: '3.2rem 0 4.8rem',
});
