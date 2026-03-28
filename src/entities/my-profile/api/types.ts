import type { SuccessResponse } from '@shared/api/types';
import type { AcademicStatusKey } from '@shared/utils/academic-status/types';
import type { Personality } from '@shared/utils/personality/types';

export interface ProfileOptionResponse {
  id: number;
  name: string;
}

export interface ProfileResponseData {
  username: string;
  imageUrl: string;
  birthYear: number;
  mainRole: ProfileOptionResponse;
  email: string;
  university: ProfileOptionResponse;
  entranceYear: number;
  status: AcademicStatusKey;
  hardSkills: ProfileOptionResponse[];
  personality: Personality;
}

export type ProfileResponse = SuccessResponse<ProfileResponseData>;
