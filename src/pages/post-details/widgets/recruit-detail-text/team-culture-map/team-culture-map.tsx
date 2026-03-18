import PersonalityToggle from '@shared/ui/components/personality-toggle/personality-toggle';
import { toTeamCultureItems } from '@shared/utils/team-culture';
import type { TeamCulture } from '@shared/utils/team-culture/types';

import * as styles from './team-culture-map.css';

interface TeamCultureMapProps {
  teamCulture: TeamCulture;
}
const TeamCultureMap = ({ teamCulture }: TeamCultureMapProps) => {
  const items = toTeamCultureItems(teamCulture);

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
