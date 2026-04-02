import * as styles from './portfolio-basic-info-section.css';

interface PortfolioBasicInfoProps {
  summary: string;
  externUrl: string | null;
  externUrlLabel?: string;
  headcountLabel: string;
  domainLabel: string;
  roleLabel: string;
  imageUrl: string | null;
}

const PortfolioBasicInfoSection = ({
  summary,
  externUrl,
  externUrlLabel = '공식 링크 바로가기',
  headcountLabel,
  domainLabel,
  roleLabel,
  imageUrl,
}: PortfolioBasicInfoProps) => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>기본 정보</h2>

      <div className={styles.infoGrid}>
        <div className={styles.summaryRow}>
          <p className={styles.label}>프로젝트 요약</p>
          <p className={styles.valueText}>{summary}</p>
        </div>

        <div className={styles.infoRow}>
          <p className={styles.label}>함께한 팀원 수</p>
          <p className={styles.valueText}>{headcountLabel}</p>
        </div>

        <div className={styles.infoRow}>
          <p className={styles.label}>공식 링크</p>
          {externUrl ? (
            <a
              href={externUrl}
              target='_blank'
              rel='noreferrer'
              className={styles.link}
            >
              {externUrlLabel}
            </a>
          ) : (
            <p className={styles.valueText}>-</p>
          )}
        </div>

        <div className={styles.infoRow}>
          <p className={styles.label}>참여 역할</p>
          <p className={styles.valueText}>{roleLabel}</p>
        </div>

        <div className={styles.infoRow}>
          <p className={styles.label}>활동 분야</p>
          <p className={styles.valueText}>{domainLabel}</p>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt='포트폴리오 대표 이미지'
            loading='lazy'
            className={styles.image}
          />
        ) : null}
      </div>
    </section>
  );
};

export default PortfolioBasicInfoSection;
