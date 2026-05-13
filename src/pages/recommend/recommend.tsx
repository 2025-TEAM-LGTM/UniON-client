import { useGetMyPosts } from '@entities/my-post/api/use-get-my-posts';
import Banner from '@shared/ui/components/banner/banner';
import { useState } from 'react';

import * as styles from './recommend.css';
import ApplicantSection from './widgets/applicant-section/applicant-section';
import RecommendSection from './widgets/recommend-section/recommend-section';
import type { TabLabelTypes } from './widgets/tab-bar/tab-bar';
import TabBar from './widgets/tab-bar/tab-bar';

const RecommendPage = () => {
  const [activeTab, setActiveTab] = useState<TabLabelTypes>('recommend');
  const { data, isLoading, isError } = useGetMyPosts();

  const postIds = data?.postIds ?? [];

  return (
    <>
      <section className={styles.bannerContainer}>
        <Banner />
      </section>

      <main className={styles.pageContainer}>
        <section className={styles.tabBarContainer}>
          <TabBar activeTab={activeTab} onChangeTab={setActiveTab} />
        </section>

        {isLoading && (
          <div className={styles.emptyContainer}>
            <p className={styles.emptyText}>불러오는 중...</p>
          </div>
        )}

        {isError && (
          <div className={styles.emptyContainer}>
            <p className={styles.emptyText}>
              오류가 발생했어요. 다시 시도해 주세요.
            </p>
          </div>
        )}

        {!isLoading && !isError && postIds.length === 0 && (
          <div className={styles.emptyContainer}>
            <p className={styles.emptyText}>아직 작성한 공고가 없어요.</p>
          </div>
        )}

        {!isLoading && !isError && postIds.length > 0 && (
          <section className={styles.sectionContainer}>
            {postIds.map((postId) => (
              <div key={postId}>
                {activeTab === 'recommend' ? (
                  <RecommendSection postId={postId} />
                ) : (
                  <ApplicantSection postId={postId} />
                )}
              </div>
            ))}
          </section>
        )}
      </main>
    </>
  );
};

export default RecommendPage;
