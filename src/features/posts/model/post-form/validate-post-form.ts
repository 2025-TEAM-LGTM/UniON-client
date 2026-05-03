import type { PostFormValues } from '@entities/posts/model/post-form/post-form';
import { TEAM_CULTURE_KEYS } from '@shared/utils/team-culture/types';

export interface PostFormErrors {
  title?: string;
  domainIds?: string;
  recruitPeriod?: string;
  currentRoles?: string;
  recruitRoles?: string;
  seeking?: string;
  aboutUs?: string;
  teamCulture?: string;
  image?: string;
}

const hasCompleteRecruitPeriod = (values: PostFormValues) => {
  const { startDate, endDate } = values.recruitPeriod;

  return Boolean(startDate && endDate);
};

const hasCompleteTeamCulture = (values: PostFormValues) => {
  return TEAM_CULTURE_KEYS.every((key) => values.teamCulture[key] != null);
};

const hasValidRoleCounts = (roles: PostFormValues['currentRoles']) => {
  return (
    roles.length > 0 &&
    roles.every((role) => Number.isInteger(role.count) && role.count > 0)
  );
};

export const validatePostForm = (values: PostFormValues): PostFormErrors => {
  const errors: PostFormErrors = {};

  if (!values.title.trim()) {
    errors.title = '공고 제목을 입력해주세요.';
  }

  if (!values.domainIds.length) {
    errors.domainIds = '활동 분야를 선택해주세요.';
  }

  if (!hasCompleteRecruitPeriod(values)) {
    errors.recruitPeriod = '모집 기간을 입력해주세요.';
  }

  if (!hasValidRoleCounts(values.currentRoles)) {
    errors.currentRoles = '현재 팀 구성을 1개 이상 추가해주세요.';
  }
  if (!hasValidRoleCounts(values.recruitRoles)) {
    errors.recruitRoles = '필요 역할을 1개 이상 추가해주세요.';
  }

  if (!values.seeking.trim()) {
    errors.seeking = '찾고 있는 인재상을 입력해주세요.';
  }

  if (!hasCompleteTeamCulture(values)) {
    errors.teamCulture = '팀 문화를 모두 선택해주세요.';
  }

  if (!values.aboutUs.trim()) {
    errors.aboutUs = '팀 문화 및 정규 일정을 입력해주세요.';
  }

  return errors;
};

export const isPostFormValid = (values: PostFormValues) => {
  return Object.keys(validatePostForm(values)).length === 0;
};
