import type { PostFormValues } from '@entities/posts/model/post-form/post-form';
import { buildCreatePostRequest } from '@features/posts/model/post-form/build-create-post-request';
import { uploadImage } from '@shared/api/image-upload';
import { useMutation } from '@tanstack/react-query';

import { createPost } from './post-create-api';

export const useCreatePost = () => {
  return useMutation({
    mutationFn: async (values: PostFormValues) => {
      const imageMeta =
        values.image.file != null
          ? await uploadImage(values.image.file)
          : { imageKey: null, imageSize: null };

      const body = buildCreatePostRequest(values, imageMeta);
      return createPost(body);
    },
  });
};
