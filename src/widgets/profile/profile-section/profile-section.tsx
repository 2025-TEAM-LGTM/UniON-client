import type { ReactNode } from 'react';

import * as styles from './profile-section.css';

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
}

const ProfileSection = ({ title, children }: ProfileSectionProps) => {
  return (
    <section className={styles.sectionContainer}>
      <p className={styles.title}>{title}</p>
      <div>{children}</div>
    </section>
  );
};

export default ProfileSection;
