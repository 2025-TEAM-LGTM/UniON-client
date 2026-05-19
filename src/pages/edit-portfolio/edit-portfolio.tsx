import { useGetDomains } from '@entities/domain/api/use-get-domain';
import { useGetFieldRole } from '@entities/field-role/api/use-field-role';
import { toPortfolioFormValues } from '@entities/portfolio-form/model/adapters';
import { ROUTE_BUILDER, ROUTE_PATH } from '@shared/constants/path';
import { parseFieldRoleResponse } from '@shared/lib/filter/parse-field-role-response';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import PortfolioFormContent from '@widgets/portfolio-form/portfolio-form-content';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as styles from './edit-portfolio.css';
import { MOCK_PORTFOLIO_DETAIL } from './mock/mock-portfolio-detail';

const EditPortfolioPage = () => {
  const { portfolioId } = useParams();

  const { data: fieldRoleData } = useGetFieldRole();
  const { data: domainData } = useGetDomains();

  const { fields: roleFields, rolesByFieldOptions } = useMemo(
    () => parseFieldRoleResponse(fieldRoleData ?? []),
    [fieldRoleData],
  );

  const domainOptions = domainData ?? [];

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
          roleFields={roleFields}
          rolesByFieldOptions={rolesByFieldOptions}
          domainOptions={domainOptions}
          onSubmit={handleSubmit}
          submitLabel='수정하기'
        />
      </main>
    </>
  );
};

export default EditPortfolioPage;
