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
      '이 프로젝트/경험의 배경과 문제 상황을 간단히 적어주세요.\n\nex. 이런 도메인에서의 신뢰할 수 있는 정보 공유 채널의 부재가 있었습니다....',
  },
  {
    key: 'Ttext' as const,
    title: 'Task (과제)',
    placeholder:
      '해결해야 했던 문제나 목표를 구체적으로 적어주세요.\n\nex. 사용자 경험을 개선하고 전환율을 높이기 위해 플랫폼 전면 리뉴얼을 진행해야 했습니다...',
  },
  {
    key: 'Atext' as const,
    title: 'Action (행동)',
    placeholder:
      '문제를 해결하기 위해 어떤 행동을 취했는지 구체적으로 적어주세요.\n\nex. React와 TypeScript를 활용해 컴포넌트 기반 아키텍처로 전환하고, 코드 스플리팅과 lazy loading을 적용했습니다...',
  },
  {
    key: 'Rtext' as const,
    title: 'Result (결과)',
    placeholder:
      '프로젝트의 결과와 성과를 구체적인 수치나 예시와 함께 작성해주세요.\n\nex. 페이지 로딩 속도가 54% 단축되었고, 모바일 전환율이 38% 증가했습니다...',
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
