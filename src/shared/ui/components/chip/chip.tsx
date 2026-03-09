import { XIcon } from '@shared/assets/icons';
import type { ReactNode } from 'react';

import * as styles from './chip.css';

interface ChipProps {
  children: ReactNode;
  onRemove?: () => void;
}

const Chip = ({ children, onRemove }: ChipProps) => {
  return (
    <span className={styles.chip}>
      {children}
      {onRemove && (
        <button type='button' onClick={onRemove} aria-label='삭제하기'>
          <XIcon className={styles.icon} />
        </button>
      )}
    </span>
  );
};

export default Chip;
