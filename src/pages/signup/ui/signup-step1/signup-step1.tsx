import type { SignupFormValues } from '@entities/signup/model/signup-form';
import CtaButton from '@shared/ui/components/cta-button/cta-button';
import TextField from '@shared/ui/components/field/textfield/textfield';

import SimpleSelect from '../simple-select/simple-select';
import * as styles from './signup-step1.css';

const GENDER_OPTIONS = [
  { value: 'MALE', label: '남성' },
  { value: 'FEMALE', label: '여성' },
  { value: 'NOT_SPECIFIED', label: '선택 안함' },
];

interface SignupStep1Props {
  values: SignupFormValues;
  onChange: (next: SignupFormValues) => void;
  isCheckingUsername: boolean;
  isUsernameChecked: boolean;
  onCheckUsername: () => void;
  onNext: () => void;
}

const isStep1Complete = (
  values: SignupFormValues,
  isUsernameChecked: boolean,
): boolean => {
  return (
    values.loginId.trim() !== '' &&
    values.password.trim() !== '' &&
    values.email.trim() !== '' &&
    values.username.trim() !== '' &&
    isUsernameChecked &&
    values.birthYear.trim() !== '' &&
    values.gender != null
  );
};

const SignupStep1 = ({
  values,
  onChange,
  isUsernameChecked,
  isCheckingUsername,
  onCheckUsername,
  onNext,
}: SignupStep1Props) => {
  const isComplete = isStep1Complete(values, isUsernameChecked);

  return (
    <div className={styles.container}>
      <div className={styles.fieldList}>
        <TextField
          value={values.loginId}
          onChange={(e) => onChange({ ...values, loginId: e.target.value })}
          placeholder='이메일'
        />
        <TextField
          value={values.password}
          onChange={(e) => onChange({ ...values, password: e.target.value })}
          placeholder='비밀번호'
          type='password'
        />
        <div className={styles.usernameRow}>
          <TextField
            value={values.username}
            onChange={(e) => {
              onChange({ ...values, username: e.target.value });
            }}
            placeholder='닉네임'
          />
          <button
            className={styles.checkButton}
            disabled={values.username.trim() === '' || isCheckingUsername}
            onClick={onCheckUsername}
          >
            중복확인
          </button>
        </div>
        <TextField
          value={values.email}
          onChange={(e) => onChange({ ...values, email: e.target.value })}
          placeholder='연락용 이메일'
          type='email'
        />
        <TextField
          value={values.birthYear}
          onChange={(e) => onChange({ ...values, birthYear: e.target.value })}
          placeholder='출생연도 (예: 2000)'
          type='number'
        />
        <SimpleSelect
          options={GENDER_OPTIONS}
          value={values.gender}
          placeholder='성별'
          onChange={(gender) => onChange({ ...values, gender })}
        />
      </div>

      <div className={styles.buttonContainer}>
        <CtaButton
          color={isComplete ? 'primary' : 'gray'}
          disabled={!isComplete}
          onClick={onNext}
        >
          다음
        </CtaButton>
      </div>
    </div>
  );
};

export default SignupStep1;
