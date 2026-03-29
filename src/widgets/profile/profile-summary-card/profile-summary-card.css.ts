import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '2.4rem 3rem',
  gap: '0.9rem',
  border: `1px solid ${themeVars.color.gray_200}`,
  borderRadius: '10px',
});

export const profileImageContainer = style({
  width: '7.2rem',
  height: '7.2rem',
});

export const profileImage = style({
  borderRadius: '50%',
  objectFit: 'cover',
});

export const username = style({
  color: themeVars.color.gray_900,
  ...themeVars.font.title_28sb,
});

export const userInfo = style({
  color: themeVars.color.gray_400,
  ...themeVars.font.body_18sb,
});
