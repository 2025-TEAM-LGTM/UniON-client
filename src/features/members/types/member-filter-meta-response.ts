import type { SuccessResponse } from '@shared/api/types';
import type { Option } from '@shared/types/filter/filter';
import type {
  PersonalityKey,
  PersonalityValue,
} from '@shared/utils/personality/types';

export interface FieldSkillFilterItem {
  field: Option;
  skills: Option[];
}

export interface FieldSkillFilterResponseData {
  items: FieldSkillFilterItem[];
}

export type FieldSkillFilterResponse =
  SuccessResponse<FieldSkillFilterResponseData>;

export interface PersonalityOption {
  code: PersonalityValue;
  name: string;
}

export interface PersonalityFilterItem {
  key: PersonalityKey;
  label: string;
  first: PersonalityOption;
  second: PersonalityOption;
}

export interface PersonalityFilterResponseData {
  items: PersonalityFilterItem[];
}

export type PersonalityFilterResponse =
  SuccessResponse<PersonalityFilterResponseData>;
