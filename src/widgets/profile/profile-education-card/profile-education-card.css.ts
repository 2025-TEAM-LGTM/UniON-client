import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const educationContainer = style({
  display: 'flex',
  gap: '1.2rem',
  borderLeft: `3px solid ${themeVars.color.primary}`,
});

export const educationBar = style({
  width: '3px',
  color: themeVars.color.primary,
});

export const educationInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const universityName = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_16sb,
});

export const academicStatusLabel = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_14m,
});

export const entranceYearLabel = style({
  color: themeVars.color.gray_400,
  ...themeVars.font.body_14m,
});
