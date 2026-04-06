import { ROUTE_BUILDER } from '@shared/constants/path';
import CtaButton from '@shared/ui/components/cta-button/cta-button';
import { useToast } from '@shared/ui/components/toast/toast-context';
import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { MOCK_POST_DETAIL } from './mock/mock-post-detail';
import * as styles from './post-details.css';
import { toPostDetailHeaderProps } from './widgets/post-detail-header/adapter';
import PostDetailHeader from './widgets/post-detail-header/post-details-header';
import { toRecruitDetailTextProps } from './widgets/recruit-detail-text/adapter';
import RecruitDetailText from './widgets/recruit-detail-text/recruit-detail-text';
import { toRecruitInfoProps } from './widgets/recruit-info/adapter';
import RecruitInfo from './widgets/recruit-info/recruit-info';

const requestToggleApply = async (postId: number, nextApplied: boolean) => {
  // TODO: API 연결
  await new Promise((resolve) => setTimeout(resolve, 300));

  return { postId, applied: nextApplied };
};

const PostDetailPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { postId } = useParams<{ postId: string }>();

  const response = MOCK_POST_DETAIL;

  const headerProps = toPostDetailHeaderProps(response);
  const recruitInfoProps = toRecruitInfoProps(response);
  const recruitDetailTextProps = toRecruitDetailTextProps(response);

  // TODO: API 연결 후 유저 권한/지원 여부 기반으로 분기
  const isAuthor = false;

  const [isApplied, setIsApplied] = useState(false);
  const pendingRef = useRef(false);

  const handleToggleApply = async () => {
    // TODO: 지원하기 API 연결
    if (!postId) return;
    if (pendingRef.current) return;

    const numericPostId = Number(postId);

    if (!Number.isInteger(numericPostId) || numericPostId <= 0) {
      toast.error('유효하지 않은 공고입니다.');
      return;
    }

    const wasApplied = isApplied;
    const nextApplied = !wasApplied;

    setIsApplied(nextApplied);
    pendingRef.current = true;

    try {
      await requestToggleApply(numericPostId, nextApplied);

      toast.success(
        nextApplied ? '지원이 완료되었어요.' : '지원이 취소되었어요.',
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
    // TODO: 삭제 전 confirm/modal 추가 고려
    toast.success('삭제가 완료되었어요.');
  };

  const handleEdit = () => {
    if (!postId) return;
    navigate(ROUTE_BUILDER.postEdit(postId));
  };

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
