import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '4rem 3rem',
  gap: '1.5rem',
  border: `1px solid ${themeVars.color.gray_200}`,
  borderRadius: '10px',
});

export const title = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_18sb,
});
