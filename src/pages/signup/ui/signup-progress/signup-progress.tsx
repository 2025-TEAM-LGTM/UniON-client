import { ProgressCompletedIcon } from '@shared/assets/icons';

import * as styles from './signup-progress.css';

interface SignupProgressProps {
  currentStep: 1 | 2 | 3;
}

const SignupProgress = ({ currentStep }: SignupProgressProps) => {
  return (
    <div className={styles.container}>
      {([1, 2, 3] as const).map((step) => {
        const isDone = step < currentStep;
        const isActive = step === currentStep;

        return (
          <div
            key={step}
            className={
              isDone
                ? styles.stepDone
                : isActive
                  ? styles.stepActive
                  : styles.stepIdle
            }
          >
            {isDone && (
              <ProgressCompletedIcon className={styles.ProgressCompletedIcon} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SignupProgress;
