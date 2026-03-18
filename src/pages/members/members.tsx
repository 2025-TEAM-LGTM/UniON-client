import Banner from '@shared/ui/components/banner/banner';

import * as styles from './members.css';

const MembersPage = () => {
  return (
    <>
      <section className={styles.bannerContainer}>
        <Banner />
      </section>

      <main className={styles.pageContainer}>
        <section className={styles.sectionHeader}>
          <p>전체 팀원 모아보기</p>
        </section>
      </main>
    </>
  );
};

export default MembersPage;
