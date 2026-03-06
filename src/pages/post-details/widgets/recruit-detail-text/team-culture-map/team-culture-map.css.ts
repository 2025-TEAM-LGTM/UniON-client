import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const list = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.2rem 1.6rem',
});

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.8rem',
  minWidth: '14rem',
});

export const itemTitle = style({
  color: themeVars.color.gray_900,
  ...themeVars.font.body_14m,
});
