import type { PostCardProps } from '@widgets/post-card/post-card';

export const mockPosts: Omit<PostCardProps, 'onToggleApply'>[] = Array.from({
  length: 14,
}).map((_, i) => {
  const postId = i + 1;

  return {
    postId,
    title: `팀빌딩 공고 제목 ${postId}`,
    domain: [
      { id: 1, name: '커머스' },
      ...(postId % 2 === 0 ? [{ id: 2, name: '교육' }] : []),
      ...(postId % 3 === 0 ? [{ id: 3, name: '콘텐츠' }] : []),
    ],
    dday: (postId % 14) + 1,
    recruits: [
      { roleId: 1, roleName: '디자이너', roleCount: 1 },
      { roleId: 2, roleName: '프론트엔드', roleCount: 2 },
      ...(postId % 3 === 0
        ? [{ roleId: 3, roleName: '백엔드', roleCount: 1 }]
        : []),
    ],
    nowCount: 3 + (postId % 5),
    applied: postId % 4 === 0,
  };
});
