import type { GetRecommendMembersResponse } from '@entities/recommend/api/types';
import { filterMembers } from '@features/members/model/filter-members';
import {
  EMPTY_MEMBER_FILTERS,
  type MemberFiltersState,
} from '@features/members/model/filter-state';
import { toRecommendMemberCardModels } from '@features/recommend/model/to-main-strength-label';
import { MOCK_FIELD_ROLE_RESPONSE } from '@pages/members/mocks/mock-field-role-response';
import { MOCK_PERSONALITY_FILTER_RESPONSE } from '@pages/members/mocks/mock-personality-filter-response';
import { MOCK_FIELD_SKILL_RESPONSE } from '@pages/members/mocks/mock-skill-options';
import { ResetIcon } from '@shared/assets/icons';
import { parseFieldRoleResponse } from '@shared/lib/filter/parse-field-role-response';
import { parseFieldSkillResponse } from '@shared/lib/filter/parse-field-skill-response';
import MemberDropdownGroup from '@widgets/member-dropdown-group/member-dropdown-group';
import { useMemo, useState } from 'react';

import RecommendMemberGroup from '../recommend-member-group/recommend-member-group';
import * as styles from './recommend-section.css';

interface RecommendSectionProps {
  postId: number;
}

interface RecommendFilterMember {
  userId: number;
  username: string;
  imageUrl: string | null;
  role: {
    id: number;
    name: string;
  };
  hardSkills: {
    id: number;
    name: string;
  }[];
  personality: GetRecommendMembersResponse['data']['members'][number]['personality'];
  mainStrength?: string;
}

const MOCK_RECOMMEND_RESPONSE: GetRecommendMembersResponse = {
  status: 200,
  msg: 'OK',
  data: {
    title: 'AI 기반 팀매칭 서비스 프론트엔드 모집',
    members: [
      {
        userId: 1,
        username: 'username1',
        profileImageUrl: null,
        role: {
          id: 1,
          name: 'Backend Developer',
        },
        hardSkill: [
          { id: 1, name: 'React' },
          { id: 2, name: 'Spring Boot' },
          { id: 3, name: 'Java' },
        ],
        personality: {
          A: 0,
          B: 0,
          C: 1,
          D: 0,
          E: 0,
          F: 1,
          G: 0,
          H: 1,
          I: 0,
          J: 0,
          K: 1,
          L: 0,
          M: 0,
          N: 1,
        },
        mainStrength: 'PROBLEM',
      },
      {
        userId: 2,
        username: 'username2',
        profileImageUrl: null,
        role: {
          id: 2,
          name: 'Backend Developer',
        },
        hardSkill: [
          { id: 1, name: 'React' },
          { id: 2, name: 'Spring Boot' },
        ],
        personality: {
          A: 0,
          B: 0,
          C: 1,
          D: 0,
          E: 0,
          F: 1,
          G: 0,
          H: 1,
          I: 0,
          J: 0,
          K: 1,
          L: 0,
          M: 0,
          N: 1,
        },
        mainStrength: 'TASK',
      },
      {
        userId: 3,
        username: 'username3',
        profileImageUrl: null,
        role: {
          id: 3,
          name: 'Backend Developer',
        },
        hardSkill: [
          { id: 1, name: 'Python' },
          { id: 2, name: 'FastAPI' },
        ],
        personality: {
          A: 0,
          B: 0,
          C: 1,
          D: 0,
          E: 0,
          F: 1,
          G: 0,
          H: 1,
          I: 0,
          J: 0,
          K: 1,
          L: 0,
          M: 0,
          N: 1,
        },
        mainStrength: 'PERSONALITY',
      },
    ],
  },
};

const RecommendSection = ({ postId }: RecommendSectionProps) => {
  void postId;
  // TODO: 추천 팀원 조회 API 연결 시 postId를 endpoint에 포함해 공고별 추천 팀원 목록을 조회한다.
  // TODO: 추천 팀원 조회 API 연결 시 필터 값(roleIds, skillIds, personalityFilters)을 query string으로 변환해 함께 요청한다.
  // TODO: API 연동 이후 MOCK_RECOMMEND_RESPONSE는 제거하고 서버 응답 data를 사용한다.

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

  const members = MOCK_RECOMMEND_RESPONSE.data.members;

  const membersForFilter = useMemo<RecommendFilterMember[]>(() => {
    return members.map((member) => ({
      userId: member.userId,
      username: member.username,
      imageUrl: member.profileImageUrl,
      role: member.role,
      hardSkills: member.hardSkill ?? [],
      personality: member.personality,
      mainStrength: member.mainStrength,
    }));
  }, [members]);

  const filteredMembers = useMemo<RecommendFilterMember[]>(() => {
    // TODO: API 연결 이후에는 서버 필터링 결과를 그대로 사용할 수 있으면
    // 이 클라이언트 필터링 로직은 제거하거나 fallback 용도로만 유지한다.
    return filterMembers(membersForFilter, filters) as RecommendFilterMember[];
  }, [membersForFilter, filters]);

  const cardMembers = useMemo(() => {
    return toRecommendMemberCardModels(
      filteredMembers.map((member) => ({
        userId: member.userId,
        username: member.username,
        profileImageUrl: member.imageUrl,
        role: member.role,
        hardSkill: member.hardSkills,
        personality: member.personality,
        mainStrength: member.mainStrength,
      })),
    );
  }, [filteredMembers]);

  const handleRefresh = () => {
    setFilters(EMPTY_MEMBER_FILTERS);
    // TODO: API 연결 이후에는 필터 초기화와 함께 추천 팀원 목록 재조회도 함께 수행한다.
  };

  return (
    <>
      <section className={styles.sectionTitleContainer}>
        <p className={styles.sectionTitle}>
          '{MOCK_RECOMMEND_RESPONSE.data.title}'에 핏한 팀원 보기
        </p>
        <button
          type='button'
          className={styles.refreshButton}
          onClick={handleRefresh}
        >
          <span>새로고침</span>
          <ResetIcon className={styles.icon} />
        </button>
      </section>

      <section className={styles.dropdownContainer}>
        <MemberDropdownGroup
          roleFields={roleFields}
          rolesByFieldOptions={rolesByFieldOptions}
          skillFields={skillFields}
          skillsByFieldOptions={skillsByFieldOptions}
          personalityItems={MOCK_PERSONALITY_FILTER_RESPONSE.data.items}
          value={filters}
          onChange={setFilters}
        />
      </section>

      <RecommendMemberGroup members={cardMembers} />
    </>
  );
};

export default RecommendSection;
