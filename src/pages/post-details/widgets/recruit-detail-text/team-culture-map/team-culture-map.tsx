import PersonalityToggle from '@shared/ui/components/personality-toggle/personality-toggle';
import { toPersonalityItems } from '@shared/utils/personality/personality';
import type { Personality } from '@shared/utils/personality/types';

import * as styles from './team-culture-map.css';

interface TeamCultureMapProps {
  teamCulture: Personality;
}
const TeamCultureMap = ({ teamCulture }: TeamCultureMapProps) => {
  const items = toPersonalityItems(teamCulture);

  if (!items.length) return null;

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div key={item.key} className={styles.item}>
          <p className={styles.itemTitle}>{item.title}</p>
          <PersonalityToggle selected disabled>
            {item.selectedLabel}
          </PersonalityToggle>
        </div>
      ))}
    </div>
  );
};

export default TeamCultureMap;
