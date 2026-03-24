import type { SuccessResponse } from '@shared/api/types';
import type { Option } from '@shared/types/filter/filter';

export interface FieldSkillItemResponse {
  field: Option;
  skills: Option[];
}

interface FieldSkillResponseData {
  items: FieldSkillItemResponse[];
}

export type FieldSkillResponse = SuccessResponse<FieldSkillResponseData>;

export const MOCK_FIELD_SKILL_RESPONSE: FieldSkillResponse = {
  status: 200,
  msg: 'OK',
  data: {
    items: [
      {
        field: { id: 1, name: '마케팅' },
        skills: [
          { id: 121, name: 'GA4' },
          { id: 122, name: 'Google Trends' },
          { id: 123, name: 'SEMRush' },
          { id: 124, name: 'Ahrefs' },
          { id: 125, name: 'Jasper' },
          { id: 126, name: 'Miro' },
          { id: 127, name: 'Pocket' },
          { id: 128, name: 'MailChimps' },
          { id: 129, name: 'Abitly' },
        ],
      },
      {
        field: { id: 2, name: '디자인' },
        skills: [
          { id: 201, name: 'Figma' },
          { id: 202, name: 'Photoshop' },
          { id: 203, name: 'Illustrator' },
        ],
      },
      {
        field: { id: 3, name: '개발' },
        skills: [
          { id: 301, name: 'React' },
          { id: 302, name: 'TypeScript' },
          { id: 303, name: 'Vanilla Extract' },
        ],
      },
    ],
  },
};
