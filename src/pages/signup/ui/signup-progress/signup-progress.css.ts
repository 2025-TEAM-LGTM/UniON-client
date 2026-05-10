import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '1.6rem',
  marginBottom: '3.2rem',
});

const stepBase = style({
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const stepDone = style([
  stepBase,
  {
    backgroundColor: themeVars.color.primary,
  },
]);

export const stepActive = style([
  stepBase,
  {
    backgroundColor: themeVars.color.primary,
  },
]);

export const stepIdle = style([
  stepBase,
  {
    backgroundColor: themeVars.color.gray_200,
  },
]);

export const ProgressCompletedIcon = style({
  width: '1.4rem',
  height: '1.4rem',
});
