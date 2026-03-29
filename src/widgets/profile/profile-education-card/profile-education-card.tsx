import ProfileSection from '../profile-section/profile-section';
import * as styles from './profile-education-card.css';

interface ProfileEducationCardProps {
  universityName: string;
  entranceYearLabel: string;
  academicStatusLabel: string;
}

const ProfileEducationCard = ({
  universityName,
  entranceYearLabel,
  academicStatusLabel,
}: ProfileEducationCardProps) => {
  return (
    <ProfileSection title='학력'>
      <div className={styles.educationContainer}>
        <div className={styles.educationBar} />
        <div className={styles.educationInfoContainer}>
          <p className={styles.universityName}>{universityName}</p>
          <p className={styles.academicStatusLabel}>{academicStatusLabel}</p>
          <p className={styles.entranceYearLabel}>{entranceYearLabel}</p>
        </div>
      </div>
    </ProfileSection>
  );
};

export default ProfileEducationCard;
