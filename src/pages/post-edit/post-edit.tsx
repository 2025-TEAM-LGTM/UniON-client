import {
  toPostDetailLeader,
  toPostFormValues,
} from '@entities/post-edit/model/adapters';
import { ROUTE_PATH } from '@shared/constants/path';
import type { Option } from '@shared/types/common';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import PostFormContent from '@widgets/post-form/post-form-content';
import { useState } from 'react';

import { MOCK_CURRENT_USER_ID, MOCK_POST_EDIT } from './mock/mock-post-edit';
import * as styles from './post-edit.css';

interface FieldRoleOptionGroup {
  field: Option;
  roles: Option[];
}

const MOCK_DOMAIN_OPTIONS: Option[] = [
  { id: 1, name: 'IT/개발' },
  { id: 2, name: '디자인' },
  { id: 3, name: '기획' },
  { id: 4, name: '마케팅' },
];

const MOCK_FIELD_ROLE_OPTION_GROUPS: FieldRoleOptionGroup[] = [
  {
    field: { id: 1, name: '기획' },
    roles: [
      { id: 101, name: 'PM' },
      { id: 102, name: '서비스 기획자' },
      { id: 103, name: '사업 기획자' },
    ],
  },
  {
    field: { id: 2, name: '디자인' },
    roles: [
      { id: 201, name: 'UX 디자이너' },
      { id: 202, name: 'UI 디자이너' },
      { id: 203, name: 'BX 디자이너' },
    ],
  },
  {
    field: { id: 3, name: '개발' },
    roles: [
      { id: 301, name: '프론트엔드 개발자' },
      { id: 302, name: '백엔드 개발자' },
      { id: 303, name: 'AI 엔지니어' },
      { id: 304, name: 'iOS 개발자' },
      { id: 305, name: 'Android 개발자' },
    ],
  },
  {
    field: { id: 4, name: '마케팅' },
    roles: [
      { id: 401, name: '콘텐츠 마케터' },
      { id: 402, name: '퍼포먼스 마케터' },
    ],
  },
];

const MOCK_ROLE_FIELDS: Option[] = MOCK_FIELD_ROLE_OPTION_GROUPS.map(
  ({ field }) => field,
);

const MOCK_ROLES_BY_FIELD_OPTIONS: Record<number, Option[]> =
  MOCK_FIELD_ROLE_OPTION_GROUPS.reduce<Record<number, Option[]>>(
    (acc, { field, roles }) => {
      acc[field.id] = roles;
      return acc;
    },
    {},
  );

const MOCK_ALL_ROLE_OPTIONS: Option[] = MOCK_FIELD_ROLE_OPTION_GROUPS.flatMap(
  ({ roles }) => roles,
);

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
