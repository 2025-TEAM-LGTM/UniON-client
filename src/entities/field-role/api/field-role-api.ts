import type { GetFieldRoleResponse } from '@entities/field-role/types';
import { get } from '@shared/api/http';

export interface GetFieldRoleParams {
  fieldId?: number | null;
}

export const getFieldRole = (
  params?: GetFieldRoleParams,
): Promise<GetFieldRoleResponse> => {
  return get<GetFieldRoleResponse, Record<string, unknown>>(
    '/api/dropdown/roles',
    params?.fieldId != null ? { fieldId: params.fieldId } : undefined,
  );
};
