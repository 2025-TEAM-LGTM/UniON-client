export interface Option {
  id: number;
  name: string;
}

export type DomainResponse = Option;

export interface FieldRoleItemResponse {
  roleId: number;
  roleName: string;
  fieldId: number;
  fieldName: string;
}

export interface GetFieldRoleResponse {
  status: number;
  msg: string;
  data: FieldRoleItemResponse[];
}
