import type { SuccessResponse } from '@shared/api/types';
import type { Personality } from '@shared/utils/personality/types';

export interface MemberRole {
  id: number;
  name: string;
}

export interface MemberSkill {
  id: number;
  name: string;
}

export interface MembersResponse {
  userId: number;
  username: string;
  imageUrl: string | null;
  role: MemberRole;
  hardSkills?: MemberSkill[];
  personality: Personality;
}

export interface GetMembersResponseData {
  members: MembersResponse[];
}

export type GetMembersResponse = SuccessResponse<GetMembersResponseData>;
