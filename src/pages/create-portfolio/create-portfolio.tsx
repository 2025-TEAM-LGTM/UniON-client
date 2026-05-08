import { createEmptyPortfolioFormValues } from '@entities/portfolio-form/model/portfolio-form';
import {
  MOCK_ROLE_FIELDS,
  MOCK_ROLES_BY_FIELD_OPTIONS,
} from '@pages/post-create/mocks/mock-post-role-options';
import { ROUTE_PATH } from '@shared/constants/path';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import PortfolioFormContent from '@widgets/portfolio-form/portfolio-form-content';
import { useState } from 'react';

import * as styles from './create-portfolio.css';

const CreatePortfolioPage = () => {
  const [formValues, setFormValues] = useState(
    createEmptyPortfolioFormValues(),
  );

  const handleSubmit = () => {
    // TODO: POST /api/portfolios 연결
    console.log(formValues);
  };

  return (
    <>
      <section className={styles.headerContainer}>
        <PageBackHeader
          title='포트폴리오 작성'
          backLabel='취소'
          fallbackPath={ROUTE_PATH.MY_PROFILE}
        />
      </section>

      <main className={styles.pageContainer}>
        <PortfolioFormContent
          values={formValues}
          onChange={setFormValues}
          roleFields={MOCK_ROLE_FIELDS}
          rolesByFieldOptions={MOCK_ROLES_BY_FIELD_OPTIONS}
          onSubmit={handleSubmit}
          submitLabel='업로드'
        />
      </main>
    </>
  );
};

export default CreatePortfolioPage;
