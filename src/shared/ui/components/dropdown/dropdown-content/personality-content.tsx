import type { PersonalityFilterItem } from '@features/members/types/member-filter-meta-response';
import type {
  PersonalityFilterValue,
  PersonalityValue,
} from '@shared/utils/personality/types';

import * as styles from './dropdown-content.css';

interface PersonalityContentProps {
  items: PersonalityFilterItem[];
  value: PersonalityFilterValue[];
  onChange: (next: PersonalityFilterValue[]) => void;
}

const getSelectedValue = (
  filters: PersonalityFilterValue[],
  key: PersonalityFilterItem['key'],
): PersonalityValue | null => {
  const selected = filters.find((filter) => filter.key === key);

  return selected ? selected.value : null;
};

const togglePersonalityValue = (
  filters: PersonalityFilterValue[],
  key: PersonalityFilterItem['key'],
  value: PersonalityValue,
): PersonalityFilterValue[] => {
  const selected = filters.find((filter) => filter.key === key);

  if (!selected) {
    return [...filters, { key, value }];
  }

  if (selected.value === value) {
    return filters.filter((filter) => filter.key !== key);
  }

  return filters.map((filter) =>
    filter.key === key ? { key, value } : filter,
  );
};

const PersonalityContent = ({
  items,
  value,
  onChange,
}: PersonalityContentProps) => {
  return (
    <div className={styles.contentContainer}>
      {items.map((item) => {
        const selectedValue = getSelectedValue(value, item.key);

        return (
          <div key={item.key} className={styles.section}>
            <p className={styles.sectionTitle}>{item.label}</p>

            <div className={styles.buttonGroup}>
              {[item.first, item.second].map((option, index) => {
                const selected = selectedValue === option.code;

                return (
                  <button
                    key={index}
                    type='button'
                    aria-pressed={selected}
                    className={selected ? styles.selectedButton : styles.button}
                    onClick={() =>
                      onChange(
                        togglePersonalityValue(value, item.key, option.code),
                      )
                    }
                  >
                    {option.name}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PersonalityContent;
