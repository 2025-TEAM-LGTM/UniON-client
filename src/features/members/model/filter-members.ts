import type { MembersResponse } from '@entities/members/api/types';
import type { PersonalityKey } from '@shared/utils/personality/types';

import type { MemberFiltersState } from './filter-state';

const matchesRole = (member: MembersResponse, roleIds: number[]): boolean => {
  if (!roleIds.length) return true;

  return roleIds.includes(member.role.id);
};

const matchesSkills = (
  member: MembersResponse,
  skillIds: number[],
): boolean => {
  if (!skillIds.length) return true;

  const memberSkillIds = (member.hardSkills ?? []).map((skill) => skill.id);

  return skillIds.every((skillId) => memberSkillIds.includes(skillId));
};

const matchesPersonality = (
  member: MembersResponse,
  personalityFilters: MemberFiltersState['personalityFilters'],
): boolean => {
  if (!personalityFilters.length) return true;

  return personalityFilters.every((filter) => {
    const key: PersonalityKey = filter.key;

    return member.personality[key] === filter.value;
  });
};

export const filterMembers = (
  members: MembersResponse[],
  filters: MemberFiltersState,
): MembersResponse[] => {
  return members.filter((member) => {
    return (
      matchesRole(member, filters.roleIds) &&
      matchesSkills(member, filters.skillIds) &&
      matchesPersonality(member, filters.personalityFilters)
    );
  });
};

// TODO: API 연결 후 수정
// - mock 제거
// - dropdown API 연결
// - filterMembers 제거 → 서버 필터링으로 변경
