import { useGetPostDetail } from '@entities/post-details/api/use-get-post-detail';
import { useDeletePost } from '@entities/posts/api/use-delete-post';
import { useToggleApply } from '@entities/posts/api/use-toggle-apply';
import { ROUTE_BUILDER, ROUTE_PATH } from '@shared/constants/path';
import CtaButton from '@shared/ui/components/cta-button/cta-button';
import Loading from '@shared/ui/components/loading/loading';
import { useToast } from '@shared/ui/components/toast/toast-context';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as styles from './post-details.css';
import { toPostDetailHeaderProps } from './widgets/post-detail-header/adapter';
import PostDetailHeader from './widgets/post-detail-header/post-details-header';
import { toRecruitDetailTextProps } from './widgets/recruit-detail-text/adapter';
import RecruitDetailText from './widgets/recruit-detail-text/recruit-detail-text';
import { toRecruitInfoProps } from './widgets/recruit-info/adapter';
import RecruitInfo from './widgets/recruit-info/recruit-info';

const PostDetailPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { postId } = useParams<{ postId: string }>();
  const numericPostId = Number(postId);

  const { data, isLoading, isError } = useGetPostDetail(numericPostId);
  const { mutateAsync: toggleApply } = useToggleApply();
  const { mutateAsync: deletePost, isPending: isDeleting } = useDeletePost();

  const isAuthor = data?.owner ?? false;

  const [isApplied, setIsApplied] = useState(false);
  const pendingRef = useRef(false);

  useEffect(() => {
    if (data) setIsApplied(data.applied);
  }, [data]);

  const handleToggleApply = async () => {
    if (!postId || pendingRef.current) return;

    if (!Number.isInteger(numericPostId) || numericPostId <= 0) {
      toast.error('유효하지 않은 공고입니다.');
      return;
    }

    const wasApplied = isApplied;

    setIsApplied(!wasApplied);
    pendingRef.current = true;

    try {
      await toggleApply({ postId: numericPostId, wasApplied });
      toast.success(
        wasApplied ? '지원이 취소되었어요.' : '지원이 완료되었어요.',
      );
    } catch {
      setIsApplied(wasApplied);
      toast.error('서버 오류가 발생했어요. 잠시 후 다시 시도해 주세요.');
    } finally {
      pendingRef.current = false;
    }
  };

  const handleDelete = async () => {
    if (!postId) return;

    try {
      await deletePost(numericPostId);
      toast.success('공고가 삭제되었어요.');
      navigate(ROUTE_PATH.POSTS);
    } catch {
      toast.error('공고 삭제에 실패했어요. 다시 시도해 주세요.');
    }
  };

  const handleEdit = () => {
    if (!postId) return;
    toast.success('공고 수정이 완료되었어요.');
    navigate(ROUTE_BUILDER.postEdit(postId));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return (
      <div className={styles.pageContainer}>
        <p>공고를 불러올 수 없어요. 다시 시도해 주세요.</p>
      </div>
    );
  }

  const response = { status: 200, msg: 'OK', data };

  const headerProps = toPostDetailHeaderProps(response);
  const recruitInfoProps = toRecruitInfoProps(response);
  const recruitDetailTextProps = toRecruitDetailTextProps(response);

  return (
    <>
      <section className={styles.headerContainer}>
        <PostDetailHeader {...headerProps} />
      </section>

      <section className={styles.pageContainer}>
        <div className={styles.contentContainer}>
          <RecruitInfo {...recruitInfoProps} />
          <RecruitDetailText {...recruitDetailTextProps} />
        </div>

        <div className={styles.bottomContainer}>
          <div className={styles.ctaContainer}>
            {isAuthor ? (
              <>
                <CtaButton
                  color='gray'
                  onClick={handleDelete}
                  disabled={isDeleting}
                >
                  {isDeleting ? '삭제 중...' : '삭제하기'}
                </CtaButton>
                <CtaButton
                  color='primary'
                  onClick={handleEdit}
                  disabled={isDeleting}
                >
                  수정하기
                </CtaButton>
              </>
            ) : isApplied ? (
              <CtaButton color='gray' onClick={handleToggleApply}>
                지원 취소
              </CtaButton>
            ) : (
              <CtaButton color='primary' onClick={handleToggleApply}>
                지원하기
              </CtaButton>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetailPage;
