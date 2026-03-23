import type { Personality } from '@shared/utils/personality/types';

import type { MembersResponse } from '../api/types';

export interface MemberCardModel {
  userId: number;
  profileImageUrl: string | null;
  username: string;
  roleName: string;
  hardSkills: string[];
  personality: Personality;
  mainStrength?: string;
}

const getHardSkills = (member: MembersResponse): string[] =>
  (member.hardSkills ?? []).map((skill) => skill.name);

export const toMemberCardModel = (member: MembersResponse): MemberCardModel => {
  return {
    userId: member.userId,
    profileImageUrl: member.imageUrl,
    username: member.username,
    roleName: member.role.name,
    hardSkills: getHardSkills(member),
    personality: member.personality,
  };
};

export const toMemberCardModels = (
  members: MembersResponse[],
): MemberCardModel[] => members.map(toMemberCardModel);
