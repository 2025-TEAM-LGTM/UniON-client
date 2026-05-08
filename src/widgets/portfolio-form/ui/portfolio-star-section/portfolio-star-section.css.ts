import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '2rem',
  gap: '2rem',
  width: '100%',
});

export const sectionTitle = style({
  ...themeVars.font.body_20sb,
  color: themeVars.color.gray_800,
});

export const required = style({
  color: themeVars.color.primary,
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
