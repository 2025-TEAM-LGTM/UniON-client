import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  width: '100%',
  paddingBottom: '3.1rem',
});

export const sectionTitle = style({
  color: themeVars.color.gray_900,
  ...themeVars.font.body_20sb,
});

export const fieldRowContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});
