import { toPortfolioFormValues } from '@entities/portfolio-form/model/adapters';
import {
  MOCK_ROLE_FIELDS,
  MOCK_ROLES_BY_FIELD_OPTIONS,
} from '@pages/post-create/mocks/mock-post-role-options';
import { ROUTE_BUILDER, ROUTE_PATH } from '@shared/constants/path';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import PortfolioFormContent from '@widgets/portfolio-form/portfolio-form-content';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import * as styles from './edit-portfolio.css';
import { MOCK_PORTFOLIO_DETAIL } from './mock/mock-portfolio-detail';

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
