import { style } from '@vanilla-extract/css';

export const contactContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const label = style({
  fontSize: '1.4rem',
  color: '#666',
  flexShrink: 0,
});

export const input = style({
  flex: 1,
  fontSize: '1.4rem',
  padding: '0.6rem 0.8rem',
  border: '1px solid #e0e0e0',
  borderRadius: '0.6rem',
  outline: 'none',

  ':focus': {
    borderColor: '#3DDC97',
  },
});
