import React from 'react';
import styles from './TrainingCard.module.css';

interface TrainingCardProps {
  title: string;
  description: string;
  cta: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, description, cta }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <button className={styles.ctaButton}>{cta}</button>
    </div>
  );
};

export default TrainingCard;