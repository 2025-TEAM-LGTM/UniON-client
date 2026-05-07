import { useState } from 'react';

import * as styles from './university-content.css';

export interface UniversityOption {
  id: number;
  name: string;
}

interface UniversityContentProps {
  options: UniversityOption[];
  value: number | null;
  onChange: (option: UniversityOption) => void;
  onSearchChange: (query: string) => void;
}

const UniversityContent = ({
  options,
  value,
  onChange,
  onSearchChange,
}: UniversityContentProps) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type='text'
          value={query}
          onChange={handleSearchChange}
          className={styles.searchInput}
          placeholder='학교명을 검색하세요'
        />
      </div>
      <ul className={styles.list}>
        {options.length === 0 ? (
          <li className={styles.emptyItem}>검색 결과가 없습니다.</li>
        ) : (
          options.map((option) => (
            <li key={option.id}>
              <button
                type='button'
                className={
                  value === option.id ? styles.listItemActive : styles.listItem
                }
                onClick={() => onChange(option)}
              >
                {option.name}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default UniversityContent;
