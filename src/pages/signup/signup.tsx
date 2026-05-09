// pages/signup/signup-page.tsx

import { createEmptySignupFormValues } from '@entities/signup/model/signup-form';
import { ROUTE_PATH } from '@shared/constants/path';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  SIGNUP_ROLE_FIELDS,
  SIGNUP_ROLES_BY_FIELD,
} from './mock/mock-signup-roles';
import { MOCK_UNIVERSITIES } from './mock/mock-signup-universities';
import * as styles from './signup.css';
import SignupComplete from './ui/signup-complete/signup-complete';
import SignupProgress from './ui/signup-progress/signup-progress';
import SignupStep1 from './ui/signup-step1/signup-step1';
import SignupStep2 from './ui/signup-step2/signup-step2';
import SignupStep3 from './ui/signup-step3/signup-step3';

type SignupStep = 1 | 2 | 3 | 'complete';

const SignupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<SignupStep>(1);
  const [formValues, setFormValues] = useState(createEmptySignupFormValues());
  const [isUsernameChecked, setIsUsernameChecked] = useState(false);
  const [universityOptions, setUniversityOptions] = useState(MOCK_UNIVERSITIES);

  const handleCheckUsername = () => {
    // TODO: GET /api/auth/username?q=:username 연결
    console.log('중복확인:', formValues.username);
    setIsUsernameChecked(true);
  };

  const handleSearchUniversity = (query: string) => {
    // TODO: GET /api/university?q=:query 연결
    const filtered = MOCK_UNIVERSITIES.filter((u) => u.name.includes(query));
    setUniversityOptions(filtered);
  };

  const handleSubmit = () => {
    // TODO: POST /api/auth/signup 연결
    console.log(formValues);
    setStep('complete');
  };

  const handleStart = () => {
    navigate(ROUTE_PATH.POSTS);
  };

  const handleUsernameChange = (next: typeof formValues) => {
    if (next.username !== formValues.username) {
      setIsUsernameChecked(false);
    }
    setFormValues(next);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <header className={styles.header}>
          <span className={styles.logo}>UniON</span>
        </header>

        {step !== 'complete' && <SignupProgress currentStep={step} />}
        {step === 'complete' && <SignupProgress currentStep={3} />}

        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            {step === 'complete' ? '회원가입 완료!' : '회원가입'}
          </h1>
          {step !== 'complete' && (
            <p className={styles.subtitle}>
              UniON에서 나와 핏한 팀원들을 쉽게 찾아보세요.
            </p>
          )}
        </div>

        {step === 1 && (
          <SignupStep1
            values={formValues}
            onChange={handleUsernameChange}
            isUsernameChecked={isUsernameChecked}
            onCheckUsername={handleCheckUsername}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <SignupStep2
            values={formValues}
            onChange={setFormValues}
            roleFields={SIGNUP_ROLE_FIELDS}
            rolesByFieldOptions={SIGNUP_ROLES_BY_FIELD}
            universityOptions={universityOptions}
            onSearchUniversity={handleSearchUniversity}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <SignupStep3
            values={formValues}
            onChange={setFormValues}
            onNext={handleSubmit}
          />
        )}
        {step === 'complete' && <SignupComplete onStart={handleStart} />}
      </div>
    </div>
  );
};

export default SignupPage;
