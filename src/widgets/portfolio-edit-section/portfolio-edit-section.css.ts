import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  border: `1px solid ${themeVars.color.gray_200}`,
  borderRadius: '10px',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '2.4rem 3rem',
  gap: '2.4rem',
});

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const headerTitle = style({
  color: themeVars.color.gray_900,
  ...themeVars.font.body_20sb,
});

export const buttonContainer = style({
  display: 'flex',
});

export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem',
});

export const cardWrapper = style({
  position: 'relative',
});

export const deleteButton = style({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: '50%',
  backgroundColor: themeVars.color.negative,
  border: 'none',
  cursor: 'pointer',
  color: '#fff',

  ':hover': {
    opacity: 0.85,
  },
});

export const emptyContainer = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '4rem 0',
});

export const emptyText = style({
  color: themeVars.color.gray_400,
  ...themeVars.font.body_14m,
});
