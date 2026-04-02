export const ROUTE_PATH = {
  LOGIN: '/',
  SIGN_UP: '/signup',

  POSTS: '/posts',
  POST_CREATE: '/posts/new',
  POST_DETAILS: '/posts/:postId',
  POST_EDIT: '/posts/:postId/edit',

  RECOMMEND: '/recommend',

  MY_PROFILE: '/me/profile',
  MY_PROFILE_EDIT: '/me/profile/edit',

  MY_PORTFOLIO_DETAILS: '/portfolio/:portfolioId',
  CREATE_PORTFOLIO: '/portfolio/new',
  EDIT_PORTFOLIO: '/portfolio/:portfolioId/edit',

  MEMBERS: '/members',

  MEMBER_PROFILE: '/members/:memberId/profile',
  MEMBER_PORTFOLIO: '/members/:memberId/portfolio',
} as const;

export const ROUTE_BUILDER = {
  postDetails: (postId: number | string) => `/posts/${postId}`,
  postEdit: (postId: number | string) => `/posts/${postId}/edit`,
  portfolioDetails: (portfolioId: number | string) =>
    `/portfolio/${portfolioId}`,
  editPortfolio: (portfolioId: number | string) =>
    `/portfolio/${portfolioId}/edit`,
  memberProfile: (memberId: number | string) => `/members/${memberId}/profile`,
  memberPortfolio: (memberId: number | string) =>
    `/members/${memberId}/portfolio`,
} as const;
