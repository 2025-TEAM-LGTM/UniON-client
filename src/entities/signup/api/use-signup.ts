import { useMutation } from '@tanstack/react-query';

import { signup } from './signup-api';
import type { SignupRequest } from './types';

export const useSignup = () => {
  return useMutation({
    mutationFn: (body: SignupRequest) => signup(body),
  });
};
