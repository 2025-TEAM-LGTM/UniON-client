import type { ReactNode } from 'react';

import * as styles from './recruit-info.css';

interface InfoItemProps {
  title: string;
  children: ReactNode;
}

const InfoItem = ({ title, children }: InfoItemProps) => {
  return (
    <div className={styles.infoItemContainer}>
      <p className={styles.infoTitle}>{title}</p>
      <p className={styles.infoText}>{children}</p>
    </div>
  );
};

export default InfoItem;
