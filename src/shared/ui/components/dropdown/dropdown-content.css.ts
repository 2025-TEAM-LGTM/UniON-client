import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const contentContainer = style({
  minWidth: '28rem',
});

export const fieldRoleContainer = style({
  minWidth: '32rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const sectionTitle = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_14m,
});

export const helperText = style({
  color: themeVars.color.gray_500,
  ...themeVars.font.body_14m,
});

export const buttonGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
});

const baseButton = {
  borderRadius: '9999px',
  padding: '0.8rem 1.2rem',
  border: `1px solid ${themeVars.color.gray_200}`,
  backgroundColor: themeVars.color.gray_000,
  color: themeVars.color.gray_900,
  cursor: 'pointer',
  ...themeVars.font.body_14m,
};

export const button = style({
  ...baseButton,
});

export const selectedButton = style({
  ...baseButton,
  border: `1px solid ${themeVars.color.primary}`,
  color: themeVars.color.primary,
  backgroundColor: themeVars.color.primary_light2,
});
