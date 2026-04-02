import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
});

export const sectionTitle = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_20sb,
});

export const infoGrid = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
  columnGap: '3.2rem',
  rowGap: '1.6rem',
  width: '100%',
  '@media': {
    'screen and (max-width: 1023px)': {
      gridTemplateColumns: '1fr',
      rowGap: '1.2rem',
    },
  },
});

export const summaryRow = style({
  display: 'grid',
  gridTemplateColumns: '10rem minmax(0, 1fr)',
  columnGap: '1.6rem',
  alignItems: 'center',
  minWidth: 0,
  gridColumn: '1 / -1',
  '@media': {
    'screen and (max-width: 1023px)': {
      gridColumn: 'auto',
    },
  },
});

export const infoRow = style({
  display: 'grid',
  gridTemplateColumns: '10rem minmax(0, 1fr)',
  columnGap: '1.6rem',
  alignItems: 'center',
  minWidth: 0,
});

export const label = style({
  color: themeVars.color.gray_500,
  ...themeVars.font.body_16sb,
  flexShrink: 0,
});

export const valueText = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_16sb,
  minWidth: 0,
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

export const link = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_16sb,
  textDecoration: 'underline',
  textUnderlineOffset: '0.2rem',
  wordBreak: 'break-all',
});

export const imageWrapper = style({
  marginTop: '3rem',
  width: '100%',
  aspectRatio: '16 / 9',
  overflow: 'hidden',
  borderRadius: '12px',
  backgroundColor: themeVars.color.gray_100,
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
