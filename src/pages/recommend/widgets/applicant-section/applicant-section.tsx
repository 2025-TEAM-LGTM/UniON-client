import { toMemberCardModels } from '@entities/members/model/adapters';
import { filterMembers } from '@features/members/model/filter-members';
import {
  EMPTY_MEMBER_FILTERS,
  type MemberFiltersState,
} from '@features/members/model/filter-state';
import { MOCK_FIELD_ROLE_RESPONSE } from '@pages/recommend/mock/mock-field-role-response';
import { MOCK_MEMBERS_RESPONSE } from '@pages/recommend/mock/mock-members-repsonse';
import { MOCK_PERSONALITY_FILTER_RESPONSE } from '@pages/recommend/mock/mock-personality-filter-response';
import { MOCK_FIELD_SKILL_RESPONSE } from '@pages/recommend/mock/mock-skill-options';
import { ResetIcon } from '@shared/assets/icons';
import { parseFieldRoleResponse } from '@shared/lib/filter/parse-field-role-response';
import { parseFieldSkillResponse } from '@shared/lib/filter/parse-field-skill-response';
import MemberDropdownGroup from '@widgets/member-dropdown-group/member-dropdown-group';
import { useMemo, useState } from 'react';

import ApplicantMemberGroup from '../applicant-member-group/applicant-member-group';
import * as styles from './applicant-section.css';

interface ApplicantSectionProps {
  postId: number;
  postTitle: string;
}

const ApplicantSection = ({ postId, postTitle }: ApplicantSectionProps) => {
  void postId; // TODO: 지원자 조회 API 연결 시 postId로 공고별 지원자 목록 조회

  const [filters, setFilters] =
    useState<MemberFiltersState>(EMPTY_MEMBER_FILTERS);

  const { fields: roleFields, rolesByFieldOptions } = useMemo(
    () => parseFieldRoleResponse(MOCK_FIELD_ROLE_RESPONSE.data.items),
    [],
  );

  const { fields: skillFields, skillsByFieldOptions } = useMemo(
    () => parseFieldSkillResponse(MOCK_FIELD_SKILL_RESPONSE.data.items),
    [],
  );

  const members = MOCK_MEMBERS_RESPONSE.data.members;

  const filteredMembers = useMemo(() => {
    return filterMembers(members, filters);
  }, [members, filters]);

  const cardMembers = useMemo(() => {
    return toMemberCardModels(filteredMembers);
  }, [filteredMembers]);

  const handleRefresh = () => {
    setFilters(EMPTY_MEMBER_FILTERS);
  };

  return (
    <>
      <section className={styles.sectionTitleContainer}>
        <p className={styles.sectionTitle}>'{postTitle}'에 지원한 팀원 보기</p>
      </section>

      <section className={styles.filterContainer}>
        <MemberDropdownGroup
          roleFields={roleFields}
          rolesByFieldOptions={rolesByFieldOptions}
          skillFields={skillFields}
          skillsByFieldOptions={skillsByFieldOptions}
          personalityItems={MOCK_PERSONALITY_FILTER_RESPONSE.data.items}
          value={filters}
          onChange={setFilters}
        />

        <button
          type='button'
          className={styles.refreshButton}
          onClick={handleRefresh}
        >
          <span>새로고침</span>
          <ResetIcon className={styles.icon} />
        </button>
      </section>

      <ApplicantMemberGroup members={cardMembers} />
    </>
  );
};

export default ApplicantSection;
