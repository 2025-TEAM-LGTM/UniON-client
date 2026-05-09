import * as styles from './simple-select.css';

interface SimpleSelectOption {
  value: string;
  label: string;
}

interface SimpleSelectProps {
  options: SimpleSelectOption[];
  value: string | null;
  placeholder: string;
  onChange: (value: string) => void;
}

const SimpleSelect = ({
  options,
  value,
  placeholder,
  onChange,
}: SimpleSelectProps) => {
  return (
    <div className={styles.container}>
      {value == null && <p className={styles.placeholder}>{placeholder}</p>}
      <div className={styles.optionGroup}>
        {options.map((option) => (
          <button
            key={option.value}
            type='button'
            className={
              value === option.value ? styles.optionSelected : styles.option
            }
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SimpleSelect;
