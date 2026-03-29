import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const personalityItemContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  columnGap: '5.9rem',
  rowGap: '1.2rem',
});

export const personalityItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const skillTitle = style({
  color: themeVars.color.gray_500,
  ...themeVars.font.body_14m,
});
