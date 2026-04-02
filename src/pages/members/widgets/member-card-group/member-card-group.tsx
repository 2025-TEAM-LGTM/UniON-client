import type { MemberCardModel } from '@entities/members/model/adapters';
import MemberCard from '@widgets/member-card/member-card';

import * as styles from './member-card-group.css';

interface MemberCardGroupProps {
  members: MemberCardModel[];
}

const MemberCardGroup = ({ members }: MemberCardGroupProps) => {
  if (members.length === 0) {
    return (
      <section className={styles.emptyContainer}>
        <p>조건에 맞는 팀원이 없습니다.</p>
      </section>
    );
  }
  return (
    <section className={styles.grid} aria-label='팀원 목록'>
      {members.map((m) => (
        <MemberCard key={m.userId} member={m} />
      ))}
    </section>
  );
};

export default MemberCardGroup;
