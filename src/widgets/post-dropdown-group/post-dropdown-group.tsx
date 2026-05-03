import type { FiltersState } from '@features/posts/model/filters-state';
import type { Option } from '@shared/types/common';
import {
  DomainContent,
  Dropdown,
  DropdownPanel,
  DropdownTrigger,
  FieldRoleContent,
} from '@shared/ui/components/dropdown';

import * as styles from './post-dropdown-group.css';

interface PostDropdownGroupProps {
  domains: Option[];
  fields: Option[];
  rolesByFieldOptions: Record<number, Option[]>;
  value: FiltersState;
  onChange: (next: FiltersState) => void;
}

const PostDropdownGroup = ({
  domains,
  fields,
  rolesByFieldOptions,
  value,
  onChange,
}: PostDropdownGroupProps) => {
  const domainLabel =
    value.domainIds.length === 0
      ? '도메인 선택'
      : `${value.domainIds.length}개 선택`;

  const roleLabel =
    value.fieldId == null
      ? '직무 선택'
      : value.roleIds.length === 0
        ? '직무 선택'
        : `직무 ${value.roleIds.length}개 선택`;

  return (
    <div className={styles.group}>
      <div className={styles.dropdown}>
        <Dropdown>
          <DropdownTrigger placeholder='도메인 선택' label={domainLabel} />
          <DropdownPanel>
            <DomainContent
              options={domains}
              value={value.domainIds}
              onChange={(nextDomainIds) =>
                onChange({ ...value, domainIds: nextDomainIds })
              }
            />
          </DropdownPanel>
        </Dropdown>
      </div>

      <div className={styles.dropdown}>
        <Dropdown>
          <DropdownTrigger placeholder='분야/역할 선택' label={roleLabel} />
          <DropdownPanel>
            <FieldRoleContent
              fields={fields}
              rolesByFieldOptions={rolesByFieldOptions}
              fieldId={value.fieldId}
              roleIds={value.roleIds}
              onChange={(next) => onChange({ ...value, ...next })}
            />
          </DropdownPanel>
        </Dropdown>
      </div>
    </div>
  );
};

export default PostDropdownGroup;
