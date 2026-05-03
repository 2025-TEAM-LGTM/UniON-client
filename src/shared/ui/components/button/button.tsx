import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

import * as styles from './button.css';

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'color' | 'children'
> {
  color: 'primary' | 'dark' | 'gray' | 'disabled';
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  color,
  children,
  onClick,
  disabled = false,
  type = 'button',
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[styles.button({ color }), className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
