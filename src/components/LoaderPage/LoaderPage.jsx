import { Audio } from 'react-loader-spinner';

import styles from './LoaderPage.module.css';

export const LoaderPage = () => {
  return (
    <div className={styles.wrapper}>
      <Audio
        color="#090"
        height="80"
        width="80"
        ariaLabel="loading-indicator"
      />
    </div>
  );
};
