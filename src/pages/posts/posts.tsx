import { filterPosts } from '@features/posts/model/filter-posts';
import { EMPTY_FILTERS } from '@features/posts/model/filters-state';
import { parseFieldRoleResponse } from '@shared/lib/filter/parse-field-role-response';
import Banner from '@shared/ui/components/banner/banner';
import Button from '@shared/ui/components/button/button';
import { useToast } from '@shared/ui/components/toast/toast-context';
import PostDropdownGroup from '@widgets/post-dropdown-group/post-dropdown-group';
import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MOCK_DOMAIN_OPTIONS } from './mock/mock-domain-options';
import { MOCK_FIELD_ROLE_RESPONSE } from './mock/mock-field-role-response';
import { MOCK_POST_RESPONSE } from './mock/mock-posts-response';
import * as styles from './post.css';
import PostCardGroup from './widgets/post-card-group/post-card-group';

const PostsPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const onClick = () => navigate('/posts/new');

  const pendingRef = useRef<Set<number>>(new Set());

  const posts = useMemo(() => MOCK_POST_RESPONSE.data.posts, []);

  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const { fields, rolesByFieldOptions } = useMemo(
    () => parseFieldRoleResponse(MOCK_FIELD_ROLE_RESPONSE.data),
    [],
  );

  const filteredPosts = useMemo(
    () => filterPosts(posts, filters),
    [posts, filters],
  );

  const [appliedIds, setAppliedIds] = useState<Set<number>>(() => {
    const set = new Set<number>();

    posts.forEach((p) => {
      if (p.applied) set.add(p.postId);
    });

    return set;
  });

  const requestToggleApply = async (postId: number, nextApplied: boolean) => {
    // TODO: API 연결 후 수정
    void postId;
    void nextApplied;
    if (Math.random() < 0.2) throw new Error('server error');
  };

  const handleToggleApply = async (postId: number) => {
    // TODO: API 연결
    if (pendingRef.current.has(postId)) return;

    const wasApplied = appliedIds.has(postId);
    const nextApplied = !wasApplied;

    setAppliedIds((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) next.delete(postId);
      else next.add(postId);
      return next;
    });

    pendingRef.current.add(postId);

    try {
      // TODO: 수정
      await requestToggleApply(postId, nextApplied);

      toast.success(
        nextApplied ? '지원이 완료되었어요' : '지원이 취소되었어요',
      );
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

        <section className={styles.dropdownContainer}>
          <PostDropdownGroup
            domains={MOCK_DOMAIN_OPTIONS}
            fields={fields}
            rolesByFieldOptions={rolesByFieldOptions}
            value={filters}
            onChange={setFilters}
          />
        </section>

        {filteredPosts.length === 0 ? (
          <section className={styles.emptyContainer}>
            <p className={styles.emptyText}>검색 결과가 없어요!</p>
          </section>
        ) : (
          <PostCardGroup
            posts={filteredPosts}
            appliedIds={appliedIds}
            onToggleApply={handleToggleApply}
          />
        )}
      </main>
    </>
  );
};

export default PostsPage;
