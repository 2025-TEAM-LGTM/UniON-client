import { useGetFieldRole } from '@entities/field-role/api/use-field-role';
import { useGetMembers } from '@entities/members/api/use-get-members';
import { toMemberCardModels } from '@entities/members/model/adapters';
import { useGetPersonalityFilter } from '@entities/personality/api/use-get-personality-filter';
import { useGetSkills } from '@entities/skill/api/use-get-skills';
import type { MemberFiltersState } from '@features/members/model/filter-state';
import { EMPTY_MEMBER_FILTERS } from '@features/members/model/filter-state';
import type { PersonalityFilterItem } from '@features/members/types/member-filter-meta-response';
import { ResetIcon } from '@shared/assets/icons';
import { parseFieldRoleResponse } from '@shared/lib/filter/parse-field-role-response';
import { parseFieldSkillResponse } from '@shared/lib/filter/parse-field-skill-response';
import Banner from '@shared/ui/components/banner/banner';
import MemberDropdownGroup from '@widgets/member-dropdown-group/member-dropdown-group';
import { useMemo, useState } from 'react';

import * as styles from './members.css';
import MemberCardGroup from './widgets/member-card-group/member-card-group';

const MembersPage = () => {
  const [filters, setFilters] =
    useState<MemberFiltersState>(EMPTY_MEMBER_FILTERS);

  // personality 파라미터 변환: value가 1인 key만 추출
  const personalityParams = useMemo(
    () => filters.personalityFilters.map((f) => f.key),
    [filters.personalityFilters],
  );

  const { data: fieldRoleData } = useGetFieldRole();

  const { data: skillData } = useGetSkills();

  const { data: personalityData } = useGetPersonalityFilter();

  const {
    data: membersData,
    isLoading,
    isError,
  } = useGetMembers({
    r: filters.roleIds,
    hs: filters.skillIds,
    p: personalityParams,
  });

  const { fields: skillFields, skillsByFieldOptions } = useMemo(
    () => parseFieldSkillResponse(skillData ?? []),
    [skillData],
  );

  const { fields: roleFields, rolesByFieldOptions } = useMemo(
    () => parseFieldRoleResponse(fieldRoleData ?? []),
    [fieldRoleData],
  );

  const personalityItems: PersonalityFilterItem[] =
    personalityData?.items ?? [];

  const members = useMemo(() => membersData?.members ?? [], [membersData]);

  const memberCardModels = useMemo(
    () => toMemberCardModels(members),
    [members],
  );

  const handleRefresh = () => {
    setFilters(EMPTY_MEMBER_FILTERS);
  };

  return (
    <>
      <section className={styles.bannerContainer}>
        <Banner />
      </section>

      <main className={styles.pageContainer}>
        <section className={styles.sectionHeader}>
          <p>전체 팀원 모아보기</p>
        </section>

        <section className={styles.filterContainer}>
          <MemberDropdownGroup
            roleFields={roleFields}
            rolesByFieldOptions={rolesByFieldOptions}
            skillFields={skillFields}
            skillsByFieldOptions={skillsByFieldOptions}
            personalityItems={personalityItems}
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

        {isLoading && (
          <section className={styles.emptyContainer}>
            <p className={styles.emptyText}>불러오는 중...</p>
          </section>
        )}

        {isError && (
          <section className={styles.emptyContainer}>
            <p className={styles.emptyText}>
              오류가 발생했어요. 다시 시도해 주세요.
            </p>
          </section>
        )}

        {!isLoading && !isError && members.length === 0 && (
          <section className={styles.emptyContainer}>
            <p className={styles.emptyText}>검색 결과가 없어요!</p>
          </section>
        )}

        {!isLoading && !isError && members.length > 0 && (
          <MemberCardGroup members={memberCardModels} />
        )}
      </main>
    </>
  );
};

export default MembersPage;
