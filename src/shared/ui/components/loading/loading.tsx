import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import * as styles from './loading.css';

const Loading = () => {
  return (
    <div className={styles.container}>
      <DotLottieReact
        src='https://lottie.host/81027f59-9b18-4641-a76c-ecd741146f78/zrvWwotgs9.lottie'
        loop
        autoplay
      />
    </div>
  );
};

export default Loading;
