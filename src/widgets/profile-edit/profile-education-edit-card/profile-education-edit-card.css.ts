import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const educationContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const statusContainer = style({
  display: 'flex',
  gap: '0.8rem',
  flexWrap: 'wrap',
  marginTop: '0.4rem',
});

const statusBase = style({
  padding: '0.5rem 1.2rem',
  borderRadius: '9999px',
  border: `1px solid ${themeVars.color.gray_400}`,
  ...themeVars.font.body_14m,
  color: themeVars.color.gray_400,
  cursor: 'pointer',
  background: 'none',

  ':hover': {
    borderColor: themeVars.color.primary,
    color: themeVars.color.primary,
  },
});

export const statusButton = statusBase;

export const statusButtonActive = style([
  statusBase,
  {
    borderColor: themeVars.color.primary,
    color: themeVars.color.primary,
  },
]);
