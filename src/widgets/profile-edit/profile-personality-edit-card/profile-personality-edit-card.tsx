import PersonalityToggle from '@shared/ui/components/personality-toggle/personality-toggle';
import { getPersonalityLabelMeta } from '@shared/utils/personality/personality';
import { toPersonalityItems } from '@shared/utils/personality/to-personality-items';
import type {
  Personality,
  PersonalityValue,
} from '@shared/utils/personality/types';
import ProfileSection from '@widgets/profile/profile-section/profile-section';

import * as styles from './profile-personality-edit-card.css';

const PERSONALITY_VALUES: PersonalityValue[] = [0, 1];

interface ProfilePersonalityEditCardProps {
  personality: Personality;
  onPersonalityChange: (personality: Personality) => void;
}

const ProfilePersonalityEditCard = ({
  personality,
  onPersonalityChange,
}: ProfilePersonalityEditCardProps) => {
  const personalityItems = toPersonalityItems(personality);

  return (
    <ProfileSection title='성향 정보'>
      <div className={styles.personalityItemContainer}>
        {personalityItems.map((item) => {
          const { labels } = getPersonalityLabelMeta(item.key);

          return (
            <div key={item.key} className={styles.personalityItem}>
              <p className={styles.personalityTitle}>{item.title}</p>
              <div className={styles.optionContainer}>
                {PERSONALITY_VALUES.map((value) => (
                  <PersonalityToggle
                    key={value}
                    selected={personality[item.key] === value}
                    onSelect={() =>
                      onPersonalityChange({ ...personality, [item.key]: value })
                    }
                  >
                    {labels[value]}
                  </PersonalityToggle>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </ProfileSection>
  );
};

export default ProfilePersonalityEditCard;
