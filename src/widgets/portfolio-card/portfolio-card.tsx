import type { Portfolio } from '@entities/portfolio/model/adapters';
import { IMAGES } from '@shared/assets/images';

import * as styles from './portfolio-card.css';

interface PortfolioCardProps {
  portfolio: Portfolio;
  onClick: (portfolioId: number) => void;
}

const PortfolioCard = ({ portfolio, onClick }: PortfolioCardProps) => {
  const {
    portfolioId,
    title,
    summary,
    domainName,
    roleName,
    headcount,
    imageUrl,
  } = portfolio;

  const fallbackImageSrc = IMAGES.PORTFOLIO_THUMBNAIL;
  const displayImageSrc = imageUrl ?? fallbackImageSrc;

  const handleClick = () => {
    onClick(portfolioId);
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = fallbackImageSrc;
  };

  return (
    <div className={styles.cardContainer}>
      <button
        type='button'
        className={styles.cardButton}
        onClick={handleClick}
        aria-label={`${title} 포트폴리오 상세 보기`}
      >
        <div className={styles.imageContainer}>
          <img
            src={displayImageSrc}
            alt={`${title} 대표 이미지`}
            className={styles.image}
            onError={handleImageError}
            loading='lazy'
          />
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>{title}</p>
            <p className={styles.summary}>{summary}</p>
          </div>

          <div className={styles.infoContainer}>
            <p>{domainName}</p>
            <p>
              {roleName} · {headcount}명
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default PortfolioCard;
