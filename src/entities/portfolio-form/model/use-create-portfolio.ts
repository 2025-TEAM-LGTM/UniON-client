import { uploadImage } from '@shared/api/image-upload';
import { useMutation } from '@tanstack/react-query';

import { createPortfolio } from '../api/portfolio-form-api';
import { toCreatePortfolioRequest } from '../model/adapters';
import type { PortfolioFormValues } from '../model/portfolio-form';

export const useCreatePortfolio = () => {
  return useMutation({
    mutationFn: async (values: PortfolioFormValues) => {
      const imageMeta =
        values.image.file != null
          ? await uploadImage(values.image.file)
          : { imageKey: null, imageSize: null };

      const body = toCreatePortfolioRequest(values, imageMeta);
      return createPortfolio(body);
    },
  });
};
