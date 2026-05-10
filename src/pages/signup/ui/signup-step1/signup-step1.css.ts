import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const fieldList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const usernameRow = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '0.8rem',
  alignItems: 'center',
});

export const buttonContainer = style({
  width: '100%',
  marginTop: '1rem',
});

export const checkButton = style({
  padding: '1.5rem 2rem',
  backgroundColor: themeVars.color.primary,
  color: themeVars.color.gray_000,
  ...themeVars.font.body_18r,
  borderRadius: '10px',
});
