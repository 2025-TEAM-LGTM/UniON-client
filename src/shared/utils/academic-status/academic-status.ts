import type { AcademicStatusKey } from './types';

export interface AcademicStatusMeta {
  label: string;
}

const ACADEMIC_STATUS_MAP: Record<AcademicStatusKey, AcademicStatusMeta> = {
  ENROLLED: {
    label: '재학',
  },
  LEAVE: {
    label: '휴학',
  },
  DEFERRED: {
    label: '졸업 유예',
  },
  GRADUATED: {
    label: '졸업',
  },
};

export const getAcademicStatusMeta = (
  key: AcademicStatusKey,
): AcademicStatusMeta => {
  return ACADEMIC_STATUS_MAP[key];
};

export const getAcademicStatusLabel = (key: AcademicStatusKey): string => {
  return getAcademicStatusMeta(key).label;
};
