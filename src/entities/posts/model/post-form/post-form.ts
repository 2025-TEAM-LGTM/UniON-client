import type { TeamCulture } from '@shared/utils/team-culture/types';

export interface RoleCountValue {
  roleId: number;
  count: number;
}

export interface PostImageValue {
  file: File | null;
  previewUrl: string | null;
}

export type DraftTeamCulture = Partial<TeamCulture>;

export interface PostFormValues {
  title: string;
  domainIds: number[];
  recruitPeriod: {
    startDate: string;
    endDate: string;
  };
  homepageUrl: string;
  contact: string;
  currentRoles: RoleCountValue[];
  recruitRoles: RoleCountValue[];
  seeking: string;
  aboutUs: string;
  teamCulture: DraftTeamCulture;
  image: PostImageValue;
}

export const createEmptyPostFormValues = (): PostFormValues => {
  return {
    title: '',
    domainIds: [],
    recruitPeriod: {
      startDate: '',
      endDate: '',
    },
    homepageUrl: '',
    contact: '',
    currentRoles: [],
    recruitRoles: [],
    seeking: '',
    aboutUs: '',
    teamCulture: {},
    image: {
      file: null,
      previewUrl: null,
    },
  };
};
