import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const fieldLabel = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_18sb,

  selectors: {
    '&[data-required="true"]::after': {
      content: '" *"',
      color: themeVars.color.primary,
    },
  },
});
