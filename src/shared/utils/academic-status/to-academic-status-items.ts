import { getAcademicStatusMeta } from './academic-status';
import { ACADEMIC_STATUS_KEYS, type AcademicStatusKey } from './types';

export interface AcademicStatusItem {
  key: AcademicStatusKey;
  label: string;
}

export const toAcademicStatusItems = (): AcademicStatusItem[] => {
  return ACADEMIC_STATUS_KEYS.map((key) => {
    const meta = getAcademicStatusMeta(key);

    return {
      key,
      label: meta.label,
    };
  });
};
