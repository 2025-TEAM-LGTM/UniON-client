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
  gap: '0.8rem',
  alignItems: 'center',
});

export const dropdownWrapper = style({
  flex: 1,
  minWidth: 0,
});

export const addButton = style({
  flexShrink: 0,
  padding: '0.6rem 1.6rem',
  backgroundColor: themeVars.color.primary,
  color: '#fff',
  ...themeVars.font.body_14m,
  fontWeight: 600,
  borderRadius: '0.6rem',
  border: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',

  ':hover': {
    opacity: 0.9,
  },
});
