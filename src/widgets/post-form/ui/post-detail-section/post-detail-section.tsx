import { Label } from '@shared/ui/components/label/label';
import WriteTextarea from '@shared/ui/components/textarea/write-textarea/write-textarea';

import * as styles from './post-detail-section.css';

interface PostDetailSectionProps {
  seeking: string;
  onChangeSeeking: (value: string) => void;
}

const PostDetailSection = ({
  seeking,
  onChangeSeeking,
}: PostDetailSectionProps) => {
  return (
    <section className={styles.sectionContainer}>
      <p className={styles.sectionTitle}>상세 정보</p>

      <div className={styles.fieldRowContainer}>
        <Label htmlFor='post-seeking' required>
          이런 분을 찾고 있어요!
        </Label>
        <WriteTextarea
          id='post-seeking'
          value={seeking}
          onChange={(event) => onChangeSeeking(event.target.value)}
          placeholder='팀에서 찾고 있는 인재사항과 요구사항을 자세히 작성해주세요.'
          required
        />
      </div>
    </section>
  );
};

export default PostDetailSection;
