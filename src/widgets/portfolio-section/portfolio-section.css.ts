import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '4rem 3rem',
  marginTop: '2.9rem',
  border: `1px solid ${themeVars.color.gray_200}`,
  borderRadius: '10px',
});

export const buttonContainer = style({
  width: '14.1rem',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
});

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const headerTitle = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_18sb,
});

export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '2.4rem',
});

export const emptyContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '24rem',
  borderRadius: '1.6rem',
});

export const emptyText = style({
  color: themeVars.color.gray_400,
  ...themeVars.font.body_18sb,
});
