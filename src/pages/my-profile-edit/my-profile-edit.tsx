import { useGetMyPortfolios } from '@entities/portfolio/api/use-get-portfolio';
import { toPortfolios } from '@entities/portfolio/model/adapters';
import { useGetMyProfile } from '@entities/profile/api/use-get-profile';
import { useUpdateMyProfile } from '@entities/profile/api/use-update-my-profile';
import { toProfileViewModel } from '@entities/profile/model/adapters';
import { useGetSkills } from '@entities/skill/api/use-get-skills';
import { useGetUniversities } from '@entities/university/api/use-get-universities';
import { parseFieldSkillResponse } from '@shared/lib/filter/parse-field-skill-response';
import Button from '@shared/ui/components/button/button';
import type { UniversityOption } from '@shared/ui/components/dropdown/dropdown-content/university-content';
import Loading from '@shared/ui/components/loading/loading';
import { useToast } from '@shared/ui/components/toast/toast-context';
import type { AcademicStatusKey } from '@shared/utils/academic-status/types';
import type { Personality } from '@shared/utils/personality/types';
import PortfolioEditSection from '@widgets/portfolio-edit-section/portfolio-edit-section';
import ProfileFormLayout from '@widgets/profile/profile-form-layout/profile-form-layout';
import ProfileContactEditCard from '@widgets/profile-edit/profile-contact-edit-card/profile-contact-edit-card';
import ProfileEducationEditCard from '@widgets/profile-edit/profile-education-edit-card/profile-education-edit-card';
import ProfilePersonalityEditCard from '@widgets/profile-edit/profile-personality-edit-card/profile-personality-edit-card';
import ProfileSkillEditCard from '@widgets/profile-edit/profile-skill-edit-card/profile-skill-edit-card';
import ProfileSummaryEditCard from '@widgets/profile-edit/profile-summary-edit-card/profile-summary-edit-card';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './my-profile-edit.css';

interface HardSkill {
  id: number;
  name: string;
}

interface ProfileEditFormValues {
  email: string;
  university: UniversityOption | null;
  entranceYear: number;
  academicStatus: AcademicStatusKey;
  hardSkills: HardSkill[];
  personality: Personality;
  imageFile: File | null;
}

interface MyProfileEditFormProps {
  initialValues: ProfileEditFormValues;
  username: string;
  birthYearLabel: string;
  mainRoleName: string;
  profileImageUrl: string | null;
  fields: { id: number; name: string }[];
  skillsByFieldOptions: Record<number, { id: number; name: string }[]>;
  universityOptions: UniversityOption[];
  onSearchUniversity: (query: string) => void;
  initialPortfolios: ReturnType<typeof toPortfolios>;
}

const MyProfileEditForm = ({
  initialValues,
  username,
  birthYearLabel,
  mainRoleName,
  profileImageUrl,
  fields,
  skillsByFieldOptions,
  universityOptions,
  onSearchUniversity,
  initialPortfolios,
}: MyProfileEditFormProps) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [values, setValues] = useState<ProfileEditFormValues>(initialValues);
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const { mutateAsync: updateProfile, isPending } = useUpdateMyProfile();

  const handleCancel = () => navigate('/me/profile');

  const handleSave = async () => {
    try {
      await updateProfile({
        request: {
          email: values.email,
          universityId: values.university?.id,
          entranceYear: values.entranceYear,
          status: values.academicStatus,
          hardSkills: values.hardSkills.map((s) => s.id),
          personality: values.personality,
        },
        imageFile: values.imageFile,
      });
      toast.success('프로필이 저장되었어요.');
      navigate('/me/profile');
    } catch {
      toast.error('프로필 저장에 실패했어요. 다시 시도해 주세요.');
    }
  };

  const handlePortfolioDelete = (portfolioId: number) => {
    setPortfolios((prev) => prev.filter((p) => p.portfolioId !== portfolioId));
  };

  const handlePortfolioClick = (portfolioId: number) => {
    navigate(`/portfolio/${portfolioId}`);
  };

  const handleAddPortfolioClick = () => navigate('/portfolio/new');

  return (
    <main className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <p className={styles.headerTitle}>마이페이지</p>
        <div className={styles.buttonContainer}>
          <Button color='gray' onClick={handleCancel} disabled={isPending}>
            취소하기
          </Button>
          <Button color='primary' onClick={handleSave} disabled={isPending}>
            {isPending ? '저장 중...' : '저장하기'}
          </Button>
        </div>
      </div>
      <ProfileFormLayout
        summary={
          <ProfileSummaryEditCard
            username={username}
            birthYearLabel={birthYearLabel}
            mainRoleName={mainRoleName}
            profileImageUrl={profileImageUrl}
            onImageChange={(file) => setValues({ ...values, imageFile: file })}
          />
        }
        contact={
          <ProfileContactEditCard
            email={values.email}
            onEmailChange={(email) => setValues((prev) => ({ ...prev, email }))}
          />
        }
        education={
          <ProfileEducationEditCard
            university={values.university}
            entranceYear={values.entranceYear}
            academicStatus={values.academicStatus}
            onUniversityChange={(university) =>
              setValues({ ...values, university })
            }
            onEntranceYearChange={(entranceYear) =>
              setValues({ ...values, entranceYear })
            }
            onAcademicStatusChange={(academicStatus) =>
              setValues({ ...values, academicStatus })
            }
            universityOptions={universityOptions}
            onSearchUniversity={onSearchUniversity}
          />
        }
        skills={
          <ProfileSkillEditCard
            hardSkills={values.hardSkills}
            fields={fields}
            skillsByFieldOptions={skillsByFieldOptions}
            onSkillsChange={(hardSkills) =>
              setValues({ ...values, hardSkills })
            }
          />
        }
        personality={
          <ProfilePersonalityEditCard
            personality={values.personality}
            onPersonalityChange={(personality) =>
              setValues({ ...values, personality })
            }
          />
        }
      />
      <PortfolioEditSection
        portfolios={portfolios}
        onAddClick={handleAddPortfolioClick}
        onPortfolioClick={handlePortfolioClick}
        onDeleteClick={handlePortfolioDelete}
      />
    </main>
  );
};

const MyProfileEditPage = () => {
  const {
    data: profileData,
    isLoading: isProfileLoading,
    isError: isProfileError,
  } = useGetMyProfile();
  const { data: portfolioData, isLoading: isPortfolioLoading } =
    useGetMyPortfolios();
  const { data: skillData } = useGetSkills();
  const [universityQuery, setUniversityQuery] = useState('');
  const { data: universityData } = useGetUniversities(universityQuery);

  const { fields, skillsByFieldOptions } = useMemo(
    () => parseFieldSkillResponse(skillData ?? []),
    [skillData],
  );

  const universityOptions = universityData ?? [];

  if (isProfileLoading || isPortfolioLoading) return <Loading />;

  if (isProfileError || profileData == null) {
    return (
      <main className={styles.pageContainer}>
        <p>프로필을 불러올 수 없어요.</p>
      </main>
    );
  }

  const viewModel = toProfileViewModel(profileData);
  const portfolios = toPortfolios(portfolioData?.portfolios ?? []);

  const initialValues: ProfileEditFormValues = {
    email: profileData.email,
    university: {
      id: profileData.university.id,
      name: profileData.university.name,
    },
    entranceYear: profileData.entranceYear,
    academicStatus: profileData.status,
    hardSkills: profileData.hardSkills,
    personality: profileData.personality,
    imageFile: null,
  };

  return (
    <MyProfileEditForm
      initialValues={initialValues}
      username={viewModel.username}
      birthYearLabel={viewModel.birthYearLabel}
      mainRoleName={viewModel.mainRoleName}
      profileImageUrl={profileData.imageUrl}
      fields={fields}
      skillsByFieldOptions={skillsByFieldOptions}
      universityOptions={universityOptions}
      onSearchUniversity={setUniversityQuery}
      initialPortfolios={portfolios}
    />
  );
};

export default MyProfileEditPage;
