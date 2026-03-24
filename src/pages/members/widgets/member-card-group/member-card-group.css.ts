import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const emptyContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const emptyText = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_16sb,
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: '2rem',
});
