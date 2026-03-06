import { MOCK_TEAM_CULTURE } from '@pages/post-details/mock/mock-post-detail';
import PersonalityToggle from '@shared/ui/components/personality-toggle/personality-toggle';

import * as styles from './team-culture-map.css';

interface TeamCultureMapProps {
  teamCulture: Record<string, number>;
}

const TeamCultureMap = ({ teamCulture }: TeamCultureMapProps) => {
  const entries = Object.entries(teamCulture).filter(
    ([key]) => MOCK_TEAM_CULTURE[key],
  );

  if (!entries.length) return null;

  return (
    <div className={styles.list}>
      {entries.map(([key, value]) => {
        const meta = MOCK_TEAM_CULTURE[key];
        const selectedLabel = meta.labels[value === 1 ? 1 : 0];

        return (
          <div key={key} className={styles.item}>
            <p className={styles.itemTitle}>{meta.title}</p>
            <PersonalityToggle selected disabled>
              {selectedLabel}
            </PersonalityToggle>
          </div>
        );
      })}
    </div>
  );
};

export default TeamCultureMap;
