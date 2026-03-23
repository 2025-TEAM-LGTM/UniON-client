export interface TeamCultureFilterValue {
  key: string;
  value: 0 | 1;
}

export interface MemberFiltersState {
  fieldId: number | null;
  skillIds: number[];
  teamCultureFilters: TeamCultureFilterValue[];
}

export const EMPTY_MEMBER_FILTERS: MemberFiltersState = {
  fieldId: null,
  skillIds: [],
  teamCultureFilters: [],
};
