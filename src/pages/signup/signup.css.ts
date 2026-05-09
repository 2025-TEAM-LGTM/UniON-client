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
  padding: '0 2rem 4rem',
});

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '3.2rem',
  paddingBottom: '2.4rem',
});

export const logo = style({
  color: themeVars.color.primary,
  ...themeVars.font.display_36b,
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  marginBottom: '2.4rem',
});

export const title = style({
  ...themeVars.font.title_28sb,
  color: themeVars.color.gray_900,
});

export const subtitle = style({
  ...themeVars.font.body_16sb,
  color: themeVars.color.gray_400,
});
