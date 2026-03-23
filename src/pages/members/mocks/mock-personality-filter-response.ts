import type { PersonalityFilterResponse } from '@features/members/types/member-filter-meta-response';

export const MOCK_PERSONALITY_FILTER_RESPONSE: PersonalityFilterResponse = {
  status: 200,
  msg: 'OK',
  data: {
    items: [
      {
        key: 'A',
        label: '의사결정 구조',
        first: { code: 0, name: '수평적 논의형' },
        second: { code: 1, name: '리더 중심형' },
      },
      {
        key: 'B',
        label: '업무 진행 방식',
        first: { code: 0, name: '체계적/계획형' },
        second: { code: 1, name: '유연한/즉흥형' },
      },
      {
        key: 'C',
        label: '피드백 문화',
        first: { code: 0, name: '직접적/즉각적 피드백' },
        second: { code: 1, name: '신중한/완곡한 피드백' },
      },
      {
        key: 'D',
        label: '업무 자율성',
        first: { code: 0, name: '자율적 환경' },
        second: { code: 1, name: '명확한 지시/역할 분담' },
      },
      {
        key: 'E',
        label: '성과 평가 기준',
        first: { code: 0, name: '결과 중심(성과, 결과물)' },
        second: { code: 1, name: '과정 중심(성장, 배움)' },
      },
      {
        key: 'F',
        label: '커뮤니케이션 분위기',
        first: { code: 0, name: '공식적/문서 중심' },
        second: { code: 1, name: '자유로운/캐주얼한' },
      },
      {
        key: 'G',
        label: '팀 분위기',
        first: { code: 0, name: '진지한/목표 지향적' },
        second: { code: 1, name: '즐거운/유대감 중심' },
      },
      {
        key: 'H',
        label: '갈등 해결 방식',
        first: { code: 0, name: '즉시 논의/해결' },
        second: { code: 1, name: '시간을 두고 정리/대화' },
      },
      {
        key: 'I',
        label: '일과 생활의 균형',
        first: { code: 0, name: '워라밸 중시' },
        second: { code: 1, name: '성취/몰입 중시' },
      },
      {
        key: 'J',
        label: '변화에 대한 태도',
        first: { code: 0, name: '새로운 시도/변화' },
        second: { code: 1, name: '안정성/일관성' },
      },
      {
        key: 'K',
        label: '협업 스타일',
        first: { code: 0, name: '리더형' },
        second: { code: 1, name: '서포터형' },
      },
      {
        key: 'L',
        label: '팀 내 역할 분담 선호',
        first: { code: 0, name: '역할 고정/분업 중심' },
        second: { code: 1, name: '역할 유연/교차 참여' },
      },
      {
        key: 'M',
        label: '성과 공유 방식',
        first: { code: 0, name: '팀 전체 성과 중심' },
        second: { code: 1, name: '개인 기여 중심' },
      },
      {
        key: 'N',
        label: '회의 문화',
        first: { code: 0, name: '자주/빠른 피드백' },
        second: { code: 1, name: '드물게/깊은/구조적 논의' },
      },
    ],
  },
};
