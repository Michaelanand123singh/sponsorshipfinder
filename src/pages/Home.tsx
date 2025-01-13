import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Features Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <Features />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <HowItWorks />
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <About />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <FAQ />
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <Contact />
        </div>
      </section>
    </main>
  );
};

export default Home;