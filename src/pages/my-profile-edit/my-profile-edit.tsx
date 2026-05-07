import { toProfileViewModel } from '@entities/my-profile/model/adapters';
import { toPortfolios } from '@entities/portfolio/model/adapters';
import { MOCK_FIELD_SKILL_RESPONSE } from '@pages/members/mocks/mock-skill-options';
import Button from '@shared/ui/components/button/button';
import type { UniversityOption } from '@shared/ui/components/dropdown/dropdown-content/university-content';
import type { AcademicStatusKey } from '@shared/utils/academic-status/types';
import type { Personality } from '@shared/utils/personality/types';
import PortfolioEditSection from '@widgets/portfolio-edit-section/portfolio-edit-section';
import ProfileFormLayout from '@widgets/profile/profile-form-layout/profile-form-layout';
import ProfileContactEditCard from '@widgets/profile-edit/profile-contact-edit-card/profile-contact-edit-card';
import ProfileEducationEditCard from '@widgets/profile-edit/profile-education-edit-card/profile-education-edit-card';
import ProfilePersonalityEditCard from '@widgets/profile-edit/profile-personality-edit-card/profile-personality-edit-card';
import ProfileSkillEditCard from '@widgets/profile-edit/profile-skill-edit-card/profile-skill-edit-card';
import ProfileSummaryEditCard from '@widgets/profile-edit/profile-summary-edit-card/profile-summary-edit';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MOCK_PORTFOLIOS_RESPONSE } from '../my-profile/mocks/mock-portfolios';
import { MOCK_PROFILE_RESPONSE } from '../my-profile/mocks/mock-profile-response';
import * as styles from './my-profile-edit.css';

interface HardSkill {
  id: number;
  name: string;
}

// TODO: major 수정 기능 추가되면 prop 추가
interface ProfileEditFormValues {
  email: string;
  university: UniversityOption | null;
  entranceYear: number;
  academicStatus: AcademicStatusKey;
  hardSkills: HardSkill[];
  personality: Personality;
  imageFile: File | null;
}

const fieldSkillItems = MOCK_FIELD_SKILL_RESPONSE.data.items;
const fields = fieldSkillItems.map((item) => item.field);
const skillsByFieldOptions = Object.fromEntries(
  fieldSkillItems.map((item) => [item.field.id, item.skills]),
);
const MyProfileEditPage = () => {
  const profile = toProfileViewModel(MOCK_PROFILE_RESPONSE.data);
  const raw = MOCK_PROFILE_RESPONSE.data;

  const [portfolios, setPortfolios] = useState(
    toPortfolios(MOCK_PORTFOLIOS_RESPONSE.data.portfolios),
  );

  const [values, setValues] = useState<ProfileEditFormValues>({
    email: profile.email,
    university: {
      id: raw.university.id,
      name: raw.university.name,
    },
    entranceYear: raw.entranceYear,
    academicStatus: raw.status,
    hardSkills: raw.hardSkills,
    personality: raw.personality,
    imageFile: null,
  });

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/me/profile');
  };

  const handleSave = () => {
    // TODO: API 연결 시 변경된 필드만 추출하여 PATCH 요청
    console.log('저장할 값:', values);
    navigate('/me/profile');
  };

  const handlePortfolioDelete = (portfolioId: number) => {
    // TODO: API 연결 시 DELETE 요청 후 목록 갱신
    setPortfolios((prev) => prev.filter((p) => p.portfolioId !== portfolioId));
  };

  const handlePortfolioClick = (portfolioId: number) => {
    navigate(`/portfolio/${portfolioId}`);
  };

  const handleAddPortfolioClick = () => {
    navigate('/portfolio/new');
  };

  return (
    <main className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <p className={styles.headerTitle}>마이페이지</p>
        <div className={styles.buttonContainer}>
          <Button color='gray' onClick={handleCancel}>
            취소하기
          </Button>
          <Button color='primary' onClick={handleSave}>
            저장하기
          </Button>
        </div>
      </div>
      <ProfileFormLayout
        summary={
          <ProfileSummaryEditCard
            username={profile.username}
            birthYearLabel={profile.birthYearLabel}
            mainRoleName={profile.mainRoleName}
            profileImageUrl={profile.profileImageUrl}
            onImageChange={(file) => setValues({ ...values, imageFile: file })}
          />
        }
        contact={
          <ProfileContactEditCard
            email={values.email}
            onEmailChange={(email) => setValues({ ...values, email })}
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

export default MyProfileEditPage;
