import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const personalityItemContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1.6rem',
});

export const personalityItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const personalityTitle = style({
  color: themeVars.color.gray_900,
  ...themeVars.font.body_14m,
});

export const optionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});
