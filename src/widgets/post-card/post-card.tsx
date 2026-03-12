import { TeamIcon } from '@shared/assets/icons';
import Button from '@shared/ui/components/button/button';
import Chip from '@shared/ui/components/chip/chip';
import { Link } from 'react-router-dom';

import * as styles from './post-card.css';

export type Recruit = { roleId: number; roleName: string; roleCount: number };
export type Domain = { id: number; name: string };

export interface PostCardProps {
  postId: number;
  title: string;
  domains: Domain[];
  dday: number;
  recruits: Recruit[];
  nowCount: number;
  applied: boolean;
  onToggleApply: (postId: number) => void;
}

const formatRecruits = (recruits: Recruit[] = [], visibleCount = 2) => {
  const visible = recruits.slice(0, visibleCount);
  const hasMore = recruits.length > visibleCount;

  const text = visible.map((r) => `${r.roleName} ${r.roleCount}명`).join('\n');

  return hasMore ? `${text}...` : text;
};

const PostCard = ({
  postId,
  title,
  domains,
  dday,
  recruits,
  nowCount,
  applied,
  onToggleApply,
}: PostCardProps) => {
  return (
    <article className={styles.cardContainer} aria-label={title}>
      <Link
        to={`/posts/${postId}`}
        aria-label={`${title} 상세 페이지로 이동`}
        className={styles.overlay}
      />
      <span className={styles.dday}>D-{dday}</span>

      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
        <div className={styles.roleContainer}>
          <p className={styles.role}>{formatRecruits(recruits)}</p>
        </div>
      </div>

      <div className={styles.nowCountContainer}>
        <TeamIcon className={styles.iconContainer} />
        <p>{nowCount}명</p>
      </div>

      <div className={styles.domainContainer}>
        {domains.map((d) => (
          <Chip key={d.id}>{d.name}</Chip>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Button
          color={applied ? 'gray' : 'primary'}
          onClick={() => onToggleApply(postId)}
        >
          {applied ? '지원 취소' : '지원하기'}
        </Button>
      </div>
    </article>
  );
};

export default PostCard;
