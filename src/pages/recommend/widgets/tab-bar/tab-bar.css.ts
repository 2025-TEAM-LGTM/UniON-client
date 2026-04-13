import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const tabContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
});

export const tabButton = recipe({
  base: {
    display: 'flex',
    ...themeVars.font.body_20sb,
  },

  variants: {
    isActive: {
      true: {
        color: themeVars.color.gray_900,
      },
      false: {
        color: themeVars.color.gray_400,
      },
    },
  },
});

export const divider = style({
  width: '0.2rem',
  height: '1.8rem',
  backgroundColor: themeVars.color.gray_400,
});
