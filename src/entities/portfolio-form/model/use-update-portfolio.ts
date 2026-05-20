import { uploadImage } from '@shared/api/image-upload';
import { queryKeys } from '@shared/constants/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updatePortfolio } from '../api/portfolio-form-api';
import type { PortfolioFormValues } from '../model/portfolio-form';

export const useUpdatePortfolio = (portfolioId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: PortfolioFormValues) => {
      const imageMeta =
        values.image.file != null
          ? await uploadImage(values.image.file)
          : { imageKey: undefined, imageSize: undefined };

      return updatePortfolio(portfolioId, {
        title: values.title.trim(),
        summary: values.summary.trim(),
        domainId: values.domainId ?? undefined,
        roleId: values.roleId ?? undefined,
        headcount: values.headcount,
        externUrl: values.externUrl.trim(),
        Stext: values.Stext.trim(),
        Ttext: values.Ttext.trim(),
        Atext: values.Atext.trim(),
        Rtext: values.Rtext.trim(),
        imageKey: imageMeta.imageKey,
        imageSize: imageMeta.imageSize,
      });
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.me.portfolioDetail(portfolioId),
      });
    },
  });
};
