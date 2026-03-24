import type { FieldSkillFilterItemResponse } from '@features/members/types/member-filter-meta-response';
import type { Option } from '@shared/types/filter/filter';

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
