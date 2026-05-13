import { useLogin } from '@entities/login/api/use-login';
import { ROUTE_PATH } from '@shared/constants/path';
import CtaButton from '@shared/ui/components/cta-button/cta-button';
import TextField from '@shared/ui/components/field/textfield/textfield';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './login.css';

interface LoginFormValues {
  loginId: string;
  password: string;
}

const createEmptyLoginFormValues = (): LoginFormValues => ({
  loginId: '',
  password: '',
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<LoginFormValues>(
    createEmptyLoginFormValues(),
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutateAsync: loginMutate, isPending } = useLogin();

  const handleSubmit = async () => {
    setErrorMessage(null);

    try {
      await loginMutate(formValues);
      navigate(ROUTE_PATH.POSTS);
    } catch (error) {
      if (error instanceof Error && error.message === 'UNAUTHORIZED') {
        setErrorMessage('이메일 또는 비밀번호를 확인해주세요.');
      } else {
        setErrorMessage('서버 오류가 발생했어요. 잠시 후 다시 시도해 주세요.');
      }
    }
  };

  const handleClickSignUp = () => {
    navigate(ROUTE_PATH.SIGN_UP);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <header className={styles.header}>
          <span className={styles.logo}>UniON</span>
        </header>

        <div className={styles.formContainer}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>로그인</p>
            <p className={styles.subtitle}>
              UniON에서 나와 핏한 팀원들을 쉽게 찾아보세요.
            </p>
          </div>

          <div className={styles.fieldContainer}>
            <div className={styles.fieldWrapper}>
              <TextField
                name='loginId'
                value={formValues.loginId}
                onChange={(e) =>
                  setFormValues({ ...formValues, loginId: e.target.value })
                }
                placeholder='이메일'
              />
              {errorMessage != null && (
                <p className={styles.errorText}>{errorMessage}</p>
              )}
              <TextField
                name='password'
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({ ...formValues, password: e.target.value })
                }
                placeholder='비밀번호'
                type='password'
              />
            </div>

            <CtaButton
              color='primary'
              onClick={handleSubmit}
              type='submit'
              disabled={isPending}
            >
              {isPending ? '로그인 중...' : '로그인'}
            </CtaButton>
          </div>

          <div className={styles.divider} />

          <div className={styles.signUpContainer}>
            <p className={styles.signUpText}>계정이 없으신가요?</p>
            <CtaButton color='gray' onClick={handleClickSignUp} type='button'>
              회원가입
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
