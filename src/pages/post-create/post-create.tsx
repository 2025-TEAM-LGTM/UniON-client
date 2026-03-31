import { ROUTE_PATH } from '@shared/constants/path';
import PageBackHeader from '@widgets/page-back-header/page-back-header';

import * as styles from './post-create.css';

const PostCreatePage = () => {
  return (
    <section className={styles.headerContainer}>
      <PageBackHeader
        title='글쓰기'
        backLabel='목록으로'
        fallbackPath={ROUTE_PATH.POSTS}
      />
    </section>
  );
};

export default PostCreatePage;
