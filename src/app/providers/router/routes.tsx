import { ROUTE_PATH } from '@shared/constants/path';
import AuthLayout from '@shared/ui/layouts/auth-layout';
import RootLayout from '@shared/ui/layouts/root-layout';
import type { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        path: ROUTE_PATH.MEMBERS,
        lazy: async () => {
          const m = await import('@pages/members/members');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.RECOMMEND,
        lazy: async () => {
          const m = await import('@pages/recommend/recommend');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.MEMBER_PORTFOLIO,
        lazy: async () => {
          const m = await import('@pages/members-portfolio/members-portfolio');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.MEMBER_PROFILE,
        lazy: async () => {
          const m = await import('@pages/members-profile/members-profile');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.MY_PORTFOLIO_DETAILS,
        lazy: async () => {
          const m =
            await import('@pages/my-portfolio-details/my-portfolio-details');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.CREATE_PORTFOLIO,
        lazy: async () => {
          const m = await import('@pages/create-portfolio/create-portfolio');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.EDIT_PORTFOLIO,
        lazy: async () => {
          const m = await import('@pages/edit-portfolio/edit-portfolio');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.MY_PROFILE,
        lazy: async () => {
          const m = await import('@pages/my-profile/my-profile');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.MY_PROFILE_EDIT,
        lazy: async () => {
          const m = await import('@pages/my-profile-edit/my-profile-edit');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.POSTS,
        lazy: async () => {
          const m = await import('@pages/posts/posts');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.POST_DETAILS,
        lazy: async () => {
          const m = await import('@pages/post-details/post-details');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.POST_CREATE,
        lazy: async () => {
          const m = await import('@pages/post-create/post-create');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.POST_EDIT,
        lazy: async () => {
          const m = await import('@pages/post-edit/post-edit');
          return { Component: m.default };
        },
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTE_PATH.LOGIN,
        lazy: async () => {
          const m = await import('@pages/login/login');
          return { Component: m.default };
        },
      },
      {
        path: ROUTE_PATH.SIGN_UP,
        lazy: async () => {
          const m = await import('@pages/signup/signup');
          return { Component: m.default };
        },
      },
    ],
  },
];
