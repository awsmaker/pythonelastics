// filepath: src/pages/index.tsx
import React from 'react';
import Layout from '@theme/Layout';
import HeroButtons from '../components/HeroButtons/HeroButtons'; // Import the HeroButtons component

function Home(): JSX.Element {
  return (
    <Layout>
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Welcome to My Docusaurus Site</h1>
          <p className="hero__subtitle">This is a subtitle</p>
          <HeroButtons /> {/* Use the HeroButtons component */}
        </div>
      </header>
    </Layout>
  );
}

export default Home;