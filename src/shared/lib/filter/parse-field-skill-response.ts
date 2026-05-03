import type { Option } from '@shared/types/common';

interface FieldSkillFilterItem {
  field: Option;
  skills: Option[];
}

export interface ParsedFieldSkillResponse {
  fields: Option[];
  skillsByFieldOptions: Record<number, Option[]>;
}

export const parseFieldSkillResponse = (
  items: FieldSkillFilterItem[],
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
