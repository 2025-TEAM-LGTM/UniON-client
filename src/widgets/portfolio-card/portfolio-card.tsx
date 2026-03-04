import { ThumbnailIcon } from '@shared/assets/icons';

import * as styles from './portfolio-card.css';

interface PortfolioCardProps {
  title: string;
  summary: string;
  imageUrl?: string;
  domain: string;
  role: string;
  headcount: number;
}

const PortfolioCard = ({
  title,
  summary,
  imageUrl,
  domain,
  role,
  headcount,
}: PortfolioCardProps) => {
  return (
    <article className={styles.cardContainer} aria-label={title}>
      <div className={styles.imageContainer}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${title} 대표 이미지`}
            className={styles.image}
          />
        ) : (
          <ThumbnailIcon className={styles.image} />
          // TODO: 백엔드에서 기본 이미지 제공 예정
        )}
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.summary}>{summary}</p>
        </div>

        <div className={styles.infoContainer}>
          <p>{domain}</p>
          <p>
            {role} · {headcount}명
          </p>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
