export const ACADEMIC_STATUS_KEYS = [
  'ENROLLED',
  'LEAVE',
  'DEFERRED',
  'GRADUATED',
  'TRANSFER',
  'EXCHANGE',
  'OTHER',
] as const;

export type AcademicStatusKey = (typeof ACADEMIC_STATUS_KEYS)[number];

const ACADEMIC_STATUS_KEY_SET: ReadonlySet<string> = new Set(
  ACADEMIC_STATUS_KEYS,
);

export const isAcademicStatusKey = (
  value: string,
): value is AcademicStatusKey => {
  return (ACADEMIC_STATUS_KEY_SET as ReadonlySet<string>).has(value);
};
