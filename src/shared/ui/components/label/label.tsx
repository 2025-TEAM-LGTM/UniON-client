import * as styles from './label.css.ts';

interface LabelProps {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}

export function Label({ children, required, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={styles.fieldLabel}
      data-required={required ? 'true' : undefined}
    >
      {children}
    </label>
  );
}
