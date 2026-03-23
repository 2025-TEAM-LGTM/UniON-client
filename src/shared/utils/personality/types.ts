export const PERSONALITY_KEYS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
] as const;

export type PersonalityKey = (typeof PERSONALITY_KEYS)[number];

export type PersonalityValue = 0 | 1;

export type Personality = Record<PersonalityKey, PersonalityValue>;

export interface PersonalityFilterValue {
  key: PersonalityKey;
  value: PersonalityValue;
}
