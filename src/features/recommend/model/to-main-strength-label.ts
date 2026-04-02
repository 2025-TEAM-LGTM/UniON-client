import type { MemberCardModel } from '@entities/members/model/adapters';
import type { RecommendMemberResponse } from '@entities/recommend/api/types';
import { toRecommendMemberCardModels as toBaseRecommendMemberCardModels } from '@entities/recommend/model/adapter';

import { getMainStrengthLabel } from './main-strength';

const mapMainStrengthLabel = (member: MemberCardModel): MemberCardModel => ({
  ...member,
  mainStrength: getMainStrengthLabel(member.mainStrength),
});

export const toRecommendMemberCardModels = (
  members: RecommendMemberResponse[],
): MemberCardModel[] => {
  return toBaseRecommendMemberCardModels(members).map(mapMainStrengthLabel);
};
