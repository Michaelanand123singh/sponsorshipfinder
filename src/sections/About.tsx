import React from 'react';
import { Users, Heart, Info } from 'lucide-react';

const About = () => {
  return (
    <section className="pt-24 pb-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We are dedicated to helping creators and sponsors build meaningful and authentic partnerships through our AI-powered platform. Here’s who we are and what we stand for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <Users className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Team</h3>
            <p className="text-gray-600">
              Our team is made up of passionate individuals who believe in the power of collaboration and innovation. Together, we strive to create an ecosystem where creators thrive and brands grow.
            </p>
          </div>

          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <Heart className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to empower creators and brands to forge genuine partnerships that benefit both sides. We’re here to ensure every collaboration is authentic and meaningful.
            </p>
          </div>

          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <Info className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">What We Stand For</h3>
            <p className="text-gray-600">
              We believe in transparency, authenticity, and innovation. Our platform ensures that creators and brands are matched based on shared values, creating long-lasting relationships.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/contact" className="text-lg font-medium text-blue-600 hover:text-blue-700">
            Get in touch with us to learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
