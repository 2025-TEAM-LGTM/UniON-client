export interface Option {
  id: number;
  name: string;
}

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

export interface FilterablePost {
  postId: number;
  domain: { id: number }[];
  recruits: { roleId: number }[];
}

export interface SearchPostsPayload {
  domainIds: number[];
  fieldId: number | null;
  roleIds: number[];
}
