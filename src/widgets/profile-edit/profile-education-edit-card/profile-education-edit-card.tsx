import {
  Dropdown,
  DropdownPanel,
  DropdownTrigger,
} from '@shared/ui/components/dropdown';
import UniversityContent, {
  type UniversityOption,
} from '@shared/ui/components/dropdown/dropdown-content/university-content';
import TextField from '@shared/ui/components/field/textfield/textfield';
import type { AcademicStatusKey } from '@shared/utils/academic-status/types';
import ProfileSection from '@widgets/profile/profile-section/profile-section';

import * as styles from './profile-education-edit-card.css';

const ACADEMIC_STATUS_OPTIONS: { value: AcademicStatusKey; label: string }[] = [
  { value: 'ENROLLED', label: '재학' },
  { value: 'LEAVE', label: '휴학' },
  { value: 'GRADUATED', label: '졸업' },
  { value: 'DEFERRED', label: '유예' },
];

interface ProfileEducationEditCardProps {
  university: UniversityOption | null;
  major: string;
  entranceYear: number;
  academicStatus: AcademicStatusKey;
  onUniversityChange: (university: UniversityOption) => void;
  onMajorChange: (value: string) => void;
  onEntranceYearChange: (value: number) => void;
  onAcademicStatusChange: (value: AcademicStatusKey) => void;
}

const ProfileEducationEditCard = ({
  university,
  major,
  entranceYear,
  academicStatus,
  onUniversityChange,
  onMajorChange,
  onEntranceYearChange,
  onAcademicStatusChange,
}: ProfileEducationEditCardProps) => {
  return (
    <ProfileSection title='학력'>
      <div className={styles.educationContainer}>
        <Dropdown>
          <DropdownTrigger
            placeholder='학교를 선택하세요'
            label={university?.name}
          />
          <DropdownPanel>
            <UniversityContent
              options={[
                { id: 372, name: '이화여자대학교' },
                { id: 373, name: '연세대학교' },
                { id: 374, name: '고려대학교' },
                { id: 375, name: '서울대학교' },
              ]}
              value={university?.id ?? null}
              onChange={onUniversityChange}
              onSearchChange={(query) => {
                // TODO: 검색어로 대학 목록 fetch
                console.log('대학 검색:', query);
              }}
            />
          </DropdownPanel>
        </Dropdown>
        <TextField
          value={major}
          onChange={(e) => onMajorChange(e.target.value)}
          placeholder='전공'
        />
        <TextField
          type='number'
          value={entranceYear}
          onChange={(e) => onEntranceYearChange(Number(e.target.value))}
          placeholder='입학년도'
        />
        <div className={styles.statusContainer}>
          {ACADEMIC_STATUS_OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              type='button'
              className={
                academicStatus === value
                  ? styles.statusButtonActive
                  : styles.statusButton
              }
              onClick={() => onAcademicStatusChange(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </ProfileSection>
  );
};

export default ProfileEducationEditCard;
