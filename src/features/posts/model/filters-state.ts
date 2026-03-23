export interface FiltersState {
  domainIds: number[];
  fieldId: number | null;
  skillIds: number[];
  roleIds: number[];
}

export const EMPTY_FILTERS: FiltersState = {
  domainIds: [],
  fieldId: null,
  skillIds: [],
  roleIds: [],
};
