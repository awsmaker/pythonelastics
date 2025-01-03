import React from 'react';
import styles from './DocBackground.module.css';

const DocBackground = () => {
  return (
    <div className={styles.docBackgroundWrapper}>
      <div className={styles.gradientOverlay}></div>
    </div>
  );
};

export default DocBackground; 