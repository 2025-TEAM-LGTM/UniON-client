import { get } from '@shared/api/http';
import type { Option } from '@shared/types/common';

export interface GetSkillParams {
  fieldId?: number | null;
}

export const getSkills = (params?: GetSkillParams): Promise<Option[]> => {
  return get<Option[]>(
    '/api/dropdown/skills',
    params?.fieldId != null ? { fieldId: params.fieldId } : undefined,
  );
};
