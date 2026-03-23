import type { PersonalityFilterValue } from '@shared/utils/personality/types';

export interface MemberFiltersState {
  fieldId: number | null;
  roleIds: number[];
  skillIds: number[];
  personalityFilters: PersonalityFilterValue[];
}

export const EMPTY_MEMBER_FILTERS: MemberFiltersState = {
  fieldId: null,
  roleIds: [],
  skillIds: [],
  personalityFilters: [],
};
