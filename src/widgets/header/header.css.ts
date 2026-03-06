import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const headerContainer = style({
  position: 'sticky',
  display: 'flex',
  top: 0,
  alignItems: 'center',
  padding: '0 11.8rem',
  gap: '5rem',
  backgroundColor: themeVars.color.gray_000,
  borderBottom: `1px solid ${themeVars.color.gray_200}`,
});

export const logoContainer = style({
  backgroundColor: themeVars.color.gray_000,
  color: themeVars.color.gray_900,
  ...themeVars.font.title_28sb,
});

export const navContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
});

export const navItem = recipe({
  base: {
    padding: '1.7rem 1.2rem',
    borderBottom: `2px solid transparent`,
    color: themeVars.color.gray_400,
    ...themeVars.font.header_16m,
  },

  variants: {
    active: {
      true: {
        color: themeVars.color.gray_900,
        borderColor: themeVars.color.primary,
      },
      false: {},
    },
  },
  defaultVariants: {
    active: false,
  },
});
