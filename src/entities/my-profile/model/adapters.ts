import { getAcademicStatusMeta } from '@shared/utils/academic-status/academic-status';
import {
  type PersonalityItem,
  toPersonalityItems,
} from '@shared/utils/personality/to-personality-items';

import type { ProfileResponseData } from '../api/types';

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

const formatBirthYearLabel = (birthYear: number): string => {
  return `${birthYear}년생`;
};

const formatEntranceYearLabel = (entranceYear: number): string => {
  return `${entranceYear}학번`;
};

const getHardSkillNames = (
  hardSkills: ProfileResponseData['hardSkills'],
): string[] => {
  return hardSkills.map((skill) => skill.name);
};

export const toProfileViewModel = (
  profile: ProfileResponseData,
): ProfileViewModel => {
  const academicStatusMeta = getAcademicStatusMeta(profile.status);

  return {
    username: profile.username,
    profileImageUrl: profile.imageUrl || null,
    birthYearLabel: formatBirthYearLabel(profile.birthYear),
    mainRoleName: profile.mainRole.name,
    email: profile.email,
    universityName: profile.university.name,
    entranceYearLabel: formatEntranceYearLabel(profile.entranceYear),
    academicStatusLabel: academicStatusMeta.label ?? '재휴학 여부 미확인',
    hardSkillNames: getHardSkillNames(profile.hardSkills),
    personalityItems: toPersonalityItems(profile.personality),
  };
};
