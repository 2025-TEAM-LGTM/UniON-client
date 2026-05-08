import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const base = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '1rem 2rem',
  borderRadius: '10px',
  color: themeVars.color.gray_000,
  ...themeVars.font.body_18sb,
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

export const button = recipe({
  base,
  variants: {
    color: {
      primary: {
        backgroundColor: themeVars.color.primary_dark,
      },
      dark: {
        backgroundColor: themeVars.color.gray_800,
      },
      gray: {
        backgroundColor: themeVars.color.gray_400,
      },
      disabled: {
        backgroundColor: themeVars.color.gray_200,
      },
    },
  },
});
