import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  display: 'flex',
  marginTop: '4.8rem',
  padding: '0 14.8rem',
});

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100dvh',
  marginTop: '3rem',
  marginBottom: '3rem',
  padding: '0 26.6rem',
});

export const contentContainer = style({
  flex: 1,
  paddingBottom: '8rem',
});

export const bottomContainer = style({
  position: 'sticky',
  bottom: 0,
  left: 0,
  padding: '2rem 0',
  borderTop: `1px solid ${themeVars.color.gray_200}`,
  backgroundColor: themeVars.color.gray_000,
  zIndex: 10,
});

export const ctaContainer = style({
  display: 'flex',
  gap: '1.2rem',
});
