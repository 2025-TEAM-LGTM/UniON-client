import type { Option } from '@shared/types/common';

import * as styles from './dropdown-content.css';

interface FieldSkillContentProps {
  fields: Option[];
  skillsByFieldOptions: Record<number, Option[]>;
  fieldId: number | null;
  skillIds: number[];
  onChange: (next: { fieldId: number | null; skillIds: number[] }) => void;
}

const toggleId = (ids: number[], id: number) =>
  ids.includes(id) ? ids.filter((v) => v !== id) : [...ids, id];

const FieldSkillContent = ({
  fields,
  skillsByFieldOptions,
  fieldId,
  skillIds,
  onChange,
}: FieldSkillContentProps) => {
  const skillOptions =
    fieldId == null ? [] : (skillsByFieldOptions[fieldId] ?? []);

  const handleFieldClick = (nextFieldId: number) => {
    const isSameField = fieldId === nextFieldId;

    onChange({
      fieldId: isSameField ? null : nextFieldId,
      skillIds: [],
    });
  };

  const handleSkillClick = (skillId: number) => {
    onChange({
      fieldId,
      skillIds: toggleId(skillIds, skillId),
    });
  };

  return (
    <div className={styles.contentContainer}>
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
        <p className={styles.sectionTitle}>하드스킬</p>

        {fieldId == null ? (
          <p className={styles.helperText}>분야를 먼저 선택해 주세요.</p>
        ) : skillOptions.length === 0 ? (
          <p className={styles.helperText}>선택 가능한 하드스킬이 없어요.</p>
        ) : (
          <div className={styles.buttonGroup}>
            {skillOptions.map((skill) => {
              const selected = skillIds.includes(skill.id);

              return (
                <button
                  key={skill.id}
                  type='button'
                  aria-pressed={selected}
                  className={selected ? styles.selectedButton : styles.button}
                  onClick={() => handleSkillClick(skill.id)}
                >
                  {skill.name}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default FieldSkillContent;
