import React from 'react';
import { ArrowRight, Sparkles, Target, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">Connect with the perfect sponsors</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Where Creators Meet Their Perfect Sponsors
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with brands that align with your values. Our AI-powered platform matches creators with sponsors for authentic partnerships.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <span>Find Sponsors</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
              I'm a Sponsor
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">10k+ Creators</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">5k+ Brands</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">$2M+ Deals Closed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;