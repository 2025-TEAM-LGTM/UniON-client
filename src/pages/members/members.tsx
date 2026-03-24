import { toMemberCardModels } from '@entities/members/model/adapters';
import { filterMembers } from '@features/members/model/filter-members';
import type { MemberFiltersState } from '@features/members/model/filter-state';
import { EMPTY_MEMBER_FILTERS } from '@features/members/model/filter-state';
import { parseFieldSkillResponse } from '@features/members/model/parse-field-skill-response';
import type { PersonalityFilterItem } from '@features/members/types/member-filter-meta-response';
import { parseFieldRoleResponse } from '@shared/lib/filter/parse-field-role-response';
import Banner from '@shared/ui/components/banner/banner';
import MemberDropdownGroup from '@widgets/member-dropdown-group/member-dropdown-group';
import { useMemo, useState } from 'react';

import * as styles from './members.css';
import { MOCK_FIELD_ROLE_RESPONSE } from './mocks/mock-field-role-response';
import { MOCK_MEMBERS_RESPONSE } from './mocks/mock-members';
import { MOCK_PERSONALITY_FILTER_RESPONSE } from './mocks/mock-personality-filter-response';
import { MOCK_FIELD_SKILL_RESPONSE } from './mocks/mock-skill-options';
import MemberCardGroup from './widgets/member-card-group/member-card-group';

const MembersPage = () => {
  const [filters, setFilters] =
    useState<MemberFiltersState>(EMPTY_MEMBER_FILTERS);

  const members = MOCK_MEMBERS_RESPONSE.data.members;

  const { fields: roleFields, rolesByFieldOptions } = useMemo(
    () => parseFieldRoleResponse(MOCK_FIELD_ROLE_RESPONSE.data.items),
    [],
  );

  const { fields: skillFields, skillsByFieldOptions } = useMemo(
    () => parseFieldSkillResponse(MOCK_FIELD_SKILL_RESPONSE.data.items),
    [],
  );

  const personalityItems: PersonalityFilterItem[] =
    MOCK_PERSONALITY_FILTER_RESPONSE.data.items;

  const filteredMembers = useMemo(() => {
    return filterMembers(members, filters);
  }, [members, filters]);

  const memberCardModels = useMemo(() => {
    return toMemberCardModels(filteredMembers);
  }, [filteredMembers]);

  return (
    <>
      <section className={styles.bannerContainer}>
        <Banner />
      </section>

      <main className={styles.pageContainer}>
        <section className={styles.sectionHeader}>
          <p>전체 팀원 모아보기</p>
        </section>

        <section className={styles.dropdownContainer}>
          <MemberDropdownGroup
            roleFields={roleFields}
            rolesByFieldOptions={rolesByFieldOptions}
            skillFields={skillFields}
            skillsByFieldOptions={skillsByFieldOptions}
            personalityItems={personalityItems}
            value={filters}
            onChange={setFilters}
          />
        </section>

        <MemberCardGroup members={memberCardModels} />
      </main>
    </>
  );
};

export default MembersPage;

// TODO: API 연결 후 수정
// - mock 제거
// - dropdown API 연결
// - filterMembers 제거 → 서버 필터링으로 변경
