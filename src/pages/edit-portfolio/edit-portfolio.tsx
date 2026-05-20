import { useGetDomains } from '@entities/domain/api/use-get-domain';
import { useGetFieldRole } from '@entities/field-role/api/use-field-role';
import { useGetMyPortfolioDetail } from '@entities/portfolio-details/api/use-get-portfolio-details';
import type { PortfolioDetailResponse } from '@entities/portfolio-form/api/types';
import { toPortfolioFormValues } from '@entities/portfolio-form/model/adapters';
import type { PortfolioFormValues } from '@entities/portfolio-form/model/portfolio-form';
import { useUpdatePortfolio } from '@entities/portfolio-form/model/use-update-portfolio';
import { ROUTE_BUILDER, ROUTE_PATH } from '@shared/constants/path';
import { parseFieldRoleResponse } from '@shared/lib/filter/parse-field-role-response';
import type { Option } from '@shared/types/common';
import Loading from '@shared/ui/components/loading/loading';
import { useToast } from '@shared/ui/components/toast/toast-context';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import PortfolioFormContent from '@widgets/portfolio-form/portfolio-form-content';
import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as styles from './edit-portfolio.css';

interface EditPortfolioFormProps {
  portfolioId: string;
  portfolioDetail: PortfolioDetailResponse;
  roleFields: Option[];
  rolesByFieldOptions: Record<number, Option[]>;
  domainOptions: Option[];
}

const EditPortfolioForm = ({
  portfolioId,
  portfolioDetail,
  roleFields,
  rolesByFieldOptions,
  domainOptions,
}: EditPortfolioFormProps) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [formValues, setFormValues] = useState<PortfolioFormValues>(() => {
    const base = toPortfolioFormValues(portfolioDetail);

    const fieldId =
      base.roleId != null
        ? (Object.entries(rolesByFieldOptions).find(([, roles]) =>
            roles.some((r) => r.id === base.roleId),
          )?.[0] ?? null)
        : null;

    return {
      ...base,
      fieldId: fieldId != null ? Number(fieldId) : null,
    };
  });

  const { mutateAsync: updatePortfolio, isPending } =
    useUpdatePortfolio(portfolioId);

  const handleSubmit = async () => {
    try {
      await updatePortfolio(formValues);
      toast.success('포트폴리오가 수정되었어요.');
      navigate(ROUTE_BUILDER.portfolioDetails(portfolioId));
    } catch {
      toast.error('포트폴리오 수정에 실패했어요. 다시 시도해 주세요.');
    }
  };

  return (
    <PortfolioFormContent
      values={formValues}
      onChange={setFormValues}
      roleFields={roleFields}
      rolesByFieldOptions={rolesByFieldOptions}
      domainOptions={domainOptions}
      onSubmit={handleSubmit}
      submitLabel={isPending ? '수정 중...' : '수정하기'}
      disabled={isPending}
    />
  );
};

const EditPortfolioPage = () => {
  const { portfolioId } = useParams();

  const { data: fieldRoleData } = useGetFieldRole();
  const { data: domainData } = useGetDomains();
  const {
    data: portfolioDetail,
    isLoading,
    isError,
  } = useGetMyPortfolioDetail(portfolioId);

  const { fields: roleFields, rolesByFieldOptions } = useMemo(
    () => parseFieldRoleResponse(fieldRoleData ?? []),
    [fieldRoleData],
  );

  const domainOptions = domainData ?? [];

  if (isLoading) return <Loading />;

  if (isError || portfolioDetail == null || portfolioId == null) {
    return (
      <main className={styles.pageContainer}>
        <p>포트폴리오를 불러올 수 없어요.</p>
      </main>
    );
  }

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
        <EditPortfolioForm
          portfolioId={portfolioId}
          portfolioDetail={portfolioDetail}
          roleFields={roleFields}
          rolesByFieldOptions={rolesByFieldOptions}
          domainOptions={domainOptions}
        />
      </main>
    </>
  );
};

export default EditPortfolioPage;
