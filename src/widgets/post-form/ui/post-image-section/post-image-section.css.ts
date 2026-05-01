import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
});

export const sectionTitle = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_18sb,
});
