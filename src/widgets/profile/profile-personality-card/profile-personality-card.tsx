import Chip from '@shared/ui/components/chip/chip';
import type { PersonalityItem } from '@shared/utils/personality/to-personality-items';

import ProfileSection from '../profile-section/profile-section';
import * as styles from './profile-personality-card.css';

interface ProfilePersonalityCardProps {
  personalityItems: PersonalityItem[];
}

const ProfilePersonalityCard = ({
  personalityItems,
}: ProfilePersonalityCardProps) => {
  return (
    <ProfileSection title='성향 정보'>
      <div className={styles.personalityItemContainer}>
        {personalityItems.map((item) => (
          <div key={item.key} className={styles.personalityItem}>
            <p className={styles.personalityTitle}>{item.title}</p>
            <Chip>{item.selectedLabel}</Chip>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
};

export default ProfilePersonalityCard;
