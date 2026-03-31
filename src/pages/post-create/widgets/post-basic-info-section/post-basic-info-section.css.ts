import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
});

export const sectionTitle = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_20sb,
});

export const fieldRowContainer = style({
  display: 'grid',
  gridTemplateColumns: '8.1rem minmax(0, 1fr)',
  columnGap: '2rem',
  alignItems: 'center',
  width: '100%',
});

export const labelContainer = style({
  display: 'flex',
  alignItems: 'center',
  minHeight: '4.8rem',
});

export const domainFieldContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const domainTriggerContainer = style({
  display: 'flex',
  alignItems: 'center',
  minHeight: '4.8rem',
});

export const fieldContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const captionText = style({
  marginTop: '0.5rem',
  color: themeVars.color.gray_400,
  ...themeVars.font.body_14m,
});

export const chipListContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '0.8rem',
  gap: '0.6rem',
  // minHeight: '4.7rem',
});

export const periodContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '5rem',
});
