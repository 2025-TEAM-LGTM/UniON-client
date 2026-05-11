import { useGetPostDetail } from '@entities/post-details/api/use-get-post-detail';
import { useToggleApply } from '@entities/posts/api/use-toggle-apply';
import { ROUTE_BUILDER } from '@shared/constants/path';
import CtaButton from '@shared/ui/components/cta-button/cta-button';
import { useToast } from '@shared/ui/components/toast/toast-context';
import { useRef, useState } from 'react';
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

  const isAuthor = false; // TODO: 유저 권한 기반으로 분기

  const [isApplied, setIsApplied] = useState(false);
  const pendingRef = useRef(false);

  // useEffect(() => {
  //   if (data) setIsApplied(data.applied ?? false);
  // }, [data]);

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

  const handleDelete = () => {
    // TODO: 삭제하기 API 연결
    toast.success('삭제가 완료되었어요.');
  };

  const handleEdit = () => {
    if (!postId) return;
    navigate(ROUTE_BUILDER.postEdit(postId));
  };

  if (isLoading) {
    return (
      <div className={styles.pageContainer}>
        <p>불러오는 중...</p>
      </div>
    );
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
                <CtaButton color='gray' onClick={handleDelete}>
                  삭제하기
                </CtaButton>
                <CtaButton color='primary' onClick={handleEdit}>
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
