import { createEmptyPostFormValues } from '@entities/posts/model/post-form/post-form';
import { ROUTE_PATH } from '@shared/constants/path';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import PostFormContent from '@widgets/post-form/post-form-content';
import { useState } from 'react';

import { MOCK_DOMAIN_OPTIONS } from './mocks/mock-post-create-options';
import {
  MOCK_ALL_ROLE_OPTIONS,
  MOCK_ROLE_FIELDS,
  MOCK_ROLES_BY_FIELD_OPTIONS,
} from './mocks/mock-post-role-options';
import * as styles from './post-create.css';

const PostCreatePage = () => {
  const [formValues, setFormValues] = useState(createEmptyPostFormValues());

  return (
    <>
      <section className={styles.headerContainer}>
        <PageBackHeader
          title='글쓰기'
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
          onSubmit={() => {
            // TODO: POST /api/posts 연결
            console.log(formValues);
          }}
        />
      </main>
    </>
  );
};

export default PostCreatePage;
