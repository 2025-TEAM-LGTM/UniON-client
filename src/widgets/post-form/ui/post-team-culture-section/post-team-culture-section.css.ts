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

export const cultureListContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '1.2rem',
});

export const cultureItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const cultureItemTitle = style({
  fontSize: '1.4rem',
  fontWeight: 600,
  color: themeVars.color.gray_900,
});

export const cultureButtonGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

export const fieldRowContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});
