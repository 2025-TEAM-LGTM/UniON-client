import { style } from '@vanilla-extract/css';

export const group = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'flex-start',
  marginBottom: '0.5rem',
});

const baseDropdown = {
  width: '22rem',
  flexShrink: 0,
} as const;

export const personalityDropdown = style({
  ...baseDropdown,
});

export const fieldRoleDropdown = style({
  ...baseDropdown,
});

export const fieldSkillDropdown = style({
  ...baseDropdown,
});
