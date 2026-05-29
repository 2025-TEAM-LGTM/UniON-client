import type { SuccessResponse } from '@shared/api/types';
import type { Personality } from '@shared/utils/personality/types';

export interface ApplicantMemberRole {
  id: number;
  name: string;
}

export interface ApplicantMemberSkill {
  id: number;
  name: string;
}

export interface ApplicantMemberResponse {
  userId: number;
  username: string;
  imageUrl: string | null;
  role: ApplicantMemberRole;
  hardSkills: ApplicantMemberSkill[];
  personality: Personality;
}

export interface GetApplicantsResponseData {
  members: ApplicantMemberResponse[];
}

export type GetApplicantsResponse = SuccessResponse<GetApplicantsResponseData>;
