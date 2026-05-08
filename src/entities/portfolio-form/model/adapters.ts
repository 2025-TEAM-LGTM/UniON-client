import { MOCK_ROLES_BY_FIELD_OPTIONS } from '@pages/post-create/mocks/mock-post-role-options';

import type { PortfolioDetailResponse } from '../api/types';
import type { PortfolioFormValues } from './portfolio-form';

const findFieldIdByRoleId = (roleId: number): number | null => {
  const entry = Object.entries(MOCK_ROLES_BY_FIELD_OPTIONS).find(([, roles]) =>
    roles.some((role) => role.id === roleId),
  );

  return entry != null ? Number(entry[0]) : null;
};

export const toPortfolioFormValues = (
  detail: PortfolioDetailResponse,
): PortfolioFormValues => ({
  title: detail.title,
  summary: detail.summary,
  domainId: detail.domain.id,
  fieldId: findFieldIdByRoleId(detail.role.id),
  roleId: detail.role.id,
  headcount: detail.headcount,
  externUrl: detail.externUrl,
  Stext: detail.Stext,
  Ttext: detail.Ttext,
  Atext: detail.Atext,
  Rtext: detail.Rtext,
  image: {
    file: null,
    previewUrl: detail.imageUrl,
  },
});
