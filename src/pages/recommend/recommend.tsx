import Banner from '@shared/ui/components/banner/banner';
import { useState } from 'react';

import * as styles from './recommend.css';
import ApplicantSection from './widgets/applicant-section/applicant-section';
import RecommendSection from './widgets/recommend-section/recommend-section';
import type { TabLabelTypes } from './widgets/tab-bar/tab-bar';
import TabBar from './widgets/tab-bar/tab-bar';

interface RecommendPost {
  postId: number;
  postTitle: string;
}

const MOCK_RECOMMEND_POSTS: RecommendPost[] = [
  { postId: 11, postTitle: 'AI 기반 팀매칭 서비스 프론트엔드 모집' },
  { postId: 12, postTitle: '대학생 연합 해커톤 디자이너 모집' },
];

const RecommendPage = () => {
  const [activeTab, setActiveTab] = useState<TabLabelTypes>('recommend');

  return (
    <>
      <section className={styles.bannerContainer}>
        <Banner />
      </section>

      <main className={styles.pageContainer}>
        <section className={styles.tabBarContainer}>
          <TabBar activeTab={activeTab} onChangeTab={setActiveTab} />
        </section>
        <section className={styles.sectionContainer}>
          {MOCK_RECOMMEND_POSTS.map((post) => (
            <div key={post.postId}>
              {activeTab === 'recommend' ? (
                <RecommendSection postId={post.postId} />
              ) : (
                <ApplicantSection
                  postId={post.postId}
                  postTitle={post.postTitle}
                />
              )}
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default RecommendPage;
