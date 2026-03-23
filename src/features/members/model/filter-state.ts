import type { PersonalityFilterValue } from '@shared/utils/personality/types';

export interface MemberFiltersState {
  fieldId: number | null;
  skillIds: number[];
  teamCultureFilters: PersonalityFilterValue[];
}

export const EMPTY_MEMBER_FILTERS: MemberFiltersState = {
  fieldId: null,
  skillIds: [],
  teamCultureFilters: [],
};
