import { toCreatePostRequest } from '@entities/posts/model/post-form/adapters';
import type { PostFormValues } from '@entities/posts/model/post-form/post-form';
import type { UploadedImageMeta } from '@shared/api/image-upload';

export const buildCreatePostRequest = (
  values: PostFormValues,
  imageMeta: UploadedImageMeta,
) => {
  return toCreatePostRequest(values, imageMeta);
};
