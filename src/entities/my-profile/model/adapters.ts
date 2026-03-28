import type { PersonalityItem } from '@shared/utils/personality/personality';

export interface ProfileViewModel {
  username: string;
  profileImageUrl: string | null;
  birthYearLabel: string;
  mainRoleName: string;
  email: string;
  universityName: string;
  entranceYearLabel: string;
  academicStatusLabel: string;
  hardSkillNames: string[];
  personalityItems: PersonalityItem[];
}
