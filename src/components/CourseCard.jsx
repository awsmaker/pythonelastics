import React from 'react';
import styles from './CourseCard.module.css';

const CourseCard = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>En savoir plus</button>
    </div>
  );
};

export default CourseCard; 