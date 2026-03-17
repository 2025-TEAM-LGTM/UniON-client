import type { Option } from '@shared/types/filter/filter';

import * as styles from './dropdown-content.css';

interface FieldRoleContentProps {
  fields: Option[];
  rolesByFieldOptions: Record<number, Option[]>;
  fieldId: number | null;
  roleIds: number[];
  onChange: (next: { fieldId: number | null; roleIds: number[] }) => void;
}

const toggleId = (ids: number[], id: number) =>
  ids.includes(id) ? ids.filter((v) => v !== id) : [...ids, id];

const FieldRoleContent = ({
  fields,
  rolesByFieldOptions,
  fieldId,
  roleIds,
  onChange,
}: FieldRoleContentProps) => {
  const roleOptions =
    fieldId == null ? [] : (rolesByFieldOptions[fieldId] ?? []);

  const handleFieldClick = (nextFieldId: number) => {
    const isSameField = fieldId === nextFieldId;

    onChange({
      fieldId: isSameField ? null : nextFieldId,
      roleIds: [],
    });
  };

  const handleRoleClick = (roleId: number) => {
    onChange({
      fieldId,
      roleIds: toggleId(roleIds, roleId),
    });
  };

  return (
    <div className={styles.fieldRoleContainer}>
      <section className={styles.section}>
        <p className={styles.sectionTitle}>분야</p>
        <div className={styles.buttonGroup}>
          {fields.map((field) => {
            const selected = field.id === fieldId;

            return (
              <button
                key={field.id}
                type='button'
                aria-pressed={selected}
                className={selected ? styles.selectedButton : styles.button}
                onClick={() => handleFieldClick(field.id)}
              >
                {field.name}
              </button>
            );
          })}
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.sectionTitle}>역할</p>

        {fieldId == null ? (
          <p className={styles.helperText}>분야를 먼저 선택해 주세요.</p>
        ) : roleOptions.length === 0 ? (
          <p className={styles.helperText}>선택 가능한 역할이 없어요.</p>
        ) : (
          <div className={styles.buttonGroup}>
            {roleOptions.map((role) => {
              const selected = roleIds.includes(role.id);

              return (
                <button
                  key={role.id}
                  type='button'
                  aria-pressed={selected}
                  className={selected ? styles.selectedButton : styles.button}
                  onClick={() => handleRoleClick(role.id)}
                >
                  {role.name}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default FieldRoleContent;
