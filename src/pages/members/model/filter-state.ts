export interface MemberFiltersState {
  fieldId: number | null;
  skillIds: number[];
  teamCultureKeys: string[];
}

export const EMPTY_MEMBER_FILTERS: MemberFiltersState = {
  fieldId: null,
  skillIds: [],
  teamCultureKeys: [],
};
