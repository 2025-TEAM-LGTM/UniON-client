import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const toggle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.3rem 2.2rem',
  gap: '1.2rem',
  border: `1px solid ${themeVars.color.gray_400}`,
  borderRadius: '10px',
  color: themeVars.color.gray_400,
  ...themeVars.font.body_18r,

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
