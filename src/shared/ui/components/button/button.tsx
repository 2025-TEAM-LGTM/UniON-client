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
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles.button({ color })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
