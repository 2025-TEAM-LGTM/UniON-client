import type { CreatePostRequest } from '@entities/post-create/api/types';
import type { UploadedImageMeta } from '@shared/api/image-upload';
import {
  TEAM_CULTURE_KEYS,
  type TeamCulture,
} from '@shared/utils/team-culture/types';

import type { DraftTeamCulture, PostFormValues } from './post-form';

const toTeamCulture = (draft: DraftTeamCulture): TeamCulture => {
  for (const key of TEAM_CULTURE_KEYS) {
    if (draft[key] === undefined) {
      throw new Error(`teamCulture.${key} 누락`);
    }
  }
  return draft as TeamCulture;
};

export const toCreatePostRequest = (
  values: PostFormValues,
  imageMeta: UploadedImageMeta,
): CreatePostRequest => {
  return {
    title: values.title.trim(),
    domainIds: values.domainIds,
    recruitPeriod: {
      startDate: values.recruitPeriod.startDate,
      endDate: values.recruitPeriod.endDate,
    },
    homepageUrl: values.homepageUrl.trim() || null,
    contact: values.contact.trim(),
    currentRoles: values.currentRoles,
    recruitRoles: values.recruitRoles,
    aboutUs: values.aboutUs.trim(),
    teamCulture: toTeamCulture(values.teamCulture),
    seeking: values.seeking.trim(),
    imageKey: imageMeta.imageKey,
    imageSize: imageMeta.imageSize,
  };
};
