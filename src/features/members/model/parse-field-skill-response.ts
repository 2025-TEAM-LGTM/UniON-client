import type { Option } from '@shared/types/filter/filter';

import type { FieldSkillFilterItemResponse } from '../types/member-filter-meta-response';

export interface ParsedFieldSkillResponse {
  fields: Option[];
  skillsByFieldOptions: Record<number, Option[]>;
}

export const parseFieldSkillResponse = (
  items: FieldSkillFilterItemResponse[],
): ParsedFieldSkillResponse => {
  const fields = items.map((item) => item.field);

  const skillsByFieldOptions = items.reduce<Record<number, Option[]>>(
    (acc, item) => {
      acc[item.field.id] = item.skills;
      return acc;
    },
    {},
  );

  return {
    fields,
    skillsByFieldOptions,
  };
};
