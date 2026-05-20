import { queryKeys } from '@shared/constants/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deletePost } from './posts-api';

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.posts.all,
      });
    },
  });
};
