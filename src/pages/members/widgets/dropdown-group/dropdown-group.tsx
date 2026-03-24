import type { MemberFiltersState } from '@features/members/model/filter-state';
import type { PersonalityFilterItem } from '@features/members/types/member-filter-meta-response';
import type { Option } from '@shared/types/filter/filter';
import {
  Dropdown,
  DropdownPanel,
  DropdownTrigger,
} from '@shared/ui/components/dropdown';
import {
  FieldRoleContent,
  FieldSkillContent,
  PersonalityContent,
} from '@shared/ui/components/dropdown';

import * as styles from './dropdown-group.css';

interface DropdownGroupProps {
  roleFields: Option[];
  rolesByFieldOptions: Record<number, Option[]>;
  skillFields: Option[];
  skillsByFieldOptions: Record<number, Option[]>;
  personalityItems: PersonalityFilterItem[];
  value: MemberFiltersState;
  onChange: (next: MemberFiltersState) => void;
}

const DropdownGroup = ({
  roleFields,
  rolesByFieldOptions,
  skillFields,
  skillsByFieldOptions,
  personalityItems,
  value,
  onChange,
}: DropdownGroupProps) => {
  const roleLabel =
    value.roleFieldId == null
      ? '직무'
      : value.roleIds.length === 0
        ? '역할 선택'
        : `역할 ${value.roleIds.length}개 선택`;

  const skillLabel =
    value.skillFieldId == null
      ? '하드스킬'
      : value.skillIds.length === 0
        ? '스킬 선택'
        : `스킬 ${value.skillIds.length}개 선택`;

  const personalityLabel =
    value.personalityFilters.length === 0
      ? '성향정보'
      : `성향 ${value.personalityFilters.length}개 선택`;

  const patchFilters = (patch: Partial<MemberFiltersState>) => {
    onChange({
      ...value,
      ...patch,
    });
  };

  return (
    <div className={styles.group}>
      <div className={styles.fieldRoleDropdown}>
        <Dropdown>
          <DropdownTrigger placeholder='분야/역할 선택' label={roleLabel} />
          <DropdownPanel>
            <FieldRoleContent
              fields={roleFields}
              rolesByFieldOptions={rolesByFieldOptions}
              fieldId={value.roleFieldId}
              roleIds={value.roleIds}
              onChange={(next) =>
                patchFilters({
                  roleFieldId: next.fieldId,
                  roleIds: next.roleIds,
                })
              }
            />
          </DropdownPanel>
        </Dropdown>
      </div>

      <div className={styles.fieldSkillDropdown}>
        <Dropdown>
          <DropdownTrigger placeholder='분야/스킬 선택' label={skillLabel} />
          <DropdownPanel>
            <FieldSkillContent
              fields={skillFields}
              skillsByFieldOptions={skillsByFieldOptions}
              fieldId={value.skillFieldId}
              skillIds={value.skillIds}
              onChange={(next) =>
                patchFilters({
                  skillFieldId: next.fieldId,
                  skillIds: next.skillIds,
                })
              }
            />
          </DropdownPanel>
        </Dropdown>
      </div>

      <div className={styles.personalityDropdown}>
        <Dropdown>
          <DropdownTrigger placeholder='성향 선택' label={personalityLabel} />
          <DropdownPanel>
            <PersonalityContent
              items={personalityItems}
              value={value.personalityFilters}
              onChange={(nextPersonalityFilters) =>
                patchFilters({ personalityFilters: nextPersonalityFilters })
              }
            />
          </DropdownPanel>
        </Dropdown>
      </div>
    </div>
  );
};

export default DropdownGroup;
