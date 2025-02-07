import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, Users, Star } from 'lucide-react';

const Hero = () => {
  const stats = [
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      label: 'Creators',
      value: '10k+',
      tooltip: 'Active content creators on our platform'
    },
    {
      icon: <Target className="w-5 h-5 text-blue-600" />,
      label: 'Brands',
      value: '5k+',
      tooltip: 'Verified brand partners'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
      label: 'Deals Closed',
      value: '$2M+',
      tooltip: 'Total value of successful partnerships'
    }
  ];

  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-purple-100/50 blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">Connect with the perfect sponsors</span>
            <Star className="w-4 h-4 text-blue-600" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Where Creators Meet Their Perfect Sponsors
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with brands that align with your values. Our AI-powered platform matches creators with sponsors for authentic partnerships.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              to="/influencer"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg group"
            >
              <span>I am Influencer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/brand"
              className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:border-green-600 hover:text-green-600"
            >
              I'm a Brand
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex items-center justify-center space-x-2 group hover:scale-105 transition-transform duration-300 cursor-pointer"
                title={stat.tooltip}
              >
                {stat.icon}
                <span className="text-gray-600">
                  <strong className="font-semibold text-gray-800">{stat.value}</strong> {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-4">Trusted by creators and brands worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-50">
              {/* Replace with actual brand logos */}
              <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;