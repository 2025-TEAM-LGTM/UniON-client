import { CheckIcon } from '@shared/assets/icons';
import type { ReactNode } from 'react';

import * as styles from './personality-toggle.css';

interface PersonalityToggleProps {
  children: ReactNode;
  selected: boolean;
  onSelect: () => void;
}

const PersonalityToggle = ({
  children,
  selected,
  onSelect,
}: PersonalityToggleProps) => {
  return (
    <button
      type='button'
      className={styles.toggle}
      aria-pressed={selected}
      onClick={onSelect}
    >
      <CheckIcon className={styles.icon} />
      {children}
    </button>
  );
};

export default PersonalityToggle;
