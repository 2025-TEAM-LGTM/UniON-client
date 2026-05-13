import { useGetFieldRole } from '@entities/field-role/api/use-field-role';
import { useCheckUsername } from '@entities/signup/api/use-check-username';
import { useSignup } from '@entities/signup/api/use-signup';
import { toSignupRequest } from '@entities/signup/model/adapters';
import { createEmptySignupFormValues } from '@entities/signup/model/signup-form';
import { useGetUniversities } from '@entities/university/api/use-get-universities';
import { ROUTE_PATH } from '@shared/constants/path';
import { parseFieldRoleResponse } from '@shared/lib/filter/parse-field-role-response';
import { useToast } from '@shared/ui/components/toast/toast-context';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './signup.css';
import SignupComplete from './ui/signup-complete/signup-complete';
import SignupProgress from './ui/signup-progress/signup-progress';
import SignupStep1 from './ui/signup-step1/signup-step1';
import SignupStep2 from './ui/signup-step2/signup-step2';
import SignupStep3 from './ui/signup-step3/signup-step3';

type SignupStep = 1 | 2 | 3 | 'complete';

const SignupPage = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [step, setStep] = useState<SignupStep>(1);
  const [formValues, setFormValues] = useState(createEmptySignupFormValues());
  const [isUsernameChecked, setIsUsernameChecked] = useState(false);
  const [universityQuery, setUniversityQuery] = useState('');

  const { data: fieldRoleData } = useGetFieldRole();
  const { data: universityData } = useGetUniversities(universityQuery);
  const { mutateAsync: checkUsername, isPending: isCheckingUsername } =
    useCheckUsername();
  const { mutateAsync: signupMutate, isPending: isSigningUp } = useSignup();

  const { fields: roleFields, rolesByFieldOptions } = useMemo(
    () => parseFieldRoleResponse(fieldRoleData ?? []),
    [fieldRoleData],
  );

  const universityOptions = universityData ?? [];

  const handleCheckUsername = async () => {
    try {
      const { available } = await checkUsername(formValues.username);
      if (available) {
        toast.success('사용 가능한 닉네임이에요.');
        setIsUsernameChecked(true);
      } else {
        toast.error('이미 사용 중인 닉네임이에요.');
        setIsUsernameChecked(false);
      }
    } catch {
      toast.error('닉네임 확인 중 오류가 발생했어요. 다시 시도해 주세요.');
    }
  };

  const handleSearchUniversity = (query: string) => {
    setUniversityQuery(query);
  };

  const handleSubmit = async () => {
    try {
      const body = toSignupRequest(formValues);
      await signupMutate(body);
      setStep('complete');
    } catch {
      toast.error('회원가입 중 오류가 발생했어요. 다시 시도해 주세요.');
    }
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
            isCheckingUsername={isCheckingUsername}
            isUsernameChecked={isUsernameChecked}
            onCheckUsername={handleCheckUsername}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <SignupStep2
            values={formValues}
            onChange={setFormValues}
            roleFields={roleFields}
            rolesByFieldOptions={rolesByFieldOptions}
            universityOptions={universityOptions}
            onSearchUniversity={handleSearchUniversity}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <SignupStep3
            isSubmitting={isSigningUp}
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
