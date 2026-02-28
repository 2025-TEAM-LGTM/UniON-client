export const ROUTE_PATH = {
  LOGIN: '/',
  SIGN_UP: '/signup',

  POSTS: '/posts',
  POST_DETAIL: '/posts/:postId',
  POST_NEW: '/posts/new',

  RECOMMEND: '/recommend',

  MY_PROFILE: '/me/profile',
  MY_PORTFOLIO: '/me/portfolio',

  MEMBERS: '/members',

  MEMBER_PROFILE: '/members/:memberId/profile',
  MEMBER_PORTFOLIO: '/members/:memberId/portfolio',
} as const;
