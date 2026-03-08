import type {
  TeamCulture,
  TeamCultureValue,
} from '@entities/post-details/api/types';

export interface TeamCultureLabelMeta {
  title: string;
  labels: Record<TeamCultureValue, string>;
}

export interface TeamCultureItem {
  key: string;
  title: string;
  selectedLabel: string;
}

const TEAM_CULTURE_LABEL_MAP: Record<string, TeamCultureLabelMeta> = {
  A: {
    title: '의사결정 구조',
    labels: {
      0: '수평적 논의형',
      1: '리더 중심형',
    },
  },
  B: {
    title: '업무 진행 방식',
    labels: {
      0: '체계적/계획형',
      1: '유연한/즉흥형',
    },
  },
  C: {
    title: '피드백 문화',
    labels: {
      0: '직접적/즉각적 피드백',
      1: '신중한/완곡한 피드백',
    },
  },
  D: {
    title: '업무 자율성',
    labels: {
      0: '자율적 환경',
      1: '명확한 지시/역할 분담',
    },
  },
  E: {
    title: '성과 평가 기준',
    labels: {
      0: '결과 중심(성과, 결과물)',
      1: '과정 중심(성장, 배움)',
    },
  },
  F: {
    title: '커뮤니케이션 분위기',
    labels: {
      0: '공식적/문서 중심',
      1: '자유로운/캐주얼한',
    },
  },
  G: {
    title: '팀 분위기',
    labels: {
      0: '진지한/목표 지향적',
      1: '즐거운/유대감 중심',
    },
  },
  H: {
    title: '갈등 해결 방식',
    labels: {
      0: '즉시 논의/해결',
      1: '시간을 두고 정리/대화',
    },
  },
  I: {
    title: '일과 생활의 균형',
    labels: {
      0: '워라밸 중시',
      1: '성취/몰입 중시',
    },
  },
  J: {
    title: '변화에 대한 태도',
    labels: {
      0: '새로운 시도/변화',
      1: '안정성/일관성',
    },
  },
  K: {
    title: '협업 스타일',
    labels: {
      0: '리더형',
      1: '서포터형',
    },
  },
  L: {
    title: '팀 내 역할 분담 선호',
    labels: {
      0: '역할 고정/분업 중심',
      1: '역할 유현/교차 참여',
    },
  },
  M: {
    title: '성과 공유 방식',
    labels: {
      0: '팀 전체 성과 중심',
      1: '개인 기여 중심',
    },
  },
  N: {
    title: '회의 문화',
    labels: {
      0: '자주/빠른 피드백',
      1: '드물게/깊은/구조적 논의',
    },
  },
};

export const getTeamCultureLabelMeta = (
  key: string,
): TeamCultureLabelMeta | null => {
  return TEAM_CULTURE_LABEL_MAP[key] ?? null;
};

export const toTeamCultureItems = (
  teamCulture: TeamCulture,
): TeamCultureItem[] => {
  return Object.entries(teamCulture).flatMap(([key, value]) => {
    const meta = getTeamCultureLabelMeta(key);

    if (!meta) return [];

    return [
      {
        key,
        title: meta.title,
        selectedLabel: meta.labels[value],
      },
    ];
  });
};
