import * as styles from './tab-bar.css';

export type TabLabelTypes = 'recommend' | 'applicant';

interface TabBarProps {
  activeTab: TabLabelTypes;
  onChangeTab: (tab: TabLabelTypes) => void;
}

const TabBar = ({ activeTab, onChangeTab }: TabBarProps) => {
  return (
    <div className={styles.tabContainer}>
      <button
        type='button'
        className={styles.tabButton({ isActive: activeTab === 'recommend' })}
        aria-pressed={activeTab === 'recommend'}
        onClick={() => onChangeTab('recommend')}
      >
        팀원 추천받기
      </button>
      <div className={styles.divider} />
      <button
        type='button'
        className={styles.tabButton({ isActive: activeTab === 'applicant' })}
        aria-pressed={activeTab === 'applicant'}
        onClick={() => onChangeTab('applicant')}
      >
        지원한 팀원 보기
      </button>
    </div>
  );
};

export default TabBar;
