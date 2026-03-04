import { MOCK_POST_DETAIL } from './mock/mock-post-detail';
import * as styles from './post-details.css';
import { toPostDetailHeaderProps } from './widgets/post-detail-header/adapters';
import PostDetailHeader from './widgets/post-detail-header/post-details-header';

const PostDetailPage = () => {
  const res = MOCK_POST_DETAIL;
  const headerProps = toPostDetailHeaderProps(res);

  return (
    <section className={styles.headerContainer}>
      <PostDetailHeader
        {...headerProps}
        onBackClick={() => {
          window.history.back();
        }}
      />
    </section>
  );
};

export default PostDetailPage;
