import { UploadIcon } from '@shared/assets/icons';
import { XIcon } from '@shared/assets/icons';
import { useRef } from 'react';

import * as styles from './add-image-button.css';

interface AddImageButtonProps {
  imageUrl?: string;
  fileName?: string;
  onFileChange: (file: File) => void;
  onRemove: () => void;
}

const AddImageButton = ({
  imageUrl,
  fileName,
  onFileChange,
  onRemove,
}: AddImageButtonProps) => {
  const hasImage = Boolean(imageUrl);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    onFileChange(file);
    e.target.value = '';
  };

  return (
    <div className={styles.contentContainer}>
      <button
        type='button'
        aria-label={hasImage ? '첨부된 사진 변경' : '사진 첨부'}
        onClick={handleButtonClick}
        className={styles.button}
      >
        <UploadIcon />
        <p>대표 이미지를 첨부해주세요.</p>
      </button>

      {hasImage ? (
        <div className={styles.addedItemContainer}>
          <div className={styles.addedImageContainer}>
            <img
              src={imageUrl}
              alt='첨부된 이미지'
              className={styles.addedImage}
            />
          </div>
          <div className={styles.fileNameContainer}>
            <p className={styles.fileNameText}>{fileName}</p>
            <button
              type='button'
              onClick={onRemove}
              aria-label='첨부 이미지 삭제'
            >
              <XIcon />
            </button>
          </div>
        </div>
      ) : null}

      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        onChange={handleChange}
        tabIndex={-1}
        aria-hidden='true'
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default AddImageButton;
