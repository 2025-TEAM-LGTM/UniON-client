import type { MemberCardModel } from '@entities/members/model/adapters';

import type { RecommendMemberResponse } from '../api/types';

const getHardSkills = (member: RecommendMemberResponse): string[] =>
  (member.hardSkill ?? []).map((skill) => skill.name);

export const toRecommendMemberCardModel = (
  member: RecommendMemberResponse,
): MemberCardModel => {
  return {
    userId: member.userId,
    profileImageUrl: member.profileImageUrl,
    username: member.username,
    roleName: member.role.name,
    hardSkills: getHardSkills(member),
    personality: member.personality,
    mainStrength: member.mainStrength,
  };
};

export const toRecommendMemberCardModels = (
  members: RecommendMemberResponse[],
): MemberCardModel[] => members.map(toRecommendMemberCardModel);
