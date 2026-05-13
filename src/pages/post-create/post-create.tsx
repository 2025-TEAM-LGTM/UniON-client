import { useGetDomains } from '@entities/domain/api/use-get-domain';
import { useGetFieldRole } from '@entities/field-role/api/use-field-role';
import { useCreatePost } from '@entities/post-create/api/use-create-post';
import { createEmptyPostFormValues } from '@entities/posts/model/post-form/post-form';
import {
  isPostFormValid,
  validatePostForm,
} from '@features/posts/model/post-form/validate-post-form';
import { ROUTE_BUILDER, ROUTE_PATH } from '@shared/constants/path';
import { parseFieldRoleResponse } from '@shared/lib/filter/parse-field-role-response';
import { useToast } from '@shared/ui/components/toast/toast-context';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import PostFormContent from '@widgets/post-form/post-form-content';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './post-create.css';

const PostCreatePage = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [formValues, setFormValues] = useState(createEmptyPostFormValues());

  const { data: domainData } = useGetDomains();
  const { data: fieldRoleData } = useGetFieldRole();
  const { mutateAsync: createPost, isPending } = useCreatePost();

  const domainOptions = domainData ?? [];

  const {
    fields: roleFields,
    rolesByFieldOptions,
    allRoleOptions,
  } = useMemo(() => {
    const parsed = parseFieldRoleResponse(fieldRoleData ?? []);
    const allRoleOptions = Object.values(parsed.rolesByFieldOptions).flat();
    return { ...parsed, allRoleOptions };
  }, [fieldRoleData]);

  const handleSubmit = async () => {
    if (!isPostFormValid(formValues)) {
      const errors = validatePostForm(formValues);
      const firstError = Object.values(errors)[0];
      toast.error(firstError ?? '입력값을 확인해주세요.');
      return;
    }

    try {
      const { postId } = await createPost(formValues);
      toast.success('공고가 업로드되었어요.');
      navigate(ROUTE_BUILDER.postDetails(String(postId)));
    } catch {
      toast.error('공고 업로드에 실패했어요. 다시 시도해 주세요.');
    }
  };
  return (
    <>
      <section className={styles.headerContainer}>
        <PageBackHeader
          title='글쓰기'
          backLabel='목록으로'
          fallbackPath={ROUTE_PATH.POSTS}
        />
      </section>

      <main className={styles.pageContainer}>
        <PostFormContent
          values={formValues}
          onChange={setFormValues}
          domainOptions={domainOptions}
          roleFields={roleFields}
          rolesByFieldOptions={rolesByFieldOptions}
          allRoleOptions={allRoleOptions}
          onSubmit={handleSubmit}
          submitLabel={isPending ? '업로드 중...' : '업로드'}
        />
      </main>
    </>
  );
};

export default PostCreatePage;
