import { toPortfolios } from '@entities/portfolio/model/adapters';
import { toProfileViewModel } from '@entities/profile/model/adapters';
import { ROUTE_BUILDER } from '@shared/constants/path';
import ProfilePortfolioSection from '@widgets/portfolio-section/portfolio-section';
import ProfileContactCard from '@widgets/profile/profile-contact-card/profile-contact-card';
import ProfileEducationCard from '@widgets/profile/profile-education-card/profile-education-card';
import ProfileFormLayout from '@widgets/profile/profile-form-layout/profile-form-layout';
import ProfilePersonalityCard from '@widgets/profile/profile-personality-card/profile-personality-card';
import ProfileSkillCard from '@widgets/profile/profile-skill-card/profile-skill-card';
import ProfileSummaryCard from '@widgets/profile/profile-summary-card/profile-summary-card';
import { useNavigate, useParams } from 'react-router-dom';

import * as styles from './member-profile.css';
import { MOCK_MEMBER_PORTFOLIOS_RESPONSE } from './mock/mock-member-portfolios';
import { MOCK_MEMBER_PROFILE_RESPONSE } from './mock/mock-member-profile';

const MembersProfilePage = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();

  // TODO: GET /api/members/:memberId/profile 연결
  const profile = toProfileViewModel(MOCK_MEMBER_PROFILE_RESPONSE.data);

  // TODO: GET /api/members/:memberId/portfolio 연결
  const portfolios = toPortfolios(
    MOCK_MEMBER_PORTFOLIOS_RESPONSE.data.portfolios,
  );

  const handlePortfolioClick = (portfolioId: number) => {
    if (memberId == null) {
      return;
    }

    navigate(ROUTE_BUILDER.memberPortfolio(memberId, portfolioId));
  };

  return (
    <main className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <p className={styles.headerTitle}>{profile.username}</p>
      </div>

      <ProfileFormLayout
        summary={
          <ProfileSummaryCard
            username={profile.username}
            birthYearLabel={profile.birthYearLabel}
            mainRoleName={profile.mainRoleName}
            profileImageUrl={profile.profileImageUrl}
          />
        }
        contact={<ProfileContactCard email={profile.email} />}
        education={
          <ProfileEducationCard
            universityName={profile.universityName}
            entranceYearLabel={profile.entranceYearLabel}
            academicStatusLabel={profile.academicStatusLabel}
          />
        }
        skills={<ProfileSkillCard hardSkillNames={profile.hardSkillNames} />}
        personality={
          <ProfilePersonalityCard personalityItems={profile.personalityItems} />
        }
      />

      <ProfilePortfolioSection
        portfolios={portfolios}
        onPortfolioClick={handlePortfolioClick}
      />
    </main>
  );
};

export default MembersProfilePage;
