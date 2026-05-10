import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const placeholder = style({
  ...themeVars.font.body_14r,
  color: themeVars.color.gray_400,
});

export const optionGroup = style({
  display: 'flex',
  gap: '0.8rem',
  flexWrap: 'wrap',
});

const optionBase = style({
  padding: '0.8rem 1.6rem',
  border: `1px solid ${themeVars.color.gray_200}`,
  borderRadius: '20px',
  ...themeVars.font.body_14r,
  cursor: 'pointer',
});

export const option = style([
  optionBase,
  {
    backgroundColor: themeVars.color.gray_000,
    color: themeVars.color.gray_500,
  },
]);

export const optionSelected = style([
  optionBase,
  {
    backgroundColor: themeVars.color.primary_light2,
    color: themeVars.color.primary,
    borderColor: themeVars.color.primary,
    ...themeVars.font.body_14m,
  },
]);
