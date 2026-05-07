import type { Option } from '@shared/types/common';
import Chip from '@shared/ui/components/chip/chip';
import {
  Dropdown,
  DropdownPanel,
  DropdownTrigger,
  FieldSkillContent,
} from '@shared/ui/components/dropdown';
import ProfileSection from '@widgets/profile/profile-section/profile-section';
import { useState } from 'react';

import * as styles from './profile-skill-edit-card.css';

interface HardSkill {
  id: number;
  name: string;
}

interface ProfileSkillEditCardProps {
  hardSkills: HardSkill[];
  fields: Option[];
  skillsByFieldOptions: Record<number, Option[]>;
  onSkillsChange: (skills: HardSkill[]) => void;
}

const ProfileSkillEditCard = ({
  hardSkills,
  fields,
  skillsByFieldOptions,
  onSkillsChange,
}: ProfileSkillEditCardProps) => {
  const [pendingFieldId, setPendingFieldId] = useState<number | null>(null);
  const [pendingSkillIds, setPendingSkillIds] = useState<number[]>([]);

  const handleRemove = (id: number) => {
    onSkillsChange(hardSkills.filter((skill) => skill.id !== id));
  };

  const handleAdd = () => {
    if (pendingSkillIds.length === 0) return;

    const allSkillOptions = Object.values(skillsByFieldOptions).flat();
    const newSkills = pendingSkillIds
      .filter((id) => !hardSkills.some((s) => s.id === id))
      .map((id) => allSkillOptions.find((s) => s.id === id))
      .filter((s): s is Option => s !== undefined);

    onSkillsChange([...hardSkills, ...newSkills]);
    setPendingFieldId(null);
    setPendingSkillIds([]);
  };

  const selectedSkillNames = pendingSkillIds
    .map((id) => {
      const allOptions = Object.values(skillsByFieldOptions).flat();
      return allOptions.find((s) => s.id === id)?.name;
    })
    .filter(Boolean)
    .join(', ');

  const triggerLabel = selectedSkillNames || undefined;

  return (
    <ProfileSection title='하드 스킬'>
      <div className={styles.container}>
        {hardSkills.length > 0 && (
          <div className={styles.chipContainer}>
            {hardSkills.map((skill) => (
              <Chip key={skill.id} onRemove={() => handleRemove(skill.id)}>
                {skill.name}
              </Chip>
            ))}
          </div>
        )}
        <div className={styles.inputRow}>
          <div className={styles.dropdownWrapper}>
            <Dropdown>
              <DropdownTrigger placeholder='스킬' label={triggerLabel} />
              <DropdownPanel>
                <FieldSkillContent
                  fields={fields}
                  skillsByFieldOptions={skillsByFieldOptions}
                  fieldId={pendingFieldId}
                  skillIds={pendingSkillIds}
                  onChange={({ fieldId, skillIds }) => {
                    setPendingFieldId(fieldId);
                    setPendingSkillIds(skillIds);
                  }}
                />
              </DropdownPanel>
            </Dropdown>
          </div>
          <button
            type='button'
            className={styles.addButton}
            onClick={handleAdd}
          >
            추가하기
          </button>
        </div>
      </div>
    </ProfileSection>
  );
};

export default ProfileSkillEditCard;
