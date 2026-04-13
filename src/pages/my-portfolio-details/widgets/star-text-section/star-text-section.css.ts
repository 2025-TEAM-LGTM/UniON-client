import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '3rem',
});

export const sectionTitle = style({
  ...themeVars.font.body_20sb,
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.2rem',
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const title = style({
  ...themeVars.font.body_16sb,
});
