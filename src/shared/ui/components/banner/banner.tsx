import * as styles from './banner.css';

const Banner = () => {
  return (
    <article className={styles.background}>
      <div className={styles.bannerContainer}>
        <p className={styles.bannerTitle}>프로필을 등록하면</p>
        <p className={styles.bannerTitle}>매칭 확률이 올라가요.</p>
        <p className={styles.bannerText}>
          UniON에서 나와 딱 맞는 팀을 찾아보세요.
        </p>
      </div>
    </article>
  );
};

export default Banner;
