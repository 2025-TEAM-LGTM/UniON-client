import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const toggle = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 1.2rem',
  gap: '1rem',
  border: `1px solid ${themeVars.color.gray_400}`,
  borderRadius: '10px',
  color: themeVars.color.gray_400,
  ...themeVars.font.body_16sb,

  selectors: {
    '&[aria-pressed="true"]': {
      borderColor: themeVars.color.primary,
      color: themeVars.color.primary,
    },
    '&:disabled': {
      borderColor: themeVars.color.primary,
      color: themeVars.color.primary,
      cursor: 'not-allowed',
    },
  },
});

export const icon = style({
  width: '2.4rem',
  height: '2.4rem',
});
