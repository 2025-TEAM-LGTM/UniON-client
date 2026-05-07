import type { Portfolio } from '@entities/portfolio/model/adapters';
import { TrashIcon } from '@shared/assets/icons';
import Button from '@shared/ui/components/button/button';
import PortfolioCard from '@widgets/portfolio-card/portfolio-card';

import * as styles from './portfolio-edit-section.css';

interface PortfolioEditSectionProps {
  portfolios: Portfolio[];
  onAddClick: () => void;
  onPortfolioClick: (portfolioId: number) => void;
  onDeleteClick: (portfolioId: number) => void;
}

const PortfolioEditSection = ({
  portfolios,
  onAddClick,
  onPortfolioClick,
  onDeleteClick,
}: PortfolioEditSectionProps) => {
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
              <div key={portfolio.portfolioId} className={styles.cardWrapper}>
                <button
                  type='button'
                  className={styles.deleteButton}
                  onClick={() => onDeleteClick(portfolio.portfolioId)}
                  aria-label={`${portfolio.title} 포트폴리오 삭제`}
                >
                  <TrashIcon />
                </button>
                <PortfolioCard
                  portfolio={portfolio}
                  onClick={onPortfolioClick}
                />
              </div>
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

export default PortfolioEditSection;
