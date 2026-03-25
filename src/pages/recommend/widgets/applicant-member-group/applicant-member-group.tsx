import { type MemberCardModel } from '@entities/members/model/adapters';
import MemberCard from '@widgets/member-card/member-card';

import * as styles from './applicant-member-group.css';

interface ApplicantMemberGroupProps {
  members: MemberCardModel[];
}

const ApplicantMemberGroup = ({ members }: ApplicantMemberGroupProps) => {
  if (members.length === 0) {
    return (
      <section className={styles.emptyContainer}>
        <p>아직 지원한 팀원이 없어요.</p>
      </section>
    );
  }
  return (
    <section className={styles.grid} aria-label='지원한 팀원 목록'>
      {members.map((member) => (
        <MemberCard key={member.userId} member={member} />
      ))}
    </section>
  );
};

export default ApplicantMemberGroup;
