import { useGetMemberPortfolios } from '@entities/portfolio/api/use-get-portfolio';
import { toPortfolios } from '@entities/portfolio/model/adapters';
import { useGetMemberProfile } from '@entities/profile/api/use-get-profile';
import { toProfileViewModel } from '@entities/profile/model/adapters';
import { ROUTE_BUILDER } from '@shared/constants/path';
import { useToast } from '@shared/ui/components/toast/toast-context';
import ProfilePortfolioSection from '@widgets/portfolio-section/portfolio-section';
import ProfileContactCard from '@widgets/profile/profile-contact-card/profile-contact-card';
import ProfileEducationCard from '@widgets/profile/profile-education-card/profile-education-card';
import ProfileFormLayout from '@widgets/profile/profile-form-layout/profile-form-layout';
import ProfilePersonalityCard from '@widgets/profile/profile-personality-card/profile-personality-card';
import ProfileSkillCard from '@widgets/profile/profile-skill-card/profile-skill-card';
import ProfileSummaryCard from '@widgets/profile/profile-summary-card/profile-summary-card';
import { useNavigate, useParams } from 'react-router-dom';

import * as styles from './member-profile.css';

const MembersProfilePage = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const { data: profileData } = useGetMemberProfile(memberId);
  const { data: portfoliosData } = useGetMemberPortfolios(memberId);

  const profile = profileData ? toProfileViewModel(profileData) : null;
  const portfolios = portfoliosData
    ? toPortfolios(portfoliosData.portfolios)
    : [];

  const handlePortfolioClick = (portfolioId: number) => {
    if (memberId == null) {
      toast.error('멤버 정보를 불러오는 데 실패했습니다.');
      return;
    }

    navigate(ROUTE_BUILDER.memberPortfolio(memberId, portfolioId));
  };

  if (profile == null) return null;

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
        onPortfolioClick={handlePortfolioClick}
      />
    </main>
  );
};

export default MembersProfilePage;
