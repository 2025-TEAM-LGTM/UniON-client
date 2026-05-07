import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const chipContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
});

export const inputRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const dropdownWrapper = style({
  flex: 1,
  minWidth: 0,
});

export const addButton = style({
  padding: '1.8rem 2rem',
  backgroundColor: themeVars.color.primary,
  color: themeVars.color.gray_000,
  ...themeVars.font.body_18sb,
  borderRadius: '10px',
  ':hover': {
    opacity: 0.9,
  },
});
