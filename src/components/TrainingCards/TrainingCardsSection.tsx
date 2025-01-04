import React from 'react';
import TrainingCard from './TrainingCard';
import styles from './TrainingCardsSection.module.css';

const trainingData = [
  {
    title: 'Introduction à la Programmation',
    description: 'Plongez dans le monde du code avec une initiation complète et accessible. Apprenez à penser comme un développeur et réalisez votre premier programme Python.',
    cta: 'Commencer'
  },
  {
    title: 'Bases Python',
    description: 'Découvrez les fondamentaux de Python : variables, conditions, boucles et fonctions. Posez les bases solides de vos futurs projets.',
    cta: 'Commencer'
  },
  {
    title: 'Python Concepts Avancés (POO)',
    description: 'Passez au niveau supérieur avec la programmation orientée objet (POO), les exceptions et l’optimisation des scripts Python.',
    cta: 'Commencer'
  },
  {
    title: 'Python Cybersécurité',
    description: 'Maîtrisez les outils Python pour analyser des paquets réseau, automatiser les audits de sécurité et détecter des comportements suspects.',
    cta: 'Commencer'
  },
  {
    title: 'Python Machine Learning',
    description: 'Apprenez les bases du machine learning avec Python. Entraînez des modèles et utilisez des bibliothèques comme scikit-learn et TensorFlow.',
    cta: 'Commencer'
  },
  {
    title: 'Python Big Data & Analytics',
    description: 'Explorez les immenses volumes de données grâce aux outils comme PySpark et Dask. Apprenez à traiter des millions de lignes en un clin d\'œil.',
    cta: 'Commencer'
  },
  {
    title: 'Python Visualisation',
    description: 'Transformez vos données en graphiques percutants avec Matplotlib, Seaborn et Plotly. Racontez des histoires visuelles avec vos insights.',
    cta: 'Commencer'
  },
  {
    title: 'Python Analytics Avancés',
    description: 'Passez maître dans l’analyse prédictive et exploratoire avec des techniques avancées. Maîtrisez les pipelines de données et créez des rapports automatisés.',
    cta: 'Commencer'
  }
];

const TrainingCardsSection: React.FC = () => {
  return (
    <div className={styles.cardsContainer}>
      {trainingData.map((training, index) => (
        <TrainingCard
          key={index}
          title={training.title}
          description={training.description}
          cta={training.cta}
        />
      ))}
    </div>
  );
};

export default TrainingCardsSection;