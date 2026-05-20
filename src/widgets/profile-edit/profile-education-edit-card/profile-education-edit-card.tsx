import {
  Dropdown,
  DropdownPanel,
  DropdownTrigger,
} from '@shared/ui/components/dropdown';
import UniversityContent, {
  type UniversityOption,
} from '@shared/ui/components/dropdown/dropdown-content/university-content';
import TextField from '@shared/ui/components/field/textfield/textfield';
import { toAcademicStatusItems } from '@shared/utils/academic-status/to-academic-status-items';
import type { AcademicStatusKey } from '@shared/utils/academic-status/types';
import ProfileSection from '@widgets/profile/profile-section/profile-section';

import * as styles from './profile-education-edit-card.css';

const ACADEMIC_STATUS_OPTIONS = toAcademicStatusItems();

interface ProfileEducationEditCardProps {
  university: UniversityOption | null;
  entranceYear: number;
  academicStatus: AcademicStatusKey;
  universityOptions: UniversityOption[];
  onUniversityChange: (university: UniversityOption) => void;
  onEntranceYearChange: (value: number) => void;
  onAcademicStatusChange: (value: AcademicStatusKey) => void;
  onSearchUniversity: (query: string) => void;
}

const ProfileEducationEditCard = ({
  university,
  entranceYear,
  academicStatus,
  universityOptions,
  onUniversityChange,
  onEntranceYearChange,
  onAcademicStatusChange,
  onSearchUniversity,
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
              options={universityOptions}
              value={university?.id ?? null}
              onChange={onUniversityChange}
              onSearchChange={onSearchUniversity}
            />
          </DropdownPanel>
        </Dropdown>
        <TextField
          type='number'
          value={entranceYear}
          onChange={(e) => {
            const next = e.target.value;
            if (next === '') return;
            onEntranceYearChange(Number(next));
          }}
          placeholder='입학년도'
        />
        <div className={styles.statusContainer}>
          {ACADEMIC_STATUS_OPTIONS.map(({ key, label }) => (
            <button
              key={key}
              type='button'
              className={
                academicStatus === key
                  ? styles.statusButtonActive
                  : styles.statusButton
              }
              onClick={() => onAcademicStatusChange(key)}
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
