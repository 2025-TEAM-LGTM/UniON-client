import { get } from '@shared/api/http';

import type { GetSkillResponse } from './types';

export const getSkills = (): Promise<GetSkillResponse> => {
  return get<GetSkillResponse>('/api/dropdown/skills');
};
