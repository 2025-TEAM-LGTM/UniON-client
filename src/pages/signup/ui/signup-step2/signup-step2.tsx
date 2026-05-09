import type { SignupFormValues } from '@entities/signup/model/signup-form';
import type { Option } from '@shared/types/common';
import CtaButton from '@shared/ui/components/cta-button/cta-button';
import {
  Dropdown,
  DropdownPanel,
  DropdownTrigger,
  FieldRoleContent,
  UniversityContent,
} from '@shared/ui/components/dropdown';
import type { UniversityOption } from '@shared/ui/components/dropdown/dropdown-content/university-content';
import TextField from '@shared/ui/components/field/textfield/textfield';
import { getAcademicStatusLabel } from '@shared/utils/academic-status/academic-status';
import { ACADEMIC_STATUS_KEYS } from '@shared/utils/academic-status/types';

import SimpleSelect from '../simple-select/simple-select';
import * as styles from './signup-step2.css';

const ACADEMIC_STATUS_OPTIONS = ACADEMIC_STATUS_KEYS.map((key) => ({
  value: key,
  label: getAcademicStatusLabel(key),
}));

interface SignupStep2Props {
  values: SignupFormValues;
  onChange: (next: SignupFormValues) => void;
  roleFields: Option[];
  rolesByFieldOptions: Record<number, Option[]>;
  universityOptions: UniversityOption[];
  onSearchUniversity: (query: string) => void;
  onNext: () => void;
}

const isStep2Complete = (values: SignupFormValues): boolean => {
  return (
    values.mainRoleId != null &&
    values.universityId != null &&
    values.major.trim() !== '' &&
    values.entranceYear.trim() !== '' &&
    values.status != null
  );
};

const SignupStep2 = ({
  values,
  onChange,
  roleFields,
  rolesByFieldOptions,
  universityOptions,
  onSearchUniversity,
  onNext,
}: SignupStep2Props) => {
  const isComplete = isStep2Complete(values);

  const selectedRole =
    values.mainRoleFieldId != null && values.mainRoleId != null
      ? rolesByFieldOptions[values.mainRoleFieldId]?.find(
          (r) => r.id === values.mainRoleId,
        )
      : null;

  return (
    <div className={styles.container}>
      <div className={styles.fieldList}>
        <Dropdown>
          <DropdownTrigger
            placeholder='직군'
            label={selectedRole != null ? selectedRole.name : undefined}
          />
          <DropdownPanel>
            <FieldRoleContent
              fields={roleFields}
              rolesByFieldOptions={rolesByFieldOptions}
              fieldId={values.mainRoleFieldId}
              roleIds={values.mainRoleId != null ? [values.mainRoleId] : []}
              onChange={(next) =>
                onChange({
                  ...values,
                  mainRoleFieldId: next.fieldId,
                  mainRoleId: next.roleIds[0] != null ? next.roleIds[0] : null,
                })
              }
              singleSelect
            />
          </DropdownPanel>
        </Dropdown>

        <Dropdown>
          <DropdownTrigger
            placeholder='학교'
            label={
              values.universityName !== '' ? values.universityName : undefined
            }
          />
          <DropdownPanel>
            <UniversityContent
              options={universityOptions}
              value={values.universityId}
              onChange={(option) =>
                onChange({
                  ...values,
                  universityId: option.id,
                  universityName: option.name,
                })
              }
              onSearchChange={onSearchUniversity}
            />
          </DropdownPanel>
        </Dropdown>

        <TextField
          value={values.major}
          onChange={(e) => onChange({ ...values, major: e.target.value })}
          placeholder='전공'
        />

        <TextField
          value={values.entranceYear}
          onChange={(e) =>
            onChange({ ...values, entranceYear: e.target.value })
          }
          placeholder='입학연도 (예: 2022)'
          type='number'
        />

        <SimpleSelect
          options={ACADEMIC_STATUS_OPTIONS}
          value={values.status}
          placeholder='재휴학 / 졸업 여부'
          onChange={(status) =>
            onChange({
              ...values,
              status: status as SignupFormValues['status'],
            })
          }
        />
      </div>

      <div className={styles.buttonContainer}>
        <CtaButton
          color={isComplete ? 'primary' : 'gray'}
          disabled={!isComplete}
          onClick={onNext}
        >
          다음
        </CtaButton>
      </div>
    </div>
  );
};

export default SignupStep2;
