import { MOCK_POST_DETAIL } from './mock/mock-post-detail';
import {
  mockCurrentRoles,
  mockDomains,
  mockRecruitRoles,
} from './mock/mock-recruit-info';
import * as styles from './post-details.css';
import { toPostDetailHeaderProps } from './widgets/post-detail-header/adapters';
import PostDetailHeader from './widgets/post-detail-header/post-details-header';
import RecruitInfo from './widgets/recruit-info/recruit-info';

const PostDetailPage = () => {
  const res = MOCK_POST_DETAIL;
  const headerProps = toPostDetailHeaderProps(res);

  return (
    <>
      <section className={styles.headerContainer}>
        <PostDetailHeader
          {...headerProps}
          onBackClick={() => {
            window.history.back();
          }}
        />
      </section>

      <section className={styles.pageContainer}>
        <RecruitInfo
          domains={mockDomains}
          recruitPeriod={{
            startDate: '2026-03-01',
            endDate: '2026-03-15',
          }}
          homepageUrl='https://example.com'
          contact='team@example.com'
          currentRoles={mockCurrentRoles}
          recruitRoles={mockRecruitRoles}
        />
      </section>
    </>
  );
};

export default PostDetailPage;
