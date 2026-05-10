import CtaButton from '@shared/ui/components/cta-button/cta-button';

import * as styles from './signup-complete.css';

interface SignupCompleteProps {
  onStart: () => void;
}

const SignupComplete = ({ onStart }: SignupCompleteProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.description}>
          설정한 프로필은 마이페이지에서 언제든 수정할 수 있어요.
        </p>
        <p className={styles.description}>
          UniON에서 특별한 팀원들을 만나보세요.
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <CtaButton color='primary' onClick={onStart}>
          시작하기
        </CtaButton>
      </div>
    </div>
  );
};

export default SignupComplete;
