export interface Option {
  id: number;
  name: string;
}

export interface DomainResponse {
  id: number;
  name: string;
}

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
