import { Label } from '@shared/ui/components/label/label';
import WriteTextarea from '@shared/ui/components/textarea/write-textarea/write-textarea';

import * as styles from './post-detail-section.css';

interface PostDetailSectionProps {
  seeking: string;
  onChangeSeeking: (value: string) => void;
}

const placeholder =
  '팀에서 원하는 인재상과 함께, 우대하는 관련 업무 경험이나 문제 해결 경험을 구체적으로 작성해주세요.\n\n예)\n- React 기반 웹 개발 경험이 있는 분\n- 생성형 AI API를 활용해본 경험이 있는 분\n- 프로젝트 중 발생한 오류를 직접 해결해본 경험이 있는 분\n- 디자이너/기획자와 협업해본 경험이 있는 분\n- 헬스케어/교육 등 관련 활동 분야 경험 우대';

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
          placeholder={placeholder}
          required
        />
      </div>
    </section>
  );
};

export default PostDetailSection;
