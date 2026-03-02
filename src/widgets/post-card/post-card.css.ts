import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  gap: '1rem',
  border: `1px solid ${themeVars.color.gray_200}`,
  borderRadius: '10px',
});

export const overlay = style({
  position: 'absolute',
  inset: 0,
  borderRadius: '10px',
});

export const dday = style({
  color: themeVars.color.gray_500,
  ...themeVars.font.body_18sb,
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.7rem',
});

export const roleContainer = style({
  whiteSpace: 'pre-line',
});

export const title = style({
  color: themeVars.color.gray_900,
  ...themeVars.font.body_18sb,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const role = style({
  color: themeVars.color.gray_500,
  ...themeVars.font.body_14m,
});

export const nowCountContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
  color: themeVars.color.gray_400,
  ...themeVars.font.body_14m,
});

export const iconContainer = style({
  width: '1.6rem',
  height: '1.6rem',
});

export const domainContainer = style({
  display: 'flex',
  gap: '0.6rem',
});

export const buttonContainer = style({
  position: 'relative',
  zIndex: 1,
});
