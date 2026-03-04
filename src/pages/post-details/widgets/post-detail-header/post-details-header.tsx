import { BackIcon } from '@shared/assets/icons';
import { IMAGES } from '@shared/assets/images';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './post-details-header.css';

export interface PostDetailsHeaderProps {
  title: string;
  username: string;
  userImageUrl?: string | null;
  dday: number;
  onBackClick: () => void;
}

const PostDetailHeader = ({
  title,
  username,
  userImageUrl,
  dday,
  onBackClick,
}: PostDetailsHeaderProps) => {
  const [profileImageUrl, setProfileImageUrl] = useState<string>(
    userImageUrl ?? IMAGES.PROFILE,
  );

  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) onBackClick();
    navigate(-1);
  };

  const handleProfileImageError = () => {
    setProfileImageUrl(IMAGES.PROFILE);
  };

  return (
    <div className={styles.headerContainer}>
      <button className={styles.backButtonContainer} onClick={handleBackClick}>
        <BackIcon />
        <p>목록으로</p>
      </button>

      <section className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.dday}>D-{dday}</p>
      </section>

      <section className={styles.profileContainer}>
        {userImageUrl ? (
          <img
            src={userImageUrl}
            alt={`${username} 프로필 이미지`}
            className={styles.profileImage}
          />
        ) : (
          <img
            src={profileImageUrl}
            onError={handleProfileImageError}
            alt={`${username} 프로필 이미지`}
            className={styles.profileImage}
          />
        )}
        <p className={styles.username}>{username}</p>
      </section>

      <div className={styles.divider} />
    </div>
  );
};

export default PostDetailHeader;
