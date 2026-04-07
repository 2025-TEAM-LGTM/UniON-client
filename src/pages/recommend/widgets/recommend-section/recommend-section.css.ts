import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionTitleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '2rem',
  marginBottom: '1rem',
});

export const sectionTitle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '1rem',
  color: themeVars.color.gray_800,
  ...themeVars.font.body_20sb,
});

export const refreshButton = style({
  display: 'flex',
  alignItems: 'center',
  color: themeVars.color.gray_400,
  ...themeVars.font.body_18r,
});

export const icon = style({
  width: '2.4rem',
  height: '2.4rem',
});

export const filterContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem',
});
