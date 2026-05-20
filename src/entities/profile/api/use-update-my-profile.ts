import { uploadImage } from '@shared/api/image-upload';
import { queryKeys } from '@shared/constants/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateMyProfile } from './profile-api';
import type { UpdateProfileRequest } from './types';

interface UpdateProfileParams {
  request: UpdateProfileRequest;
  imageFile: File | null;
}

export const useUpdateMyProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ request, imageFile }: UpdateProfileParams) => {
      const imageMeta =
        imageFile != null
          ? await uploadImage(imageFile)
          : { imageKey: null, imageSize: null };

      return updateMyProfile({
        ...request,
        ...(imageMeta.imageKey != null && {
          imageKey: imageMeta.imageKey,
          imageSize: imageMeta.imageSize ?? 0,
        }),
      });
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.me.profile(),
      });
    },
  });
};
