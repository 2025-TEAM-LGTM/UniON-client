import { getPersonalityLabelMeta } from './personality';
import {
  type Personality,
  PERSONALITY_KEYS,
  type PersonalityKey,
} from './types';

export interface PersonalityItem {
  key: PersonalityKey;
  title: string;
  selectedLabel: string;
}

export const toPersonalityItems = (
  personality: Personality,
): PersonalityItem[] => {
  return PERSONALITY_KEYS.map((key) => {
    const meta = getPersonalityLabelMeta(key);

    return {
      key,
      title: meta.title,
      selectedLabel: meta.labels[personality[key]],
    };
  });
};
