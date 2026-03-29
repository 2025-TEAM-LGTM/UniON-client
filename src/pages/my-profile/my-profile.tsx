import { toProfileViewModel } from '@entities/my-profile/model/adapters';
import { toPortfolios } from '@entities/portfolio/model/adapters';
import ProfilePortfolioSection from '@widgets/portfolio-section/portfolio-section';
import ProfileContactCard from '@widgets/profile/profile-contact-card/profile-contact-card';
import ProfileEducationCard from '@widgets/profile/profile-education-card/profile-education-card';
import ProfileFormLayout from '@widgets/profile/profile-form-layout/profile-form-layout';
import ProfilePersonalityCard from '@widgets/profile/profile-personality-card/profile-personality-card';
import ProfileSkillCard from '@widgets/profile/profile-skill-card/profile-skill-card';
import ProfileSummaryCard from '@widgets/profile/profile-summary-card/profile-summary-card';
import { useNavigate } from 'react-router-dom';

import { MOCK_PORTFOLIOS_RESPONSE } from './mocks/mock-portfolios';
import { MOCK_PROFILE_RESPONSE } from './mocks/mock-profile-response';
import * as styles from './my-profile.css';

const MyProfilePage = () => {
  const profile = toProfileViewModel(MOCK_PROFILE_RESPONSE.data);
  const portfolios = toPortfolios(MOCK_PORTFOLIOS_RESPONSE.data.portfolios);

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate('/portfolio/new');
  };

  const handlePortfolioClick = (portfolioId: number) => {
    navigate(`/portfolios/${portfolioId}`);
  };

  return (
    <main className={styles.pageContainer}>
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
        onAddClick={handleAddClick}
        onPortfolioClick={handlePortfolioClick}
      />
    </main>
  );
};

export default MyProfilePage;
