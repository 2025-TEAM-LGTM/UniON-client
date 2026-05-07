import { IMAGES } from '@shared/assets/images';
import { useEffect, useRef, useState } from 'react';

import * as styles from './profile-summary-edit-card.css';

interface ProfileSummaryEditCardProps {
  username: string;
  birthYearLabel: string;
  mainRoleName: string;
  profileImageUrl: string | null;
  onImageChange: (file: File) => void;
}

const ProfileSummaryEditCard = ({
  username,
  birthYearLabel,
  mainRoleName,
  profileImageUrl,
  onImageChange,
}: ProfileSummaryEditCardProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [failedImageUrl, setFailedImageUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleImageError = () => {
    if (!profileImageUrl) return;
    setFailedImageUrl(profileImageUrl);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));
    onImageChange(file);
  };

  const displayUrl =
    previewUrl ??
    (profileImageUrl !== null && failedImageUrl !== profileImageUrl
      ? profileImageUrl
      : null);

  const imageSrc = displayUrl ?? IMAGES.PROFILE;

  return (
    <section className={styles.sectionContainer}>
      <button
        type='button'
        className={styles.profileImageButton}
        onClick={() => inputRef.current?.click()}
        aria-label='프로필 이미지 변경'
      >
        <img
          src={imageSrc}
          alt={`${username} 프로필 이미지`}
          className={styles.profileImage}
          onError={handleImageError}
        />
        <div className={styles.imageOverlay}>
          <span className={styles.imageOverlayText}>변경</span>
        </div>
      </button>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        className={styles.hiddenInput}
        onChange={handleFileChange}
      />
      <p className={styles.username}>{username}</p>
      <p className={styles.userInfo}>{birthYearLabel}</p>
      <p className={styles.userInfo}>{mainRoleName}</p>
    </section>
  );
};

export default ProfileSummaryEditCard;
