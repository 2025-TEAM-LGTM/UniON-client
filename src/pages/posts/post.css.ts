import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const bannerContainer = style({
  marginTop: '2rem',
  padding: '0 2rem',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '0 8rem',
    },
    'screen and (min-width: 1440px)': {
      padding: '0 15rem',
    },
  },
});

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100dvh',
  padding: '0 2rem',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '0 8rem',
    },
    'screen and (min-width: 1440px)': {
      padding: '0 15rem',
    },
  },
});

export const sectionHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '2rem 0',
  color: themeVars.color.gray_800,
  ...themeVars.font.body_20sb,
});

export const writeButtonContainer = style({
  width: '15.2rem',
});

export const dropdownContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
});

export const dropdown = style({
  display: 'flex',
  gap: '1rem',
});

export const searchButtonContainer = style({
  display: 'flex',
  gap: '1rem',
});
