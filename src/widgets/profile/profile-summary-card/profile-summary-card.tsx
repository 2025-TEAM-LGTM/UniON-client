import { IMAGES } from '@shared/assets/images';
import { useState } from 'react';

import * as styles from './profile-summary-card.css';

interface ProfileSummaryCardProps {
  username: string;
  birthYearLabel: string;
  mainRoleName: string;
  profileImageUrl: string | null;
}

const ProfileSummaryCard = ({
  username,
  birthYearLabel,
  mainRoleName,
  profileImageUrl,
}: ProfileSummaryCardProps) => {
  const [failedImageUrl, setFailedImageUrl] = useState<string | null>(null);

  const handleImageError = () => {
    if (!profileImageUrl) return;
    setFailedImageUrl(profileImageUrl);
  };

  const imageSrc =
    profileImageUrl != null && failedImageUrl !== profileImageUrl
      ? profileImageUrl
      : IMAGES.PROFILE;

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.profileImageContainer}>
        <img
          src={imageSrc}
          alt={`${username} 프로필 이미지`}
          className={styles.profileImage}
          onError={handleImageError}
        />
      </div>
      <p className={styles.username}>{username}</p>
      <p className={styles.userInfo}>{birthYearLabel}</p>
      <p className={styles.userInfo}>{mainRoleName}</p>
    </section>
  );
};

export default ProfileSummaryCard;
