import { queryKeys } from '@shared/constants/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { applyPost, cancelApply } from './apply-api';

interface ToggleApplyParams {
  postId: number;
  wasApplied: boolean;
}

export const useToggleApply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, wasApplied }: ToggleApplyParams) =>
      wasApplied ? cancelApply(postId) : applyPost(postId),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.posts.all });
    },
  });
};
