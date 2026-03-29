import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const pageHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '3.8rem 0',
});

export const headerTitle = style({
  color: themeVars.color.gray_900,
  ...themeVars.font.body_20sb,
});

export const buttonContainer = style({
  display: 'flex',
  width: '14.1rem',
});

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100dvh',
  padding: '0 2rem 4rem',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '0 8rem 4rem',
    },
    'screen and (min-width: 1440px)': {
      padding: '0 15rem 4rem',
    },
  },
});
