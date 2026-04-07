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
        userId: 20001,
        username: '하린',
        profileImageUrl: null,
        role: {
          id: 301,
          name: 'Frontend developer',
        },
        hardSkill: [
          { id: 3001, name: 'React' },
          { id: 3002, name: 'TypeScript' },
          { id: 3004, name: 'Next.js' },
          { id: 3005, name: 'Vanilla Extract' },
          { id: 3009, name: 'MySQL' },
        ],
        personality: {
          A: 1,
          B: 1,
          C: 0,
          D: 0,
          E: 1,
          F: 1,
          G: 1,
          H: 1,
          I: 0,
          J: 1,
          K: 1,
          L: 0,
          M: 1,
          N: 0,
        },
        mainStrength: 'TASK',
      },
      {
        userId: 20002,
        username: '서진',
        profileImageUrl: null,
        role: {
          id: 302,
          name: 'Backend developer',
        },
        hardSkill: [
          { id: 3006, name: 'Node.js' },
          { id: 3007, name: 'NestJS' },
          { id: 3009, name: 'MySQL' },
          { id: 3010, name: 'MongoDB' },
          { id: 3013, name: 'Python' },
        ],
        personality: {
          A: 0,
          B: 0,
          C: 1,
          D: 1,
          E: 1,
          F: 0,
          G: 1,
          H: 1,
          I: 0,
          J: 1,
          K: 0,
          L: 1,
          M: 1,
          N: 0,
        },
        mainStrength: 'PROBLEM',
      },
      {
        userId: 20003,
        username: '유진',
        profileImageUrl: null,
        role: {
          id: 304,
          name: 'Data/AI engineer',
        },
        hardSkill: [
          { id: 3013, name: 'Python' },
          { id: 3014, name: 'FastAPI' },
          { id: 3015, name: 'PyTorch' },
          { id: 3016, name: 'TensorFlow' },
          { id: 3009, name: 'MySQL' },
        ],
        personality: {
          A: 1,
          B: 0,
          C: 1,
          D: 0,
          E: 1,
          F: 1,
          G: 0,
          H: 1,
          I: 1,
          J: 0,
          K: 1,
          L: 1,
          M: 0,
          N: 1,
        },
        mainStrength: 'PROBLEM',
      },
      {
        userId: 20004,
        username: '노아',
        profileImageUrl: null,
        role: {
          id: 401,
          name: 'UI/UX Designer',
        },
        hardSkill: [
          { id: 4001, name: 'Figma' },
          { id: 4005, name: 'Framer' },
          { id: 4006, name: 'ProtoPie' },
          { id: 4009, name: 'Design System' },
          { id: 4010, name: 'Typography' },
        ],
        personality: {
          A: 0,
          B: 1,
          C: 1,
          D: 0,
          E: 1,
          F: 1,
          G: 0,
          H: 1,
          I: 1,
          J: 0,
          K: 1,
          L: 1,
          M: 0,
          N: 1,
        },
        mainStrength: 'PERSONALITY',
      },
      {
        userId: 20005,
        username: '채린',
        profileImageUrl: null,
        role: {
          id: 402,
          name: 'Graphic Designer',
        },
        hardSkill: [
          { id: 4001, name: 'Figma' },
          { id: 4002, name: 'Photoshop' },
          { id: 4003, name: 'Illustrator' },
          { id: 4007, name: 'Indesign' },
          { id: 4010, name: 'Typography' },
        ],
        personality: {
          A: 1,
          B: 1,
          C: 1,
          D: 0,
          E: 0,
          F: 1,
          G: 0,
          H: 1,
          I: 1,
          J: 1,
          K: 1,
          L: 0,
          M: 0,
          N: 1,
        },
        mainStrength: 'TASK',
      },
      {
        userId: 20006,
        username: '가람',
        profileImageUrl: null,
        role: {
          id: 102,
          name: 'Social Media Marketer',
        },
        hardSkill: [
          { id: 1005, name: 'Meta Ads Manager' },
          { id: 1007, name: 'Notion' },
          { id: 1008, name: 'Miro' },
          { id: 1010, name: 'Mailchimp' },
          { id: 1012, name: 'Canva' },
        ],
        personality: {
          A: 1,
          B: 1,
          C: 1,
          D: 1,
          E: 0,
          F: 1,
          G: 1,
          H: 1,
          I: 1,
          J: 1,
          K: 0,
          L: 0,
          M: 1,
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

        {/* <button
          type='button'
          className={styles.refreshButton}
          onClick={handleRefresh}
        >
          <span>새로고침</span>
          <ResetIcon className={styles.icon} />
        </button> */}
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

      <RecommendMemberGroup members={cardMembers} />
    </>
  );
};

export default RecommendSection;
