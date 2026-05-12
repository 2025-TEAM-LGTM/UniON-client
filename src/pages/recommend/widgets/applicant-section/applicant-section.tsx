import { useGetApplicants } from '@entities/applicant/api/use-get-applicant';
import { toApplicantMemberCardModels } from '@entities/applicant/model/adapter';
import { useGetFieldRole } from '@entities/field-role/api/use-field-role';
import { useGetPersonalityFilter } from '@entities/personality/api/use-get-personality-filter';
import { useGetSkills } from '@entities/skill/api/use-get-skills';
import {
  EMPTY_MEMBER_FILTERS,
  type MemberFiltersState,
} from '@features/members/model/filter-state';
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
  const [filters, setFilters] =
    useState<MemberFiltersState>(EMPTY_MEMBER_FILTERS);

  const personalityParams = useMemo(
    () => filters.personalityFilters.map((f) => f.key),
    [filters.personalityFilters],
  );

  const { data: fieldRoleData } = useGetFieldRole();
  const { data: skillData } = useGetSkills();
  const { data: personalityData } = useGetPersonalityFilter();
  const { data, isLoading, isError } = useGetApplicants(postId, {
    r: filters.roleIds,
    hs: filters.skillIds,
    p: personalityParams,
  });

  const { fields: roleFields, rolesByFieldOptions } = useMemo(
    () => parseFieldRoleResponse(fieldRoleData ?? []),
    [fieldRoleData],
  );

  const { fields: skillFields, skillsByFieldOptions } = useMemo(
    () => parseFieldSkillResponse(skillData ?? []),
    [skillData],
  );

  const members = useMemo(() => data?.members ?? [], [data]);

  const cardMembers = useMemo(
    () => toApplicantMemberCardModels(members),
    [members],
  );

  const handleRefresh = () => setFilters(EMPTY_MEMBER_FILTERS);

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
          personalityItems={personalityData?.items ?? []}
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

      {isLoading && <p>불러오는 중...</p>}
      {isError && <p>오류가 발생했어요. 다시 시도해 주세요.</p>}
      {!isLoading && !isError && <ApplicantMemberGroup members={cardMembers} />}
    </>
  );
};

export default ApplicantSection;
