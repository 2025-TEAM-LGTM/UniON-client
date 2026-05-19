import { useGetDomains } from '@entities/domain/api/use-get-domain';
import { useGetFieldRole } from '@entities/field-role/api/use-field-role';
import { createEmptyPortfolioFormValues } from '@entities/portfolio-form/model/portfolio-form';
import { useCreatePortfolio } from '@entities/portfolio-form/model/use-create-portfolio';
import { ROUTE_PATH } from '@shared/constants/path';
import { parseFieldRoleResponse } from '@shared/lib/filter/parse-field-role-response';
import { useToast } from '@shared/ui/components/toast/toast-context';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import PortfolioFormContent from '@widgets/portfolio-form/portfolio-form-content';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './create-portfolio.css';

const CreatePortfolioPage = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [formValues, setFormValues] = useState(
    createEmptyPortfolioFormValues(),
  );

  const { data: fieldRoleData } = useGetFieldRole();
  const { data: domainData } = useGetDomains();
  const { mutateAsync: createPortfolio, isPending } = useCreatePortfolio();

  const { fields: roleFields, rolesByFieldOptions } = useMemo(
    () => parseFieldRoleResponse(fieldRoleData ?? []),
    [fieldRoleData],
  );

  const domainOptions = domainData ?? [];

  const handleSubmit = async () => {
    try {
      await createPortfolio(formValues);
      toast.success('포트폴리오가 업로드되었어요.');
      navigate(ROUTE_PATH.MY_PROFILE);
    } catch {
      toast.error('포트폴리오 업로드에 실패했어요. 다시 시도해 주세요.');
    }
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
          roleFields={roleFields}
          rolesByFieldOptions={rolesByFieldOptions}
          domainOptions={domainOptions}
          onSubmit={handleSubmit}
          submitLabel={isPending ? '업로드 중...' : '업로드'}
          disabled={isPending}
        />
      </main>
    </>
  );
};

export default CreatePortfolioPage;
