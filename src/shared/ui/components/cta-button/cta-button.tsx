import type { ReactNode } from 'react';

import * as styles from './cta-button.css';

interface CtaButtonProps {
  color: 'primary' | 'gray';
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
  type?: 'button' | 'submit';
}

const CtaButton = ({
  color,
  children,
  disabled,
  onClick,
  type = 'button',
}: CtaButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styles.base({ color })}
    >
      {children}
    </button>
  );
};

export default CtaButton;
