import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const fieldList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const buttonContainer = style({
  width: '100%',
  marginTop: '1rem',
});
