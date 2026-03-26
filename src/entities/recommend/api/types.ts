import type { SuccessResponse } from '@shared/api/types';
import type { Personality } from '@shared/utils/personality/types';

export interface RecommendMemberRole {
  id: number;
  name: string;
}

export interface RecommendMemberSkill {
  id: number;
  name: string;
}

export interface RecommendMemberResponse {
  userId: number;
  username: string;
  profileImageUrl: string | null;
  role: RecommendMemberRole;
  hardSkill: RecommendMemberSkill[];
  personality: Personality;
  mainStrength?: string;
}

export interface GetRecommendMembersResponseData {
  title: string;
  members: RecommendMemberResponse[];
}

export type GetRecommendMembersResponse =
  SuccessResponse<GetRecommendMembersResponseData>;
