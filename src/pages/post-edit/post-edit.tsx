import { useGetDomains } from '@entities/domain/api/use-get-domain';
import { useGetFieldRole } from '@entities/field-role/api/use-field-role';
import { useGetPostDetail } from '@entities/post-details/api/use-get-post-detail';
import {
  toPostDetailLeader,
  toPostFormValues,
} from '@entities/post-edit/model/adapters';
import { useUpdatePost } from '@entities/posts/api/use-update-post';
import {
  isPostFormValid,
  validatePostForm,
} from '@features/posts/model/post-form/validate-post-form';
import { ROUTE_BUILDER, ROUTE_PATH } from '@shared/constants/path';
import { parseFieldRoleResponse } from '@shared/lib/filter/parse-field-role-response';
import Loading from '@shared/ui/components/loading/loading';
import { useToast } from '@shared/ui/components/toast/toast-context';
import { getCurrentUserId } from '@shared/utils/auth/token';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import PostFormContent from '@widgets/post-form/post-form-content';
import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as styles from './post-edit.css';

interface PostEditFormProps {
  postId: number;
  initialValues: ReturnType<typeof toPostFormValues>;
  domainOptions: ReturnType<typeof Array<{ id: number; name: string }>>;
  roleFields: { id: number; name: string }[];
  rolesByFieldOptions: Record<number, { id: number; name: string }[]>;
  allRoleOptions: { id: number; name: string }[];
}

const PostEditForm = ({
  postId,
  initialValues,
  domainOptions,
  roleFields,
  rolesByFieldOptions,
  allRoleOptions,
}: PostEditFormProps) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [formValues, setFormValues] = useState(() => initialValues);
  const { mutateAsync: updatePost, isPending } = useUpdatePost(postId);

  const handleSubmit = async () => {
    if (!isPostFormValid(formValues)) {
      const errors = validatePostForm(formValues);
      const firstError = Object.values(errors)[0];
      toast.error(firstError ?? '입력값을 확인해주세요.');
      return;
    }

    try {
      await updatePost(formValues);
      toast.success('공고가 수정되었어요.');
      navigate(ROUTE_BUILDER.postDetails(String(postId)));
    } catch {
      toast.error('공고 수정에 실패했어요. 다시 시도해 주세요.');
    }
  };

  return (
    <PostFormContent
      values={formValues}
      onChange={setFormValues}
      domainOptions={domainOptions}
      roleFields={roleFields}
      rolesByFieldOptions={rolesByFieldOptions}
      allRoleOptions={allRoleOptions}
      onSubmit={handleSubmit}
      submitLabel={isPending ? '수정 중...' : '수정하기'}
      disabled={isPending}
    />
  );
};

const PostEditPage = () => {
  const { postId } = useParams();
  const numericPostId = Number(postId);

  const {
    data: postDetail,
    isLoading,
    isError,
  } = useGetPostDetail(numericPostId);
  const { data: domainData } = useGetDomains();
  const { data: fieldRoleData } = useGetFieldRole();

  const { fields: roleFields, rolesByFieldOptions } = useMemo(
    () => parseFieldRoleResponse(fieldRoleData ?? []),
    [fieldRoleData],
  );

  const allRoleOptions = useMemo(
    () => Object.values(rolesByFieldOptions).flat(),
    [rolesByFieldOptions],
  );

  const domainOptions = domainData ?? [];

  if (isLoading) return <Loading />;

  if (isError || postDetail == null || postId == null) {
    return (
      <main className={styles.pageContainer}>
        <p>공고를 불러올 수 없어요.</p>
      </main>
    );
  }

  const leader = toPostDetailLeader(postDetail);
  const currentUserId = getCurrentUserId();
  const isAuthor = currentUserId != null && leader.userId === currentUserId;

  if (!isAuthor) {
    return (
      <main className={styles.pageContainer}>
        <p>수정 권한이 없어요.</p>
      </main>
    );
  }

  return (
    <>
      <section className={styles.headerContainer}>
        <PageBackHeader
          title='공고 수정'
          backLabel='목록으로'
          fallbackPath={ROUTE_PATH.POSTS}
        />
      </section>

      <main className={styles.pageContainer}>
        <PostEditForm
          postId={numericPostId}
          initialValues={toPostFormValues(postDetail)}
          domainOptions={domainOptions}
          roleFields={roleFields}
          rolesByFieldOptions={rolesByFieldOptions}
          allRoleOptions={allRoleOptions}
        />
      </main>
    </>
  );
};

export default PostEditPage;
