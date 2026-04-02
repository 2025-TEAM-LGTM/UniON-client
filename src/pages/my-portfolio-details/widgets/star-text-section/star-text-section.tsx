import ReadTextarea from '@shared/ui/components/textarea/read-textarea/read-textarea';

import * as styles from './star-text-section.css';

interface StarText {
  situation: string;
  task: string;
  action: string;
  result: string;
}

interface StarTextSectionProps {
  star: StarText;
}

const STAR_ITEMS = [
  { key: 'situation', title: 'Situation (상황)' },
  { key: 'task', title: 'Task (과제)' },
  { key: 'action', title: 'Action (행동)' },
  { key: 'result', title: 'Result (결과)' },
] as const;

const StarTextSection = ({ star }: StarTextSectionProps) => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>STAR PORTFOLIO</h2>

      <div className={styles.list}>
        {STAR_ITEMS.map((item) => {
          const value = star[item.key];

          return (
            <div key={item.key} className={styles.card}>
              <p className={styles.title}>{item.title}</p>

              <ReadTextarea text={value} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StarTextSection;
