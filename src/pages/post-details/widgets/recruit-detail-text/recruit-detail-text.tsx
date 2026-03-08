import type { TeamCulture } from '@entities/post-details/api/types';
import ReadTextarea from '@shared/ui/components/textarea/read-textarea/read-textarea';

import * as styles from './recruit-detail-text.css';
import TeamCultureMap from './team-culture-map/team-culture-map';

export interface RecruitDetailTextProps {
  imageUrl: string | null;
  seeking: string;
  aboutUs: string;
  teamCulture: TeamCulture;
}

const RecruitDetailText = ({
  imageUrl,
  seeking,
  aboutUs,
  teamCulture,
}: RecruitDetailTextProps) => {
  return (
    <section className={styles.recruitDetailTextContainer}>
      <div className={styles.imageContainer}>
        {imageUrl && (
          <div className={styles.sectionContainer}>
            <img className={styles.image} src={imageUrl} alt='대표 이미지' />
          </div>
        )}
      </div>

      <div className={styles.sectionContainer}>
        <p className={styles.sectionTitle}>이런 분을 찾고 있어요!</p>
        <ReadTextarea text={seeking} />
      </div>

      <div className={styles.sectionContainer}>
        <p className={styles.sectionTitle}>팀 문화 및 정규 일정</p>
        <TeamCultureMap teamCulture={teamCulture} />

        <ReadTextarea text={aboutUs} />
      </div>
    </section>
  );
};

export default RecruitDetailText;
