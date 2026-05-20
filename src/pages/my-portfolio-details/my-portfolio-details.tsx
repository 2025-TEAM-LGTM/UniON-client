import { useGetMyPortfolioDetail } from '@entities/portfolio-details/api/use-get-portfolio-details';
import { toPortfolioDetailViewModel } from '@entities/portfolio-details/model/adapters';
import { useDeletePortfolio } from '@entities/portfolio-form/model/use-delete-portfolio';
import { ROUTE_BUILDER, ROUTE_PATH } from '@shared/constants/path';
import CtaButton from '@shared/ui/components/cta-button/cta-button';
import { useToast } from '@shared/ui/components/toast/toast-context';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import { useNavigate, useParams } from 'react-router-dom';

import * as styles from './my-portfolio-details.css';
import PortfolioBasicInfoSection from './widgets/portfolio-basic-info-section/portfolio-basic-info-section';
import StarTextSection from './widgets/star-text-section/star-text-section';

const MyPortfolioDetailsPage = () => {
  const navigate = useNavigate();
  const { portfolioId } = useParams();
  const toast = useToast();

  const { data } = useGetMyPortfolioDetail(portfolioId);

  const { mutateAsync: deletePortfolio, isPending: isDeleting } =
    useDeletePortfolio();

  const portfolio = data ? toPortfolioDetailViewModel(data) : null;

  const handleEdit = () => {
    if (portfolioId == null) {
      toast.error('잘못된 접근입니다.');
      return;
    }

    navigate(ROUTE_BUILDER.editPortfolio(portfolioId));
  };

  const handleDelete = async () => {
    if (portfolioId == null) {
      toast.error('잘못된 접근입니다.');
      return;
    }

    try {
      await deletePortfolio(portfolioId);
      toast.success('포트폴리오가 삭제되었어요.');
      navigate(ROUTE_PATH.MY_PROFILE);
    } catch {
      toast.error('포트폴리오 삭제에 실패했어요. 다시 시도해 주세요.');
    }
  };

  if (portfolio == null) {
    return (
      <main className={styles.pageContainer}>
        포트폴리오 정보를 불러오지 못했어요.
      </main>
    );
  }
  return (
    <>
      <section className={styles.headerContainer}>
        <PageBackHeader
          title={portfolio.title}
          fallbackPath={ROUTE_PATH.MY_PROFILE}
        />
      </section>
      <main className={styles.pageContainer}>
        <PortfolioBasicInfoSection
          summary={portfolio.summary}
          externUrl={portfolio.externUrl}
          headcountLabel={portfolio.headcountLabel}
          domainLabel={portfolio.domainLabel}
          roleLabel={portfolio.roleLabel}
          imageUrl={portfolio.imageUrl}
        />
        <StarTextSection star={portfolio.star} />

        <section className={styles.bottomContainer}>
          <div className={styles.ctaContainer}>
            <CtaButton color='primary' onClick={handleEdit}>
              수정하기
            </CtaButton>
            <CtaButton
              color='gray'
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? '삭제 중...' : '삭제하기'}
            </CtaButton>
          </div>
        </section>
      </main>
    </>
  );
};

export default MyPortfolioDetailsPage;
