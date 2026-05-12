import type { SkillItemResponse } from '@entities/skill/api/types';
import type { Option } from '@shared/types/common';

interface ParsedFieldSkillResponse {
  fields: Option[];
  skillsByFieldOptions: Record<number, Option[]>;
}

export const parseFieldSkillResponse = (
  items: SkillItemResponse[],
): ParsedFieldSkillResponse => {
  const fieldMap = new Map<number, string>();
  const skillsByFieldOptions: Record<number, Option[]> = {};

  items.forEach((item) => {
    if (!fieldMap.has(item.fieldId)) {
      fieldMap.set(item.fieldId, item.fieldName);
    }

    if (!skillsByFieldOptions[item.fieldId]) {
      skillsByFieldOptions[item.fieldId] = [];
    }

    skillsByFieldOptions[item.fieldId].push({
      id: item.skillId,
      name: item.skillName,
    });
  });

  const fields = Array.from(fieldMap.entries()).map(([id, name]) => ({
    id,
    name,
  }));

  return { fields, skillsByFieldOptions };
};
