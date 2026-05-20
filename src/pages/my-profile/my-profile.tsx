import { useLogout } from '@entities/logout/api/use-logout';
import { useGetMyPortfolios } from '@entities/portfolio/api/use-get-portfolio';
import { toPortfolios } from '@entities/portfolio/model/adapters';
import { useGetMyProfile } from '@entities/profile/api/use-get-profile';
import { toProfileViewModel } from '@entities/profile/model/adapters';
import Button from '@shared/ui/components/button/button';
import Loading from '@shared/ui/components/loading/loading';
import ProfilePortfolioSection from '@widgets/portfolio-section/portfolio-section';
import ProfileContactCard from '@widgets/profile/profile-contact-card/profile-contact-card';
import ProfileEducationCard from '@widgets/profile/profile-education-card/profile-education-card';
import ProfileFormLayout from '@widgets/profile/profile-form-layout/profile-form-layout';
import ProfilePersonalityCard from '@widgets/profile/profile-personality-card/profile-personality-card';
import ProfileSkillCard from '@widgets/profile/profile-skill-card/profile-skill-card';
import ProfileSummaryCard from '@widgets/profile/profile-summary-card/profile-summary-card';
import { useNavigate } from 'react-router-dom';

import * as styles from './my-profile.css';

const MyProfilePage = () => {
  const navigate = useNavigate();

  const {
    data: profileData,
    isLoading: isProfileLoading,
    error: profileError,
  } = useGetMyProfile();
  const {
    data: portfoliosData,
    isLoading: isPortfoliosLoading,
    error: portfoliosError,
  } = useGetMyPortfolios();

  const { mutate: logoutMutate, isPending: isLoggingOut } = useLogout();

  const profile = profileData ? toProfileViewModel(profileData) : null;
  const portfolios = portfoliosData
    ? toPortfolios(portfoliosData.portfolios)
    : [];

  if (isProfileLoading || isPortfoliosLoading) {
    return <Loading />;
  }
  if (profileError || portfoliosError) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  const handleEditProfileClick = () => {
    navigate('/me/profile/edit');
  };

  const handleAddClick = () => {
    navigate('/portfolio/new');
  };

  const handlePortfolioClick = (portfolioId: number) => {
    navigate(`/portfolio/${portfolioId}`);
  };

  if (profile == null) return null;

  return (
    <main className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <p className={styles.headerTitle}>마이페이지</p>
        <div className={styles.buttonContainer}>
          <Button
            color='gray'
            onClick={() => logoutMutate()}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? '로그아웃 중...' : '로그아웃'}
          </Button>
          <Button color='primary' onClick={handleEditProfileClick}>
            수정하기
          </Button>
        </div>
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
        onAddClick={handleAddClick}
        onPortfolioClick={handlePortfolioClick}
      />
    </main>
  );
};

export default MyProfilePage;
