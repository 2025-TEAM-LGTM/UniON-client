import type { PersonalityValue } from '@shared/utils/personality/types';

export const TEAM_CULTURE_KEYS = ['A', 'B', 'F', 'I', 'L'] as const;

export type TeamCultureKey = (typeof TEAM_CULTURE_KEYS)[number];
export type TeamCulture = Record<TeamCultureKey, PersonalityValue>;
