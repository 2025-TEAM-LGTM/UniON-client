import { style } from '@vanilla-extract/css';

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
  marginTop: '3.1rem',
});
