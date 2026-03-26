import type { MemberCardModel } from '@entities/members/model/adapters';
import MemberCard from '@widgets/member-card/member-card';

import * as styles from './recommend-member-group.css';

interface RecommendMemberGroupProps {
  members: MemberCardModel[];
}

const RecommendMemberGroup = ({ members }: RecommendMemberGroupProps) => {
  if (members.length === 0) {
    return (
      <section className={styles.emptyContainer}>
        <p className={styles.emptyText}>조건에 맞는 추천 팀원이 없어요.</p>
      </section>
    );
  }

  return (
    <section className={styles.grid} aria-label='추천 팀원 목록'>
      {members.map((member) => (
        <MemberCard key={member.userId} member={member} />
      ))}
    </section>
  );
};

export default RecommendMemberGroup;
