import type { FiltersState } from '@features/posts/model/filters-state';
import type { Option } from '@shared/types/filter/filter';
import {
  DomainContent,
  Dropdown,
  DropdownPanel,
  DropdownTrigger,
  FieldRoleContent,
} from '@shared/ui/components/dropdown';

import * as styles from './dropdown-group.css';

interface DropdownGroupProps {
  domains: Option[];
  fields: Option[];
  rolesByFieldOptions: Record<number, Option[]>;
  value: FiltersState;
  onChange: (next: FiltersState) => void;
}

const DropdownGroup = ({
  domains,
  fields,
  rolesByFieldOptions,
  value,
  onChange,
}: DropdownGroupProps) => {
  const domainLabel =
    value.domainIds.length === 0
      ? '도메인 선택'
      : `${value.domainIds.length}개 선택`;

  const roleLabel =
    value.fieldId == null
      ? '분야/역할 선택'
      : value.roleIds.length === 0
        ? '역할 선택'
        : `역할 ${value.roleIds.length}개 선택`;

  return (
    <div className={styles.group}>
      <div className={styles.domainDropdown}>
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

      <div className={styles.fieldRoleDropdown}>
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

export default DropdownGroup;
