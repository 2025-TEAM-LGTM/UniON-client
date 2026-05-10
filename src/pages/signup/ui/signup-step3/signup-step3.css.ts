import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem 3.2rem',
});

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const itemTitle = style({
  ...themeVars.font.body_14r,
  color: themeVars.color.gray_800,
  fontWeight: 600,
});

export const toggleGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

export const buttonContainer = style({
  width: '100%',
  marginTop: '1rem',
});
