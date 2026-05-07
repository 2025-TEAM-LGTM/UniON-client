import type { SuccessResponse } from '@shared/api/types';
import type { AcademicStatusKey } from '@shared/utils/academic-status/types';
import type { Personality } from '@shared/utils/personality/types';

export interface ProfileOptionResponse {
  id: number;
  name: string;
}

export interface ProfileResponseData {
  username: string;
  imageUrl: string | null;
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

export interface UpdateProfileRequest {
  imageKey?: string;
  imageSize?: number;
  email?: string;
  universityId?: number;
  entranceYear?: number;
  status?: AcademicStatusKey;
  hardSkills?: number[];
  personality?: Personality;
}

export type UpdateProfileResponse = SuccessResponse<ProfileResponseData>;
