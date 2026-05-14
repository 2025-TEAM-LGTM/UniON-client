import { toPortfolioFormValues } from '@entities/portfolio-form/model/adapters';
import { ROUTE_BUILDER, ROUTE_PATH } from '@shared/constants/path';
import type { Option } from '@shared/types/common';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import PortfolioFormContent from '@widgets/portfolio-form/portfolio-form-content';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import * as styles from './edit-portfolio.css';
import { MOCK_PORTFOLIO_DETAIL } from './mock/mock-portfolio-detail';

interface FieldRoleOptionGroup {
  field: Option;
  roles: Option[];
}

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

const EditPortfolioPage = () => {
  const { portfolioId } = useParams();

  // TODO: GET /api/portfolios/:portfolioId 연결
  const portfolioDetail = MOCK_PORTFOLIO_DETAIL;

  const [formValues, setFormValues] = useState(
    toPortfolioFormValues(portfolioDetail),
  );

  const handleSubmit = () => {
    // TODO: PATCH /api/portfolios/:portfolioId 연결
    console.log(formValues);
  };

  return (
    <>
      <section className={styles.headerContainer}>
        <PageBackHeader
          title='포트폴리오 수정'
          backLabel='취소'
          fallbackPath={
            portfolioId != null
              ? ROUTE_BUILDER.portfolioDetails(portfolioId)
              : ROUTE_PATH.MY_PROFILE
          }
        />
      </section>

      <main className={styles.pageContainer}>
        <PortfolioFormContent
          values={formValues}
          onChange={setFormValues}
          roleFields={MOCK_ROLE_FIELDS}
          rolesByFieldOptions={MOCK_ROLES_BY_FIELD_OPTIONS}
          onSubmit={handleSubmit}
          submitLabel='수정하기'
        />
      </main>
    </>
  );
};

export default EditPortfolioPage;
