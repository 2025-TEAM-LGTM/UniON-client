import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getApplicants, type GetApplicantsParams } from './applicant-api';

export const useGetApplicants = (
  postId: number,
  params: GetApplicantsParams,
) => {
  return useQuery({
    queryKey: queryKeys.applicants.list(postId, params),
    queryFn: () => getApplicants(postId, params),
    enabled: postId > 0,
  });
};
