import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const searchContainer = style({
  padding: '0.8rem',
  borderBottom: `1px solid ${themeVars.color.gray_200}`,
});

export const searchInput = style({
  width: '100%',
  padding: '0.6rem 0.8rem',
  border: `1px solid ${themeVars.color.gray_400}`,
  borderRadius: '0.6rem',
  ...themeVars.font.body_14m,
  color: themeVars.color.gray_900,
  outline: 'none',

  ':focus': {
    borderColor: themeVars.color.primary,
  },

  '::placeholder': {
    color: themeVars.color.gray_400,
  },
});

export const list = style({
  overflowY: 'auto',
  maxHeight: '24rem',
  padding: '0.4rem 0',
});

export const emptyItem = style({
  padding: '1.2rem 1.6rem',
  ...themeVars.font.body_14m,
  color: themeVars.color.gray_400,
  textAlign: 'center',
});

const listItemBase = style({
  display: 'block',
  width: '100%',
  padding: '1rem 1.6rem',
  textAlign: 'left',
  ...themeVars.font.body_14m,
  cursor: 'pointer',
  border: 'none',
  background: 'none',

  ':hover': {
    backgroundColor: themeVars.color.gray_100,
  },
});

export const listItem = style([
  listItemBase,
  {
    color: themeVars.color.gray_900,
  },
]);

export const listItemActive = style([
  listItemBase,
  {
    color: themeVars.color.primary,
    fontWeight: 600,
    backgroundColor: themeVars.color.gray_100,
  },
]);
