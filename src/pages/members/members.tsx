import { toMemberCardModels } from '@entities/members/model/adapters';
import Banner from '@shared/ui/components/banner/banner';

import * as styles from './members.css';
import { MOCK_MEMBERS_RESPONSE } from './mocks/mock-members';
import MemberCardGroup from './widgets/member-card-group/member-card-group';

const MembersPage = () => {
  const members = MOCK_MEMBERS_RESPONSE.data.members;
  const memberCardModels = toMemberCardModels(members);
  return (
    <>
      <section className={styles.bannerContainer}>
        <Banner />
      </section>

      <main className={styles.pageContainer}>
        <section className={styles.sectionHeader}>
          <p>전체 팀원 모아보기</p>
        </section>
        <MemberCardGroup members={memberCardModels} />
      </main>
    </>
  );
};

export default MembersPage;
