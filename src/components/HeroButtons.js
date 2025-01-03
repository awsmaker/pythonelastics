import React from "react";
import styles from "./HeroButtons.module.css";
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';
import { useHistory } from '@docusaurus/router';

const HeroButtons = () => {
  const history = useHistory();

  const navigateToBasics = () => {
    history.push('/docs/bases-python/introduction');
  };

  const navigateToAdvanced = () => {
    history.push('/docs/concepts-avances/introduction');
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.heroSection}
    >
      <div className={styles.buttonWrapper}>
        <motion.button 
          variants={item}
          onClick={navigateToBasics}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(0, 242, 254, 0.5)",
            y: -5
          }}
          whileTap={{ scale: 0.95 }}
          className={`${styles.heroButton} ${styles.buttonPrimary}`}
        >
          <div className={styles.glowBg}></div>
          <span>🚀 Bases Python</span>
          <p>Maîtrisez les fondamentaux et commencez à coder aujourd'hui !</p>
          <div className={styles.shine}></div>
        </motion.button>

        <motion.button 
          variants={item}
          onClick={navigateToAdvanced}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(79, 172, 254, 0.5)",
            y: -5
          }}
          whileTap={{ scale: 0.95 }}
          className={`${styles.heroButton} ${styles.buttonSecondary}`}
        >
          <div className={styles.glowBg}></div>
          <span>⚡ Concepts Avancés</span>
          <p>Perfectionnez-vous en POO, threading et optimisation.</p>
          <div className={styles.shine}></div>
        </motion.button>

        <motion.div
          variants={item}
          className={`${styles.heroButton} ${styles.buttonTertiary} ${styles.comingSoon}`}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)",
            y: -5
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={styles.glowBg}></div>
          <span>🔮 Applications Python</span>
          <div className={styles.comingSoonBadge}>
            <FaLock className={styles.lockIcon} />
            <span>Bientôt disponible</span>
          </div>
          <p>Découvrez la Cybersécurité, le Machine Learning et plus.</p>
          <div className={styles.priceTag}>Premium</div>
          <div className={styles.shine}></div>
        </motion.div>

        <motion.div
          className={`${styles.heroButton} ${styles.comingSoon}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Formation Avancée</span>
          <div className={styles.comingSoonBadge}>
            <FaLock className={styles.lockIcon} />
            <span>Bientôt disponible</span>
          </div>
          <p>Maîtrisez les concepts avancés de Python et devenez un expert reconnu</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroButtons; 