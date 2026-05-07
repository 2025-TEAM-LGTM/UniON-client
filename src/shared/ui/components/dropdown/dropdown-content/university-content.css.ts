import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 1.2rem',
  width: '100%',
});

export const searchContainer = style({
  paddingTop: '1rem',
  paddingBottom: '1.5rem',
  borderBottom: `1px solid ${themeVars.color.gray_200}`,
});

export const searchInput = style({
  width: '100%',
  padding: '1rem 1.2rem',
  border: `1px solid ${themeVars.color.gray_200}`,
  borderRadius: '1rem',
  ...themeVars.font.body_14m,
  color: themeVars.color.gray_900,
  outline: 'none',
  caretColor: themeVars.color.primary,

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
  width: '100%',
  padding: '1rem 1.6rem',
  textAlign: 'left',
  ...themeVars.font.body_14r,
  cursor: 'pointer',
  border: 'none',
  background: 'none',

  ':hover': {
    backgroundColor: themeVars.color.primary_light2,
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
    backgroundColor: themeVars.color.primary_light2,
    color: themeVars.color.primary,
    ...themeVars.font.body_14m,
  },
]);
