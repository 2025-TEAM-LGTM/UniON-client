import type { PersonalityFilterResponseData } from '@features/members/types/member-filter-meta-response';
import { get } from '@shared/api/http';

export const getPersonalityFilter =
  (): Promise<PersonalityFilterResponseData> => {
    return get<PersonalityFilterResponseData>('/api/dropdown/personalities');
  };
