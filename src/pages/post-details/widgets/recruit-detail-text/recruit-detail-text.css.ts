import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const recruitDetailTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  width: '100%',
});

export const imageContainer = style({
  marginTop: '6rem',
});

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  width: '100%',
});

export const sectionTitle = style({
  color: themeVars.color.gray_900,
  ...themeVars.font.body_18sb,
});

export const image = style({
  display: 'block',
  width: '100%',
  height: 'auto',
  borderRadius: '16px',
  objectFit: 'contain',
});
