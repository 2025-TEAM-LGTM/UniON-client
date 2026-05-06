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

export const profileImageButton = style({
  position: 'relative',
  width: '7.2rem',
  height: '7.2rem',
  borderRadius: '50%',
  overflow: 'hidden',
  cursor: 'pointer',
  border: 'none',
  padding: 0,
  flexShrink: 0,

  ':hover': {
    opacity: 0.85,
  },
});

export const profileImage = style({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
});

export const imageOverlay = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.35)',
  opacity: 0,

  selectors: {
    [`${profileImageButton}:hover &`]: {
      opacity: 1,
    },
  },
});

export const imageOverlayText = style({
  color: '#ffffff',
  ...themeVars.font.body_14m,
});

export const hiddenInput = style({
  display: 'none',
});

export const username = style({
  color: themeVars.color.gray_900,
  ...themeVars.font.title_28sb,
});

export const userInfo = style({
  color: themeVars.color.gray_400,
  ...themeVars.font.body_18sb,
});
