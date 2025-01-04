import React from 'react';
import styles from './HeroButtons.module.css';

const HeroButtons: React.FC = () => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button}>Button 1</button>
      <button className={styles.button}>Button 2</button>
      <button className={styles.button}>Button 3</button>
      <button className={styles.button}>Button 4</button>
    </div>
  );
};

export default HeroButtons;