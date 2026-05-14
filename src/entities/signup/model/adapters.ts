import type { AcademicStatusKey } from '@shared/utils/academic-status/types';
import type { Personality } from '@shared/utils/personality/types';

import type { SignupRequest } from '../api/types';
import type { SignupFormValues } from './signup-form';

export const toSignupRequest = (values: SignupFormValues): SignupRequest => {
  if (
    values.mainRoleId == null ||
    values.universityId == null ||
    values.gender == null ||
    values.status == null
  ) {
    throw new Error('필수 값이 누락되었습니다.');
  }

  return {
    loginId: values.loginId.trim(),
    password: values.password.trim(),
    email: values.email.trim(),
    username: values.username.trim(),
    birthYear: Number(values.birthYear),
    gender: values.gender as SignupRequest['gender'],
    mainRoleId: values.mainRoleId,
    universityId: values.universityId,
    major: values.major.trim(),
    entranceYear: Number(values.entranceYear),
    status: values.status as AcademicStatusKey,
    personality: values.personality as Personality,
  };
};
