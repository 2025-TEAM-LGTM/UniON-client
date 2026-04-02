import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const panel = style({
  position: 'absolute',
  zIndex: 1000,
  minWidth: '24rem',
  maxWidth: '40rem',
  maxHeight: '30rem',
  marginTop: '0.8rem',
  border: `1px solid ${themeVars.color.gray_200}`,
  borderRadius: '10px',
  backgroundColor: themeVars.color.gray_000,
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  overflow: 'auto',
});

export const panelInner = style({
  padding: '1.2rem',
});
