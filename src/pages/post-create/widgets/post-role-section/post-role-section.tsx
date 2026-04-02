import type { RoleCountValue } from '@entities/posts/model/post-form/post-form';
import type { Option } from '@shared/types/filter/filter';
import Button from '@shared/ui/components/button/button';
import {
  Dropdown,
  DropdownPanel,
  DropdownTrigger,
  FieldRoleContent,
} from '@shared/ui/components/dropdown';
import Stepper from '@shared/ui/components/stepper/stepper';

import * as styles from './post-role-section.css';

interface PendingRoleInput {
  fieldId: number | null;
  roleId: number | null;
  count: number;
}

interface PostRoleSectionProps {
  title: string;
  items: RoleCountValue[];
  pending: PendingRoleInput;
  fields: Option[];
  rolesByFieldOptions: Record<number, Option[]>;
  roleOptions: Option[];
  onChangePending: (next: PendingRoleInput) => void;
  onAddItem: () => void;
  onRemoveItem: (roleId: number) => void;
}

const PostRoleSection = ({
  title,
  items,
  pending,
  fields,
  rolesByFieldOptions,
  roleOptions,
  onChangePending,
  onAddItem,
  onRemoveItem,
}: PostRoleSectionProps) => {
  const selectedRole =
    pending.roleId == null
      ? null
      : (roleOptions.find((option) => option.id === pending.roleId) ?? null);

  const roleLabel = selectedRole?.name;

  return (
    <section className={styles.sectionContainer}>
      <h3 className={styles.subSectionTitle}>{title}</h3>

      <div className={styles.roleInputRowContainer}>
        <div className={styles.dropdownContainer}>
          <Dropdown>
            <DropdownTrigger
              placeholder='역할'
              label={roleLabel || undefined}
            />
            <DropdownPanel>
              <FieldRoleContent
                fields={fields}
                rolesByFieldOptions={rolesByFieldOptions}
                fieldId={pending.fieldId}
                roleIds={pending.roleId == null ? [] : [pending.roleId]}
                singleSelect
                onChange={(next) =>
                  onChangePending({
                    ...pending,
                    fieldId: next.fieldId,
                    roleId: next.roleIds[0] ?? null,
                  })
                }
              />
            </DropdownPanel>
          </Dropdown>
        </div>

        <div className={styles.stepperContainer}>
          <Stepper
            value={pending.count}
            onChange={(nextCount) =>
              onChangePending({
                ...pending,
                count: nextCount,
              })
            }
          />
        </div>

        <Button
          color='dark'
          onClick={onAddItem}
          disabled={pending.roleId == null}
        >
          추가하기
        </Button>
      </div>

      <div className={styles.roleListContainer}>
        {items.map((item) => {
          const role = roleOptions.find((option) => option.id === item.roleId);

          return (
            <div key={item.roleId} className={styles.roleItemContainer}>
              <span className={styles.roleItemText}>
                {role?.name ?? '선택된 역할'}, {item.count}명
              </span>

              <button
                type='button'
                className={styles.removeButton}
                onClick={() => onRemoveItem(item.roleId)}
                aria-label={`${role?.name ?? '역할'} 삭제`}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PostRoleSection;
