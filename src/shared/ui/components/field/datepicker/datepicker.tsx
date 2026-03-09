import { DateIcon } from '@shared/assets/icons';
import type { ChangeEventHandler, ComponentPropsWithoutRef } from 'react';

import FieldBase from '../field-base';
import * as styles from '../field-base.css';

const digitsOnly = (s: string) => s.replace(/\D/g, '');

const formatYYYYMMDD = (digits: string) => {
  const y = digits.slice(0, 4);
  const m = digits.slice(4, 6);
  const d = digits.slice(6, 8);

  if (digits.length <= 4) return y;
  if (digits.length <= 6) return `${y}-${m}`;
  return `${y}-${m}-${d}`;
};

interface DatePickerProps extends Omit<
  ComponentPropsWithoutRef<'input'>,
  'value' | 'onChange'
> {
  value: string;
  onChange: (nextValue: string) => void;
}

const DatePicker = ({ value, onChange, ...rest }: DatePickerProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const digits = digitsOnly(e.target.value);
    onChange(formatYYYYMMDD(digits));
  };

  return (
    <FieldBase iconSlot={<DateIcon />}>
      <input
        {...rest}
        className={styles.control}
        type='text'
        value={value}
        maxLength={10}
        inputMode='numeric'
        onChange={handleChange}
        placeholder='YYYY-MM-DD'
      />
    </FieldBase>
  );
};

export default DatePicker;
