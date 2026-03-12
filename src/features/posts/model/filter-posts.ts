// mock 데이터로 확인용
import type { PostResponse } from '../types/post-response-data';
import type { FiltersState } from './filters-state';

const includesAny = (source: number[], target: number[]) =>
  target.some((id) => source.includes(id));

export const filterPosts = (
  posts: PostResponse[],
  filters: FiltersState,
): PostResponse[] => {
  return posts.filter((post) => {
    const postDomainIds = post.domains.map((domain) => domain.id);
    const postRoleIds = post.recruits.map((recruit) => recruit.roleId);

    const matchesDomain =
      filters.domainIds.length === 0 ||
      includesAny(postDomainIds, filters.domainIds);

    const matchesRole =
      filters.roleIds.length === 0 || includesAny(postRoleIds, filters.roleIds);

    return matchesDomain && matchesRole;
  });
};
