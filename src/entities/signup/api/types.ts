import type { SuccessResponse } from '@shared/api/types';
import type { AcademicStatusKey } from '@shared/utils/academic-status/types';
import type { Personality } from '@shared/utils/personality/types';

export type Gender = 'MALE' | 'FEMALE' | 'NOT_SPECIFIED';

export interface SignupRequest {
  loginId: string;
  password: string;
  email: string;
  username: string;
  birthYear: number;
  gender: Gender;
  mainRoleId: number;
  universityId: number;
  major: string;
  entranceYear: number;
  status: AcademicStatusKey;
  personality: Personality;
}

export interface SignupResponseData {
  userId: number;
  loginId: string;
  username: string;
}

export type SignupResponse = SuccessResponse<SignupResponseData>;

export interface UsernameCheckResponseData {
  username: string;
  available: boolean;
}

export type UsernameCheckResponse = SuccessResponse<UsernameCheckResponseData>;
