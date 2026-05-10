import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const description = style({
  ...themeVars.font.body_14r,
  color: themeVars.color.gray_500,
});

export const buttonContainer = style({
  width: '100%',
});
