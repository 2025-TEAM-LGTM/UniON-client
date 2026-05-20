import { queryKeys } from '@shared/constants/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deletePortfolio } from '../api/portfolio-form-api';

export const useDeletePortfolio = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (portfolioId: string) => deletePortfolio(portfolioId),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.me.portfolios(),
      });
    },
  });
};
