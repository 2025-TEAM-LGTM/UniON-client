import { StepperLeftIcon, StepperRightIcon } from '@shared/assets/icons';

import * as styles from './stepper.css';

interface StepperProps {
  value: number;
  onChange: (next: number) => void;
}

const Stepper = ({ value, onChange }: StepperProps) => {
  const changeBy = (delta: number) => {
    const next = value + delta;
    onChange(next < 1 ? 1 : next);
  };

  const handleMinus = () => changeBy(-1);
  const handlePlus = () => changeBy(1);

  return (
    <div
      role='group'
      aria-label='인원수 선택'
      className={styles.stepperContainer}
    >
      <button
        type='button'
        aria-label='감소'
        onClick={handleMinus}
        disabled={value <= 1}
        className={styles.icon}
      >
        <StepperLeftIcon />
      </button>
      <span>{value}</span>
      <button
        type='button'
        aria-label='증가'
        onClick={handlePlus}
        className={styles.icon}
      >
        <StepperRightIcon />
      </button>
    </div>
  );
};

export default Stepper;
