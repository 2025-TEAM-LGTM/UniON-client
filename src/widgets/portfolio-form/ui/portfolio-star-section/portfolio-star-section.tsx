import { Label } from '@shared/ui/components/label/label';
import WriteTextarea from '@shared/ui/components/textarea/write-textarea/write-textarea';

import * as styles from './portfolio-star-section.css';

interface StarFormValues {
  Stext: string;
  Ttext: string;
  Atext: string;
  Rtext: string;
}

interface PortfolioStarSectionProps {
  star: StarFormValues;
  onChangeStar: (next: StarFormValues) => void;
}

const STAR_ITEMS = [
  {
    key: 'Stext' as const,
    title: 'Situation (상황)',
    placeholder:
      '프로젝트를 시작하게 된 배경과 해결해야 했던 문제 상황을 작성해주세요.\n\nex. 기존 공모전 플랫폼은 모바일 사용성이 낮고 페이지 이탈률이 높아 사용자 경험 개선이 필요한 상황이었습니다.\n독립영화 홍보 프로젝트를 진행했지만 SNS 반응이 낮고 타겟 관객 유입이 부족한 문제가 있었습니다.',
  },
  {
    key: 'Ttext' as const,
    title: 'Task (과제)',
    placeholder:
      '프로젝트에서 본인이 맡은 역할과 달성해야 했던 목표 및 과제를 작성해주세요.\n\nex. 사용자의 플랫폼 이용 흐름을 개선하기 위해 메인 화면 UI를 전면 리디자인하고 모바일 접근성을 높이는 과제를 맡았습니다.\n20대 관객 유입을 늘리기 위해 SNS 콘텐츠 전략을 수립하고 영화 홍보 캠페인을 운영하는 역할을 맡았습니다.',
  },
  {
    key: 'Atext' as const,
    title: 'Action (행동)',
    placeholder:
      '목표를 달성하기 위해 어떤 행동을 했고, 그 과정에서 어떤 문제를 해결했는지 구체적으로 작성해주세요.\n\nex. 초기 렌더링 속도 저하 문제를 해결하기 위해 React 기반 코드 스플리팅과 lazy loading을 적용하고 API 요청 구조를 개선했습니다.\n예고편 조회수가 낮은 원인을 분석하기 위해 사용자 반응 데이터를 정리했고, 핵심 장면 중심으로 편집 방향을 수정해 숏폼 영상을 제작했습니다.',
  },
  {
    key: 'Rtext' as const,
    title: 'Result (결과)',
    placeholder:
      '프로젝트 결과와 성과를 수치 또는 구체적인 변화와 함께 작성해주세요.\n\nex.  페이지 로딩 속도가 약 50% 개선되었고 모바일 사용자 이탈률이 감소하여 사용자 만족도 조사 결과가 이전보다 향상되었습니다.\nSNS 캠페인 운영 이후 게시물 평균 도달률이 42% 증가했고, 행사 사전 신청 인원이 기존 대비 2배 이상 증가했습니다.',
  },
] as const;

const PortfolioStarSection = ({
  star,
  onChangeStar,
}: PortfolioStarSectionProps) => {
  return (
    <section className={styles.sectionContainer}>
      <h2>
        <Label htmlFor='portfolio-basic-info' required>
          STAR PORTFOLIO
        </Label>
      </h2>

      <div className={styles.list}>
        {STAR_ITEMS.map((item) => (
          <div key={item.key} className={styles.card}>
            <Label>{item.title}</Label>
            <WriteTextarea
              value={star[item.key]}
              onChange={(e) =>
                onChangeStar({ ...star, [item.key]: e.target.value })
              }
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioStarSection;
