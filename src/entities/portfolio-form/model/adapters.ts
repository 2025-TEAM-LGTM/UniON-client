import type { PortfolioDetailResponse } from '../api/types';
import type { PortfolioFormValues } from './portfolio-form';

export const toPortfolioFormValues = (
  detail: PortfolioDetailResponse,
): PortfolioFormValues => ({
  title: detail.title,
  summary: detail.summary,
  domainId: detail.domain.id,
  fieldId: null,
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
