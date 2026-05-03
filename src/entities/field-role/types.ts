export interface FieldRoleItemResponse {
  roleId: number;
  roleName: string;
  fieldId: number;
  fieldName: string;
}

export type GetFieldRoleResponse = FieldRoleItemResponse[];
