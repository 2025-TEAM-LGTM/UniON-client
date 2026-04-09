import { style } from '@vanilla-extract/css';

export const group = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'flex-start',
});

export const dropdown = style({
  minWidth: '22rem',
  flexShrink: 0,
});
