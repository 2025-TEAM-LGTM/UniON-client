import type { PersonalityFilterValue } from '@shared/utils/personality/types';

export interface MemberFiltersState {
  roleFieldId: number | null;
  roleIds: number[];
  skillFieldId: number | null;
  skillIds: number[];
  personalityFilters: PersonalityFilterValue[];
}

export const EMPTY_MEMBER_FILTERS: MemberFiltersState = {
  roleFieldId: null,
  roleIds: [],
  skillFieldId: null,
  skillIds: [],
  personalityFilters: [],
};
