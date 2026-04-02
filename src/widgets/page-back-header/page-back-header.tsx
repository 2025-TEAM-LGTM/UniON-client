import { BackIcon } from '@shared/assets/icons';
import { useNavigate } from 'react-router-dom';

import * as styles from './page-back-header.css';

interface PageBackHeaderProps {
  title: string;
  fallbackPath: string;
  backLabel?: string;
  onBackClick?: () => void;
}

const PageBackHeader = ({
  title,
  fallbackPath,
  backLabel = '뒤로가기',
  onBackClick,
}: PageBackHeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
      return;
    }

    if (window.history.length <= 1) {
      navigate(fallbackPath, { replace: true });
      return;
    }

    navigate(-1);
  };

  return (
    <div className={styles.headerContainer}>
      <button
        type='button'
        className={styles.backButtonContainer}
        onClick={handleBackClick}
      >
        <BackIcon />
        <p>{backLabel}</p>
      </button>

      <section className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
      </section>

      <div className={styles.divider} />
    </div>
  );
};

export default PageBackHeader;
