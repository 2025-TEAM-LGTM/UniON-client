import type { AcademicStatusKey } from '@shared/utils/academic-status/types';
import type { Personality } from '@shared/utils/personality/types';

export interface SignupFormValues {
  // Step1
  loginId: string;
  password: string;
  email: string;
  username: string;
  birthYear: string;
  gender: string | null;
  // Step2
  mainRoleId: number | null;
  mainRoleFieldId: number | null;
  universityId: number | null;
  universityName: string;
  major: string;
  entranceYear: string;
  status: AcademicStatusKey | null;
  // Step3
  personality: Partial<Personality>;
}

export const createEmptySignupFormValues = (): SignupFormValues => ({
  loginId: '',
  password: '',
  email: '',
  username: '',
  birthYear: '',
  gender: null,
  mainRoleId: null,
  mainRoleFieldId: null,
  universityId: null,
  universityName: '',
  major: '',
  entranceYear: '',
  status: null,
  personality: {},
});
