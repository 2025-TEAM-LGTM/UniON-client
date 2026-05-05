import {
  toPostDetailLeader,
  toPostFormValues,
} from '@entities/post-edit/model/adapters';
import { MOCK_DOMAIN_OPTIONS } from '@pages/post-create/mocks/mock-post-create-options';
import {
  MOCK_ALL_ROLE_OPTIONS,
  MOCK_ROLE_FIELDS,
  MOCK_ROLES_BY_FIELD_OPTIONS,
} from '@pages/post-create/mocks/mock-post-role-options';
import { ROUTE_PATH } from '@shared/constants/path';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import PostFormContent from '@widgets/post-form/post-form-content';
import { useState } from 'react';

import * as styles from './/post-edit.css';
import { MOCK_CURRENT_USER_ID, MOCK_POST_EDIT } from './mock/mock-post-edit';

const PostEditPage = () => {
  // TODO: useParams 등으로 postId 받아서 GET /api/posts/:postId 호출
  const postDetail = MOCK_POST_EDIT;
  const currentUserId = MOCK_CURRENT_USER_ID;

  const leader = toPostDetailLeader(postDetail);
  const isAuthor = leader.userId === currentUserId;

  const [formValues, setFormValues] = useState(toPostFormValues(postDetail));

  if (!isAuthor) {
    // TODO: 권한 없음 처리 - 리다이렉트 또는 에러 페이지
    return null;
  }

  const handleSubmit = () => {
    // TODO: PATCH /api/posts/:postId 연결
    console.log(formValues);
  };

  return (
    <>
      <section className={styles.headerContainer}>
        <PageBackHeader
          title='공고 수정'
          backLabel='목록으로'
          fallbackPath={ROUTE_PATH.POSTS}
        />
      </section>

      <main className={styles.pageContainer}>
        <PostFormContent
          values={formValues}
          onChange={setFormValues}
          domainOptions={MOCK_DOMAIN_OPTIONS}
          roleFields={MOCK_ROLE_FIELDS}
          rolesByFieldOptions={MOCK_ROLES_BY_FIELD_OPTIONS}
          allRoleOptions={MOCK_ALL_ROLE_OPTIONS}
          onSubmit={handleSubmit}
          submitLabel='수정하기'
        />
      </main>
    </>
  );
};

export default PostEditPage;
