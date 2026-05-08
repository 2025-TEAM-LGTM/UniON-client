import type { ProfileResponse } from '@entities/profile/api/types';

export const MOCK_MEMBER_PROFILE_RESPONSE: ProfileResponse = {
  status: 200,
  msg: 'OK',
  data: {
    username: '멋쟁이',
    imageUrl: null,
    birthYear: 1999,
    mainRole: { id: 101, name: 'Content Marketer' },
    email: 'user_10008@gmail.com',
    university: { id: 108, name: '서울대학교' },
    entranceYear: 2019,
    status: 'DEFERRED',
    hardSkills: [
      { id: 121, name: 'GA4' },
      { id: 122, name: 'Google Trends' },
      { id: 123, name: 'SEMRush' },
    ],
    personality: {
      A: 0,
      B: 0,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 0,
      H: 1,
      I: 1,
      J: 1,
      K: 0,
      L: 0,
      M: 0,
      N: 0,
    },
  },
};
