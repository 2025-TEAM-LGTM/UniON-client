export type MainStrength = 'PROBLEM' | 'TASK' | 'PERSONALITY';

const MAIN_STRENGTH_LABEL_MAP: Record<MainStrength, string> = {
  TROUBLE: '비슷한 문제 해결 경험자',
  TASK: '필요로 하는 업무 경험자',
  PERSONALITY: '비슷한 협업 문화 지향',
};

export const getMainStrengthLabel = (
  mainStrength?: string,
): string | undefined => {
  if (!mainStrength) return undefined;

  return MAIN_STRENGTH_LABEL_MAP[mainStrength as MainStrength] ?? mainStrength;
};
