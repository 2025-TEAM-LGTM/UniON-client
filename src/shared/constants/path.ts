export const ROUTE_PATH = {
  LOGIN: '/',
  SIGN_UP: '/signup',

  POSTS: '/posts',
  POST_CREATE: '/posts/new',
  POST_DETAILS: '/posts/:postId',
  POST_EDIT: '/posts/:postId/edit',

  RECOMMEND: '/recommend',

  MY_PROFILE: '/me/profile',
  MY_PORTFOLIO: '/me/portfolio',

  MEMBERS: '/members',

  MEMBER_PROFILE: '/members/:memberId/profile',
  MEMBER_PORTFOLIO: '/members/:memberId/portfolio',
} as const;

export const ROUTE_BUILDER = {
  postDetails: (postId: number | string) => `/posts/${postId}`,
  postEdit: (postId: number | string) => `/posts/${postId}/edit`,
  memberProfile: (memberId: number | string) => `/members/${memberId}/profile`,
  memberPortfolio: (memberId: number | string) =>
    `/members/${memberId}/portfolio`,
} as const;
