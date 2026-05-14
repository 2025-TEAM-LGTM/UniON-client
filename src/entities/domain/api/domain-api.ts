import type { DomainResponse } from '@entities/domain/types';
import { get } from '@shared/api/http';

export const getDomains = (): Promise<DomainResponse[]> => {
  return get<DomainResponse[]>('/api/dropdown/domains');
};
