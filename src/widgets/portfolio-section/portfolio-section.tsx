import type { Portfolio } from '@entities/portfolio/model/adapters';
import Button from '@shared/ui/components/button/button';
import PortfolioCard from '@widgets/portfolio-card/portfolio-card';

import * as styles from './portfolio-section.css';

interface ProfilePortfolioSectionProps {
  portfolios: Portfolio[];
  onAddClick: () => void;
  onPortfolioClick: (portfolioId: number) => void;
}

const ProfilePortfolioSection = ({
  portfolios,
  onAddClick,
  onPortfolioClick,
}: ProfilePortfolioSectionProps) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <p className={styles.headerTitle}>포트폴리오</p>
          <div className={styles.buttonContainer}>
            <Button color='primary' onClick={onAddClick}>
              추가하기
            </Button>
          </div>
        </div>

        {portfolios.length > 0 ? (
          <div className={styles.gridContainer}>
            {portfolios.map((portfolio) => (
              <PortfolioCard
                key={portfolio.portfolioId}
                portfolio={portfolio}
                onClick={onPortfolioClick}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyContainer}>
            <p className={styles.emptyText}>등록된 포트폴리오가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePortfolioSection;
