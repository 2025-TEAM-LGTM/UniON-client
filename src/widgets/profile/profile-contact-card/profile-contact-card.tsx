import ProfileSection from '../profile-section/profile-section';
import * as styles from './profile-contact-card.css';

interface ProfileContactCardProps {
  email: string;
}

const ProfileContactCard = ({ email }: ProfileContactCardProps) => {
  return (
    <ProfileSection title='연락처'>
      <div className={styles.contactContainer}>
        <p className={styles.email}>E</p>
        <p className={styles.email}>{email}</p>
      </div>
    </ProfileSection>
  );
};

export default ProfileContactCard;
