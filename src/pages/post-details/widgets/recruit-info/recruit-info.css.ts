import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionTitle = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_20sb,
  marginBottom: '3rem',
});

export const infoGrid = style({
  display: 'grid',
  gridTemplateRows: 'repeat(3, 1fr)',
  gridTemplateColumns: 'repeat(2, 1fr)',
  rowGap: '3rem',
});

export const infoItemContainer = style({
  display: 'flex',
  gap: '5rem',
});

export const infoTitle = style({
  minWidth: '7rem',
  color: themeVars.color.gray_500,
  ...themeVars.font.body_18sb,
});

export const infoText = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_18sb,
});

export const linkText = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: themeVars.color.gray_800,
  textDecoration: 'underline',
});

export const copyButton = style({
  minWidth: 0,
  color: themeVars.color.gray_800,
  ...themeVars.font.body_18sb,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  textDecoration: 'underline',
});
