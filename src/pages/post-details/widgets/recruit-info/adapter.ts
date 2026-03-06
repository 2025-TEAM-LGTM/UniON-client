import type { PostDetailPageResponse } from '../../mock/mock-post-detail';
import type { RecruitInfoProps } from './recruit-info';

export const toRecruitInfoProps = (
  response: PostDetailPageResponse,
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
      count: role.roleCount,
    })),
    recruitRoles: data.recruits.map((role) => ({
      id: role.roleId,
      name: role.roleName,
      count: role.roleCount,
    })),
  };
};
