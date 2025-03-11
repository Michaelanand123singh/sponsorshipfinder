import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Import the section components
import About from '../components/sections/About';
import Hero from '../components/sections/Hero';

const Home: React.FC = () => {
  return (
    
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <Hero />
        {/* About Section */}
        <About />
      </div>
    
  );
};

export default Home;