import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.8rem 2.5rem',
  gap: '1.2rem',
  border: `1px solid ${themeVars.color.gray_200}`,
  borderRadius: '10px',
});

export const avatarContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '9.9rem',
  height: '9.9rem',
  borderRadius: '50%',
  overflow: 'hidden',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const username = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_18sb,
});

export const role = style({
  color: themeVars.color.gray_500,
  ...themeVars.font.body_14m,
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const infoRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '2.4rem',
  minWidth: 0,
});

export const infoTitle = style({
  minWidth: '3.9rem',
  color: themeVars.color.primary,
  ...themeVars.font.body_14m,
});

export const infoText = style({
  minWidth: 0,
  minHeight: '4rem',
  flex: 1,
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  color: themeVars.color.gray_400,
  ...themeVars.font.body_14r,
});
