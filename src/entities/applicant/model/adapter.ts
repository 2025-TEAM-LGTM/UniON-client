import type { ApplicantMemberResponse } from '@entities/applicant/api/types';
import type { MemberCardModel } from '@entities/members/model/adapters';

const getHardSkills = (member: ApplicantMemberResponse): string[] =>
  (member.hardSkill ?? []).map((skill) => skill.name);

export const toApplicantMemberCardModel = (
  member: ApplicantMemberResponse,
): MemberCardModel => {
  return {
    userId: member.userId,
    profileImageUrl: member.imageUrl,
    username: member.username,
    roleName: member.role.name,
    hardSkills: getHardSkills(member),
    personality: member.personality,
  };
};

export const toApplicantMemberCardModels = (
  members: ApplicantMemberResponse[],
): MemberCardModel[] => members.map(toApplicantMemberCardModel);
