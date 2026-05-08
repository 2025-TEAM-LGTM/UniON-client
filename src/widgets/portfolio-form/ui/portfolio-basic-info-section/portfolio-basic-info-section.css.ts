import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem 0',
  width: '100%',
});

export const sectionTitle = style({
  ...themeVars.font.body_20sb,
  color: themeVars.color.gray_800,
});

export const required = style({
  color: themeVars.color.primary,
});

export const fieldRowContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  marginTop: '1.6rem',
});

export const roleHeadcountRow = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '5rem',
  alignItems: 'end',
});
