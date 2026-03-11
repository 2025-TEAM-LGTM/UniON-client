import type {
  FieldRoleItemResponse,
  Option,
} from '@shared/types/filter/filter';

interface ParsedFieldRoleResponse {
  fields: Option[];
  rolesByFieldOptions: Record<number, Option[]>;
}

export const parseFieldRoleResponse = (
  items: FieldRoleItemResponse[],
): ParsedFieldRoleResponse => {
  const fieldMap = new Map<number, string>();
  const rolesByFieldOptions: Record<number, Option[]> = {};

  items.forEach((item) => {
    if (!fieldMap.has(item.fieldId)) {
      fieldMap.set(item.fieldId, item.fieldName);
    }

    if (!rolesByFieldOptions[item.fieldId]) {
      rolesByFieldOptions[item.fieldId] = [];
    }

    rolesByFieldOptions[item.fieldId].push({
      id: item.roleId,
      name: item.roleName,
    });
  });

  const fields = Array.from(fieldMap.entries()).map(([id, name]) => ({
    id,
    name,
  }));

  return { fields, rolesByFieldOptions };
};
