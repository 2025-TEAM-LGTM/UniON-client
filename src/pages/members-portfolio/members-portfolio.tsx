import { useGetMemberPortfolioDetail } from '@entities/portfolio-details/api/use-get-portfolio-details';
import { toPortfolioDetailViewModel } from '@entities/portfolio-details/model/adapters';
import PortfolioBasicInfoSection from '@pages/my-portfolio-details/widgets/portfolio-basic-info-section/portfolio-basic-info-section';
import StarTextSection from '@pages/my-portfolio-details/widgets/star-text-section/star-text-section';
import { ROUTE_BUILDER } from '@shared/constants/path';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import { useParams } from 'react-router-dom';

import * as styles from './members-portfolio.css';

const MembersPortfolioDetailsPage = () => {
  const { memberId, portfolioId } = useParams();

  const { data } = useGetMemberPortfolioDetail(memberId, portfolioId);

  const portfolio = data ? toPortfolioDetailViewModel(data) : null;

  if (portfolio == null) return null;

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
