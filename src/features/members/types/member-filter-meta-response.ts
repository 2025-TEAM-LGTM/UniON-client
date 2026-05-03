import type { SuccessResponse } from '@shared/api/types';
import type { Option } from '@shared/types/common';
import type {
  PersonalityKey,
  PersonalityValue,
} from '@shared/utils/personality/types';

export interface FieldSkillFilterItemResponse {
  field: Option;
  skills: Option[];
}

export interface FieldSkillFilterResponseData {
  items: FieldSkillFilterItemResponse[];
}

export type FieldSkillFilterResponse =
  SuccessResponse<FieldSkillFilterResponseData>;

export interface PersonalityOptionResponse {
  code: PersonalityValue;
  name: string;
}

export interface PersonalityFilterItem {
  key: PersonalityKey;
  label: string;
  first: PersonalityOptionResponse;
  second: PersonalityOptionResponse;
}

export interface PersonalityFilterResponseData {
  items: PersonalityFilterItem[];
}

export type PersonalityFilterResponse =
  SuccessResponse<PersonalityFilterResponseData>;
