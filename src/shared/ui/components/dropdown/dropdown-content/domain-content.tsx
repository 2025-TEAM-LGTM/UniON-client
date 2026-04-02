import type { Option } from '@shared/types/filter/filter';

import * as styles from './dropdown-content.css';

interface DomainContentProps {
  options: Option[];
  value: number[];
  onChange: (next: number[]) => void;
}

const toggleId = (ids: number[], id: number) =>
  ids.includes(id) ? ids.filter((v) => v !== id) : [...ids, id];

const DomainContent = ({ options, value, onChange }: DomainContentProps) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.buttonGroup}>
        {options.map((option) => {
          const selected = value.includes(option.id);

          return (
            <button
              key={option.id}
              type='button'
              aria-pressed={selected}
              className={selected ? styles.selectedButton : styles.button}
              onClick={() => onChange(toggleId(value, option.id))}
            >
              {option.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DomainContent;
