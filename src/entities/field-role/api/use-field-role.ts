import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getFieldRole, type GetFieldRoleParams } from './field-role-api';

export const useGetFieldRole = (params?: GetFieldRoleParams) => {
  return useQuery({
    queryKey: queryKeys.fieldRole.list(params?.fieldId),
    queryFn: () => getFieldRole(params),
  });
};
