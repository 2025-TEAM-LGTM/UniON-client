import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

import banner from './banner.png';

export const background = style({
  padding: '3.2rem 5.6rem',
  backgroundImage: `url(${banner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const bannerContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const bannerTitle = style({
  color: themeVars.color.gray_900,
  ...themeVars.font.display_36b,
});

export const bannerText = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.display_20r,
});
