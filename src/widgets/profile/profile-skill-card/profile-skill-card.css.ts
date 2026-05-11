import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const skillContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
});

export const emptyContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px 0',
});

export const emptyText = style({
  color: themeVars.color.gray_500,
  ...themeVars.font.body_14m,
});
