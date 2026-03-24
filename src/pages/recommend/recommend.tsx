import Banner from '@shared/ui/components/banner/banner';

import * as styles from './recommend.css';

const RecommendPage = () => {
  return (
    <>
      <section className={styles.bannerContainer}>
        <Banner />
      </section>

      <main className={styles.pageContainer}>
        <section className={styles.sectionHeader}>
          <p>핏한 팀원 추천받기</p>
        </section>
      </main>
    </>
  );
};

export default RecommendPage;
