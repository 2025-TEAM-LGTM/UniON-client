import { toPortfolioDetailViewModel } from '@entities/portfolio-details/model/adapters';
import PortfolioBasicInfoSection from '@pages/my-portfolio-details/widgets/portfolio-basic-info-section/portfolio-basic-info-section';
import StarTextSection from '@pages/my-portfolio-details/widgets/star-text-section/star-text-section';
import { ROUTE_BUILDER } from '@shared/constants/path';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import { useParams } from 'react-router-dom';

import * as styles from './members-portfolio.css';
import { MOCK_MEMBER_PORTFOLIO_DETAIL } from './mock/mock-member-portfolio-detail';

const MembersPortfolioDetailsPage = () => {
  const { memberId } = useParams();

  // TODO: GET /api/members/:memberId/portfolio/:portfolioId 연결
  const portfolio = toPortfolioDetailViewModel(MOCK_MEMBER_PORTFOLIO_DETAIL);

  return (
    <>
      <section className={styles.headerContainer}>
        <PageBackHeader
          title={portfolio.title}
          fallbackPath={
            memberId != null ? ROUTE_BUILDER.memberProfile(memberId) : '/'
          }
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
      </main>
    </>
  );
};

export default MembersPortfolioDetailsPage;
