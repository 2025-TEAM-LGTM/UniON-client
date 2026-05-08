import type { PostImageValue } from '@entities/posts/model/post-form/post-form';

export interface PortfolioFormValues {
  title: string;
  summary: string;
  domainId: number | null;
  fieldId: number | null;
  roleId: number | null;
  headcount: number;
  externUrl: string;
  Stext: string;
  Ttext: string;
  Atext: string;
  Rtext: string;
  image: PostImageValue;
}

export const createEmptyPortfolioFormValues = (): PortfolioFormValues => ({
  title: '',
  summary: '',
  domainId: null,
  fieldId: null,
  roleId: null,
  headcount: 1,
  externUrl: '',
  Stext: '',
  Ttext: '',
  Atext: '',
  Rtext: '',
  image: {
    file: null,
    previewUrl: null,
  },
});
