import { buildCreatePostRequest } from '@features/posts/model/post-form/build-create-post-request';
import { uploadImage } from '@shared/api/image-upload';
import { queryKeys } from '@shared/constants/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { PostFormValues } from '../model/post-form/post-form';
import { updatePost } from './posts-api';

export const useUpdatePost = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: PostFormValues) => {
      const imageMeta =
        values.image.file != null
          ? await uploadImage(values.image.file)
          : { imageKey: null, imageSize: null };

      const body = buildCreatePostRequest(values, imageMeta);
      return updatePost(postId, body);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.posts.detail(postId),
      });
    },
  });
};
