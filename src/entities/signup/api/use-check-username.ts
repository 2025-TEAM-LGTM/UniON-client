import { useMutation } from '@tanstack/react-query';

import { checkUsername } from './signup-api';

export const useCheckUsername = () => {
  return useMutation({
    mutationFn: (username: string) => checkUsername(username),
  });
};
