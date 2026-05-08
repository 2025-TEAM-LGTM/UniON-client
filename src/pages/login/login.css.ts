import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: 'linear-gradient(to bottom, #ffffff 50%, #e6f7f2 100%)',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '53rem',
  margin: '0 auto',
  padding: '0 2rem',
});

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '3.2rem',
  paddingBottom: '6rem',
});

export const logo = style({
  color: themeVars.color.primary,
  ...themeVars.font.display_36b,
});

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.3rem',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const title = style({
  color: themeVars.color.gray_900,
  ...themeVars.font.title_28sb,
});

export const subtitle = style({
  color: themeVars.color.gray_500,
  ...themeVars.font.body_16sb,
});

export const fieldContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
});

export const fieldWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const errorText = style({
  color: themeVars.color.negative,
  ...themeVars.font.body_14r,
});

export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: themeVars.color.gray_200,
});

export const signUpContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.2rem',
});

export const signUpText = style({
  marginBottom: '0.4rem',
  color: themeVars.color.gray_400,
  ...themeVars.font.body_18r,
});
