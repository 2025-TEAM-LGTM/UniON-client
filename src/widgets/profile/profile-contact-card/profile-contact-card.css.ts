import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const contactContainer = style({
  display: 'flex',
  gap: '1.5rem',
});

export const email = style({
  color: themeVars.color.gray_500,
  ...themeVars.font.body_14m,
});
