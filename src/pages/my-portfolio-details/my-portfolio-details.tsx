import { useGetMyPortfolioDetail } from '@entities/portfolio-details/api/use-get-portfolio-details';
import { toPortfolioDetailViewModel } from '@entities/portfolio-details/model/adapters';
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

  const portfolio = data ? toPortfolioDetailViewModel(data) : null;

  const handleEdit = () => {
    if (portfolioId == null) {
      toast.error('잘못된 접근입니다.');
      return;
    }

    navigate(ROUTE_BUILDER.editPortfolio(portfolioId));
  };

  const handleDelete = () => {
    toast.error('준비중인 기능이에요!');
  };

  if (portfolio == null) return null;

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
            <CtaButton color='gray' onClick={handleDelete}>
              삭제하기
            </CtaButton>
          </div>
        </section>
      </main>
    </>
  );
};

export default MyPortfolioDetailsPage;
