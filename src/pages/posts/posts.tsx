import { useGetDomains } from '@entities/domain/api/use-get-domain';
import { useGetFieldRole } from '@entities/field-role/api/use-field-role';
import { useGetPosts } from '@entities/posts/api/use-get-posts';
import { useToggleApply } from '@entities/posts/api/use-toggle-apply';
import { EMPTY_FILTERS } from '@features/posts/model/filters-state';
import { ResetIcon } from '@shared/assets/icons';
import { parseFieldRoleResponse } from '@shared/lib/filter/parse-field-role-response';
import Banner from '@shared/ui/components/banner/banner';
import Button from '@shared/ui/components/button/button';
import Loading from '@shared/ui/components/loading/loading';
import { useToast } from '@shared/ui/components/toast/toast-context';
import PostDropdownGroup from '@widgets/post-dropdown-group/post-dropdown-group';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './post.css';
import PostCardGroup from './widgets/post-card-group/post-card-group';

const PostsPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const onClick = () => navigate('/posts/new');

  const pendingRef = useRef<Set<number>>(new Set());
  const [filters, setFilters] = useState(EMPTY_FILTERS);

  const { data: fieldRoleData } = useGetFieldRole();
  const { data: domainData } = useGetDomains();
  const {
    data: postsData,
    isLoading,
    isError,
  } = useGetPosts({
    d: filters.domainIds,
    f: filters.fieldId,
    r: filters.roleIds,
  });
  const { mutateAsync: toggleApply } = useToggleApply();

  const { fields, rolesByFieldOptions } = useMemo(
    () => parseFieldRoleResponse(fieldRoleData ?? []),
    [fieldRoleData],
  );

  const domains = domainData ?? [];
  const posts = useMemo(() => postsData?.posts ?? [], [postsData]);

  const [appliedIds, setAppliedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    const set = new Set<number>();
    posts.forEach((p) => {
      if (p.applied) set.add(p.postId);
    });
    setAppliedIds(set);
  }, [posts]);

  const handleToggleApply = async (postId: number) => {
    if (pendingRef.current.has(postId)) return;

    const wasApplied = appliedIds.has(postId);

    setAppliedIds((prev) => {
      const next = new Set(prev);
      if (wasApplied) next.delete(postId);
      else next.add(postId);
      return next;
    });

    pendingRef.current.add(postId);

    try {
      await toggleApply({ postId, wasApplied });
      toast.success(wasApplied ? '지원이 취소되었어요' : '지원이 완료되었어요');
    } catch {
      setAppliedIds((prev) => {
        const next = new Set(prev);
        if (wasApplied) next.add(postId);
        else next.delete(postId);
        return next;
      });
      toast.error('서버 오류가 발생했어요. 잠시 후 다시 시도해 주세요.');
    } finally {
      pendingRef.current.delete(postId);
    }
  };

  const handleRefresh = () => {
    setFilters(EMPTY_FILTERS);
    console.log(import.meta.env.VITE_API_BASE_URL);
  };

  return (
    <>
      <section className={styles.bannerContainer}>
        <Banner />
      </section>

      <main className={styles.pageContainer}>
        <section className={styles.sectionHeader}>
          <p>전체 공고 모아보기</p>
          <div className={styles.writeButtonContainer}>
            <Button color='primary' onClick={onClick}>
              글쓰기
            </Button>
          </div>
        </section>

        <section className={styles.filterContainer}>
          <PostDropdownGroup
            domains={domains}
            fields={fields}
            rolesByFieldOptions={rolesByFieldOptions}
            value={filters}
            onChange={setFilters}
          />
          <button
            type='button'
            className={styles.refreshButton}
            onClick={handleRefresh}
          >
            <span>새로고침</span>
            <ResetIcon className={styles.icon} />
          </button>
        </section>

        {isLoading && <Loading />}

        {isError && (
          <section className={styles.emptyContainer}>
            <p className={styles.emptyText}>
              오류가 발생했어요. 다시 시도해 주세요.
            </p>
          </section>
        )}

        {!isLoading && !isError && posts.length === 0 && (
          <section className={styles.emptyContainer}>
            <p className={styles.emptyText}>검색 결과가 없어요!</p>
          </section>
        )}

        {!isLoading && !isError && posts.length > 0 && (
          <PostCardGroup
            posts={posts}
            appliedIds={appliedIds}
            onToggleApply={handleToggleApply}
          />
        )}
      </main>
    </>
  );
};

export default PostsPage;
