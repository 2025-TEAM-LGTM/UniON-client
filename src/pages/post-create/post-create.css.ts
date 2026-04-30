import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  display: 'flex',
  marginTop: '4.8rem',
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
  gap: '3.1rem',
  width: '100%',
  maxWidth: '124rem',
  margin: '0 auto',
  padding: '0 2rem 4rem',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '0 6rem 4rem',
    },
    'screen and (min-width: 1440px)': {
      padding: '0 10rem 4rem',
    },
  },
});
