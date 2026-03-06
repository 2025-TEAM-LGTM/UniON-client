import { CheckIcon } from '@shared/assets/icons';
import type { ReactNode } from 'react';

import * as styles from './personality-toggle.css';

interface PersonalityToggleProps {
  children: ReactNode;
  selected: boolean;
  onSelect?: () => void;
  disabled?: boolean;
}

const PersonalityToggle = ({
  children,
  selected,
  onSelect,
  disabled,
}: PersonalityToggleProps) => {
  return (
    <button
      type='button'
      className={styles.toggle}
      aria-pressed={selected}
      onClick={onSelect}
      disabled={disabled}
    >
      <CheckIcon className={styles.icon} />
      {children}
    </button>
  );
};

export default PersonalityToggle;
