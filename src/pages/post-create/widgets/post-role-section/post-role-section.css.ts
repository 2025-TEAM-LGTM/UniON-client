import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
});

export const subSectionTitle = style({
  color: themeVars.color.gray_800,
  ...themeVars.font.body_18sb,
});

export const roleInputRowContainer = style({
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
  width: '100%',
  '@media': {
    'screen and (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
      gap: '1.2rem',
    },
  },
});

export const dropdownContainer = style({
  minWidth: 0,
  width: '100%',
});

export const stepperContainer = style({
  flexShrink: 0,
});

export const roleListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
});

export const roleItemContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.5rem 2rem',
  borderRadius: '10px',
  backgroundColor: themeVars.color.gray_100,
});

export const roleItemTextContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.3rem',
  color: themeVars.color.gray_500,
  ...themeVars.font.body_18r,
});

export const removeButton = style({
  width: '2.4rem',
  height: '2.4rem',
  border: 'none',
  background: 'transparent',
  color: themeVars.color.gray_400,
  cursor: 'pointer',
});

export const addButtonContainer = style({
  display: 'flex',
  minWidth: '14rem',
  height: '100%',
});
