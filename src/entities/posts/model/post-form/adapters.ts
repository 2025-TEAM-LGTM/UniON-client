import type { CreatePostRequest } from '@entities/post-create/api/types';

import type { PostFormValues } from './post-form';

export interface UploadedImageMeta {
  imageKey: string;
  imageSize: number;
}

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
    homepageUrl: values.homepageUrl.trim(),
    contact: values.contact.trim(),
    currentRoles: values.currentRoles,
    recruitRoles: values.recruitRoles,
    aboutUs: values.aboutUs.trim(),
    teamCulture: values.teamCulture as CreatePostRequest['teamCulture'],
    seeking: values.seeking.trim(),
    imageKey: imageMeta.imageKey,
    imageSize: imageMeta.imageSize,
  };
};
