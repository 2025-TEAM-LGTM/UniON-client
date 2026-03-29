import Chip from '@shared/ui/components/chip/chip';

import ProfileSection from '../profile-section/profile-section';
import * as styles from './profile-skill-card.css';

interface ProfileSkillCardProps {
  hardSkillNames: string[];
}

const ProfileSkillCard = ({ hardSkillNames }: ProfileSkillCardProps) => {
  return (
    <ProfileSection title='하드 스킬'>
      <div className={styles.skillContainer}>
        {hardSkillNames.map((skill) => (
          <Chip key={skill}>{skill}</Chip>
        ))}
      </div>
    </ProfileSection>
  );
};

export default ProfileSkillCard;
