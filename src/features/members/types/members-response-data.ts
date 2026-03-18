import type { TeamCulture } from '@shared/utils/team-culture/types';

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
  personality: TeamCulture;
}

export interface GetMembersResponse {
  status: number;
  msg: string;
  data: {
    members: MembersResponse[];
  };
}
