import type { PostImageValue } from '@entities/posts/model/post-form/post-form';
import AddImageButton from '@shared/ui/components/add-image-button/add-image-button';

import * as styles from './post-image-section.css';

interface PostImageSectionProps {
  image: PostImageValue;
  onChangeImage: (next: PostImageValue) => void;
}

const PostImageSection = ({ image, onChangeImage }: PostImageSectionProps) => {
  const handleFileChange = (file: File) => {
    if (image.previewUrl != null) {
      URL.revokeObjectURL(image.previewUrl);
    }

    const previewUrl = URL.createObjectURL(file);
    onChangeImage({ file, previewUrl });
  };

  const handleRemove = () => {
    if (image.previewUrl != null) {
      URL.revokeObjectURL(image.previewUrl);
    }

    onChangeImage({ file: null, previewUrl: null });
  };

  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>대표 이미지</h2>

      <AddImageButton
        imageUrl={image.previewUrl ?? undefined}
        fileName={image.file != null ? image.file.name : undefined}
        onFileChange={handleFileChange}
        onRemove={handleRemove}
      />
    </section>
  );
};

export default PostImageSection;
