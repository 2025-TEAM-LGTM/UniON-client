import type { PostDetailsResponse } from '@entities/post-details/api/types';

import type { RecruitInfoProps } from './recruit-info';

export const toRecruitInfoProps = (
  response: PostDetailsResponse,
): RecruitInfoProps => {
  const { data } = response;

  return {
    domains: data.domains,
    recruitPeriod: data.recruitPeriod,
    homepageUrl: data.homepageUrl,
    contact: data.contact,
    currentRoles: data.currentRoles.map((role) => ({
      id: role.roleId,
      name: role.roleName,
      count: role.count,
    })),
    recruitRoles: data.recruitRoles.map((role) => ({
      id: role.roleId,
      name: role.roleName,
      count: role.count,
    })),
  };
};
