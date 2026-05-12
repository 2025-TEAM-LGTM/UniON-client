export interface SkillItemResponse {
  skillId: number;
  skillName: string;
  fieldId: number;
  fieldName: string;
}

export type GetSkillResponse = SkillItemResponse[];
