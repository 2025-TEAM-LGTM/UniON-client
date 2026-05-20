import { ROUTE_PATH } from '@shared/constants/path';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { logout } from './logout-api';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.clear();
      navigate(ROUTE_PATH.LOGIN);
    },
  });
};
