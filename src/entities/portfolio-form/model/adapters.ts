import type { UploadedImageMeta } from '@shared/api/image-upload';

import type {
  CreatePortfolioRequest,
  PortfolioDetailResponse,
} from '../api/types';
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

export const toCreatePortfolioRequest = (
  values: PortfolioFormValues,
  imageMeta: UploadedImageMeta,
): CreatePortfolioRequest => {
  if (values.domainId == null || values.roleId == null) {
    throw new Error('필수 값이 누락되었습니다.');
  }

  return {
    title: values.title.trim(),
    summary: values.summary.trim(),
    domainId: values.domainId,
    roleId: values.roleId,
    headcount: values.headcount,
    externUrl: values.externUrl.trim(),
    Stext: values.Stext.trim(),
    Ttext: values.Ttext.trim(),
    Atext: values.Atext.trim(),
    Rtext: values.Rtext.trim(),
    imageKey: imageMeta.imageKey,
    imageSize: imageMeta.imageSize,
  };
};
