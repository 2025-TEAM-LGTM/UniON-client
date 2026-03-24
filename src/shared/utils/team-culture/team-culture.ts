import { getPersonalityLabelMeta } from '@shared/utils/personality/personality';

import {
  TEAM_CULTURE_KEYS,
  type TeamCulture,
  type TeamCultureKey,
} from './types';

export interface TeamCultureItem {
  key: TeamCultureKey;
  title: string;
  selectedLabel: string;
}

export const toTeamCultureItems = (
  teamCulture: TeamCulture,
): TeamCultureItem[] => {
  return TEAM_CULTURE_KEYS.map((key) => {
    const meta = getPersonalityLabelMeta(key);

    return {
      key,
      title: meta.title,
      selectedLabel: meta.labels[teamCulture[key]],
    };
  });
};
