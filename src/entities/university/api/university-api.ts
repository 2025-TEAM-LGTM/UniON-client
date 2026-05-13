import { get } from '@shared/api/http';
import type { Option } from '@shared/types/common';

export const getUniversities = (query?: string): Promise<Option[]> => {
  return get<Option[]>('/api/university', query ? { q: query } : undefined);
};
