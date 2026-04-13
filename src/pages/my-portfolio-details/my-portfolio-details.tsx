import { toPortfolioDetailViewModel } from '@entities/my-portfolio-details/model/adapters';
import { ROUTE_PATH } from '@shared/constants/path';
<<<<<<< Updated upstream
// import { ROUTE_BUILDER } from '@shared/constants/path';
import CtaButton from '@shared/ui/components/cta-button/cta-button';
import { useToast } from '@shared/ui/components/toast/toast-context';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import { useParams } from 'react-router-dom';

import { MOCK_PORTFOLIO_DETAILS_RESPONSE } from './mocks/mock-portfolio-details';
import * as styles from './my-portfolio-details.css';
import PortfolioBasicInfoSection from './widgets/portfolio-basic-info-section/portfolio-basic-info-section';
import StarTextSection from './widgets/star-text-section/star-text-section';

const MyPortfolioDetailsPage = () => {
  // const navigate = useNavigate();
  const { portfolioId } = useParams();
  const toast = useToast();

=======
import PageBackHeader from '@widgets/page-back-header/page-back-header';

import { MOCK_PORTFOLIO_DETAILS_RESPONSE } from './mocks/mock-portfolio-details';
import PortfolioBasicInfoSection from './widgets/portfolio-basic-info-section/portfolio-basic-info-section';

const MyPortfolioDetailsPage = () => {
>>>>>>> Stashed changes
  const portfolio = toPortfolioDetailViewModel(
    MOCK_PORTFOLIO_DETAILS_RESPONSE.data,
  );

<<<<<<< Updated upstream
  const handleEdit = () => {
    if (!portfolioId) {
      toast.error('잘못된 접근입니다.');
      return;
    }
    toast.error('준비중인 기능이에요!');

    // navigate(ROUTE_BUILDER.editPortfolio(portfolioId));
  };

  const handleDelete = () => {
    toast.error('준비중인 기능이에요!');
  };

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
=======
  return (
    <div>
      <PageBackHeader
        title={portfolio.title}
        fallbackPath={ROUTE_PATH.MY_PROFILE}
      />
      <PortfolioBasicInfoSection
        summary={portfolio.summary}
        externUrl={portfolio.externUrl}
        headcountLabel={portfolio.headcountLabel}
        domainLabel={portfolio.domainLabel}
        roleLabel={portfolio.roleLabel}
        imageUrl={portfolio.imageUrl}
      />
    </div>
>>>>>>> Stashed changes
  );
};

export default MyPortfolioDetailsPage;
