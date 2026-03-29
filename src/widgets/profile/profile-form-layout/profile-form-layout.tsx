import type { ReactNode } from 'react';

import * as styles from './profile-form-layout.css';

interface ProfileFormProps {
  summary: ReactNode;
  contact: ReactNode;
  education: ReactNode;
  skills: ReactNode;
  personality: ReactNode;
}

const ProfileFormLayout = ({
  summary,
  contact,
  education,
  skills,
  personality,
}: ProfileFormProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.summarySection}>{summary}</div>

      <div className={styles.contentSection}>
        <div className={styles.leftColumn}>
          {contact}
          {education}
          {skills}
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.personalitySection}>{personality}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFormLayout;
