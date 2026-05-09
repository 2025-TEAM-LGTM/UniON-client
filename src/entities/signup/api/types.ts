import type { SuccessResponse } from '@shared/api/types';
import type { AcademicStatusKey } from '@shared/utils/academic-status/types';
import type { Personality } from '@shared/utils/personality/types';

export interface SignupRequest {
  loginId: string;
  password: string;
  email: string;
  username: string;
  birthYear: number | null;
  gender: string | null;
  mainRoleId: number | null;
  universityId: number | null;
  major: string;
  entranceYear: number | null;
  status: AcademicStatusKey | null;
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
