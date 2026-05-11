import Chip from '@shared/ui/components/chip/chip';

import ProfileSection from '../profile-section/profile-section';
import * as styles from './profile-skill-card.css';

interface ProfileSkillCardProps {
  hardSkillNames: string[];
}

const ProfileSkillCard = ({ hardSkillNames }: ProfileSkillCardProps) => {
  return (
    <ProfileSection title='하드 스킬'>
      {hardSkillNames.length === 0 ? (
        <div className={styles.emptyContainer}>
          <p className={styles.emptyText}>등록된 하드 스킬이 없습니다.</p>
        </div>
      ) : (
        <div className={styles.skillContainer}>
          {hardSkillNames.map((skill, index) => (
            <Chip key={`${skill}-${index}`}>{skill}</Chip>
          ))}
        </div>
      )}
    </ProfileSection>
  );
};

export default ProfileSkillCard;
