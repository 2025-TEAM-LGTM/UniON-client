import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1.7rem',
});

export const backButtonContainer = style({
  display: 'flex',
  gap: '2rem',
  color: themeVars.color.gray_400,
  ...themeVars.font.body_18sb,
});

export const titleContainer = style({
  display: 'flex',
  gap: '2rem',
  ...themeVars.font.title_28sb,
});

export const title = style({
  color: themeVars.color.gray_900,
});

export const dday = style({
  color: themeVars.color.gray_500,
});

export const profileContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.7rem',
});

export const profileImage = style({
  width: '5.3rem',
  height: '5.3rem',
  borderRadius: '50%',
});

export const username = style({
  color: themeVars.color.gray_400,
  ...themeVars.font.body_18sb,
});

export const divider = style({
  width: '100%',
  height: '0.1rem',
  margin: '1rem 0',
  backgroundColor: themeVars.color.gray_200,
});
