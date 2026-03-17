export interface FiltersState {
  domainIds: number[];
  fieldId: number | null;
  roleIds: number[];
}

export const EMPTY_FILTERS: FiltersState = {
  domainIds: [],
  fieldId: null,
  roleIds: [],
};
