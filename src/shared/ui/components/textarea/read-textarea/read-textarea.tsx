import type { HTMLAttributes } from 'react';

import * as styles from './read-textarea.css';

type ReadTextareaProps = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  text: string;
};

const ReadTextarea = ({ text, ...props }: ReadTextareaProps) => {
  return (
    <div className={styles.readTextarea} {...props}>
      {text.replace(/\r\n/g, '\n')}
    </div>
  );
};

export default ReadTextarea;
