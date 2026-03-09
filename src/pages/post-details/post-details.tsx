import { ROUTE_BUILDER } from '@shared/constants/path';
import CtaButton from '@shared/ui/components/cta-button/cta-button';
import { useToast } from '@shared/ui/components/toast/toast-context';
import { useNavigate, useParams } from 'react-router-dom';

import { MOCK_POST_DETAIL } from './mock/mock-post-detail';
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

  const response = MOCK_POST_DETAIL;

  const headerProps = toPostDetailHeaderProps(response);
  const recruitInfoProps = toRecruitInfoProps(response);
  const recruitDetailTextProps = toRecruitDetailTextProps(response);

  // TODO: API 연결 후 유저 권한/지원 여부 기반으로 분기
  const isAuthor = false;

  const handleApply = () => {
    // TODO: 지원하기 API 연결
    toast.success('지원이 완료되었어요.');
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
        <PostDetailHeader
          {...headerProps}
          onBackClick={() => {
            window.history.back();
          }}
        />
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
            ) : (
              <CtaButton color='primary' onClick={handleApply}>
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
