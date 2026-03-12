import { ArrowIcon } from '@shared/assets/icons';
import type { ReactNode } from 'react';

import { useDropdownContext } from './dropdown-context';
import * as styles from './dropdown-trigger.css';

interface DropdownTriggerProps {
  label?: ReactNode;
  placeholder?: ReactNode;
}

const DropdownTrigger = ({ label, placeholder }: DropdownTriggerProps) => {
  const { open, toggle, triggerId, panelId, triggerRef } = useDropdownContext();

  return (
    <button
      ref={triggerRef}
      id={triggerId}
      type='button'
      className={styles.base}
      aria-haspopup='dialog'
      aria-expanded={open}
      aria-controls={panelId}
      onClick={toggle}
    >
      <span className={label ? styles.label : styles.placeholder}>
        {label || placeholder}
      </span>
      <div className={styles.iconSlot}>
        <ArrowIcon />
      </div>
    </button>
  );
};

export default DropdownTrigger;
