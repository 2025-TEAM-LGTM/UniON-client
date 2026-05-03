import {
  toCreatePostRequest,
  type UploadedImageMeta,
} from '@entities/posts/model/post-form/adapters';
import type { PostFormValues } from '@entities/posts/model/post-form/post-form';

export const buildCreatePostRequest = (
  values: PostFormValues,
  imageMeta: UploadedImageMeta,
) => {
  return toCreatePostRequest(values, imageMeta);
};
