import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from '../components/Starfield';
import styles from './styles.module.css';

const courses = [
  {
    title: "Introduction à la Programmation",
    description: "Plongez dans le monde du code avec une initiation complète et accessible. Apprenez à penser comme un développeur et réalisez votre premier programme Python."
  },
  {
    title: "Bases Python",
    description: "Découvrez les fondamentaux de Python : variables, conditions, boucles et fonctions. Posez les bases solides de vos futurs projets."
  },
  {
    title: "Python Concepts Avancés (POO)",
    description: "Passez au niveau supérieur avec la programmation orientée objet (POO), les exceptions et l'optimisation des scripts Python."
  },
  {
    title: "Python Cybersécurité",
    description: "Maîtrisez les outils Python pour analyser des paquets réseau, automatiser les audits de sécurité et détecter des comportements suspects."
  },
  {
    title: "Python Machine Learning",
    description: "Apprenez les bases du machine learning avec Python. Entraînez des modèles et utilisez des bibliothèques comme scikit-learn et TensorFlow."
  },
  {
    title: "Python Big Data & Analytics",
    description: "Explorez les immenses volumes de données grâce aux outils comme PySpark et Dask. Apprenez à traiter des millions de lignes en un clin d'œil."
  },
  {
    title: "Python Visualisation",
    description: "Transformez vos données en graphiques percutants avec Matplotlib, Seaborn et Plotly. Racontez des histoires visuelles avec vos insights."
  },
  {
    title: "Python Analytics Avancés",
    description: "Passez maître dans l'analyse prédictive et exploratoire avec des techniques avancées. Maîtrisez les pipelines de données et créez des rapports automatisés."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  }),
  hover: {
    scale: 1.05,
    rotateY: 5,
    z: 50,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 30px rgba(120, 119, 198, 0.8)",
    background: "linear-gradient(45deg, #7877C6 0%, #14B8A6 100%)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout title={siteConfig.title} description="Devenez un expert Python">
      <Starfield />
      <main className={styles.main}>
        <div className={styles.hero}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            Devenez un Expert Python
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Maîtrisez le langage le plus demandé en 2024
          </motion.p>
        </div>

        <div className={styles.courseGrid}>
          <AnimatePresence>
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className={styles.courseCard}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
                style={{ perspective: 1000 }}
              >
                <div className={styles.cardContent}>
                  <motion.div
                    className={styles.cardGlow}
                    whileHover={{
                      opacity: 1,
                      scale: 1.5,
                      transition: { duration: 0.3 }
                    }}
                  />
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {course.title}
                  </motion.h2>
                  <motion.p>{course.description}</motion.p>
                  <motion.button 
                    className={styles.ctaButton}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    Commencer maintenant →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </Layout>
  );
}