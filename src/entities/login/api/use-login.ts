import { useMutation } from '@tanstack/react-query';

import { login, type LoginRequest } from './login-api';

export const useLogin = () => {
  return useMutation({
    mutationFn: (body: LoginRequest) => login(body),
  });
};
