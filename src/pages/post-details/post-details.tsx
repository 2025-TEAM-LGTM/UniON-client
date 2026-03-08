import { MOCK_POST_DETAIL } from './mock/mock-post-detail';
import * as styles from './post-details.css';
import { toPostDetailHeaderProps } from './widgets/post-detail-header/adapter';
import PostDetailHeader from './widgets/post-detail-header/post-details-header';
import { toRecruitDetailTextProps } from './widgets/recruit-detail-text/adapter';
import RecruitDetailText from './widgets/recruit-detail-text/recruit-detail-text';
import { toRecruitInfoProps } from './widgets/recruit-info/adapter';
import RecruitInfo from './widgets/recruit-info/recruit-info';

const PostDetailPage = () => {
  const response = MOCK_POST_DETAIL;

  const headerProps = toPostDetailHeaderProps(response);
  const recruitInfoProps = toRecruitInfoProps(response);
  const recruitDetailTextProps = toRecruitDetailTextProps(response);

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
        <RecruitInfo {...recruitInfoProps} />
        <RecruitDetailText {...recruitDetailTextProps} />
      </section>
    </>
  );
};

export default PostDetailPage;
