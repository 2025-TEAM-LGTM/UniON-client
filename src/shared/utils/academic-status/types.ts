export const ACADEMIC_STATUS_KEYS = [
  'ENROLLED',
  'LEAVE',
  'DEFERRED',
  'GRADUATED',
] as const;

export type AcademicStatusKey = (typeof ACADEMIC_STATUS_KEYS)[number];
