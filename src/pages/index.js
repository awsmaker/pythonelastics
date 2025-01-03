import React from 'react';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import HeroButtons from '@site/src/components/HeroButtons';
import styles from './styles.module.css';
import WindowSize from '../components/WindowSize';

export default function Home() {
  return (
    <Layout description="Devenez un développeur Python et gagnez plus de 100k€/an">
      <div className={styles.pageContainer}>
        <Starfield />
        <div className={styles.contentContainer}>
          <motion.div 
            className={styles.contentWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2
              }}
              className={styles.topSection}
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className={styles.subtitle}
              >
                <div className={styles.subtitleLine}>Maîtrisez Python</div>
                <div className={styles.subtitleLine}>
                  et débloquez des opportunités infinies en{' '}
                  <span className={styles.highlightText}>IA</span>,{' '}
                  <span className={styles.highlightText}>Data Science</span>,{' '}
                  <span className={styles.highlightText}>Big Data</span>,{' '}
                  <span className={styles.highlightText}>Cybersécurité</span>{' '}et{' '}
                  <span className={styles.highlightText}>Développement Web</span>
                </div>
              </motion.h2>

              <HeroButtons />
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.4 
              }}
              className={styles.heroTitle}
            >
              <h1 className={styles.mainTitle}>
                <div className={styles.titleWrapper}>
                  <span className={styles.gradientText}>Développeur Python</span>
                  <motion.div 
                    className={styles.salaryBox}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <div className={styles.salaryIntro}>Propulsez votre carrière vers un salaire de</div>
                    <span className={styles.salaryText}>$100,000+</span>
                    <span className={styles.yearText}>par an dès 2025</span>
                  </motion.div>
                </div>
              </h1>
            </motion.div>
          </motion.div>
        </div>

        <WindowSize />
      </div>
    </Layout>
  );
} 