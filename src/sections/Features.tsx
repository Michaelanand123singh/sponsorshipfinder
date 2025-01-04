import React from 'react';
import { Globe, TrendingUp, ThumbsUp, Shield } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600">
            Our platform provides unparalleled opportunities for creators and sponsors, ensuring seamless collaborations that drive success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600 text-sm">
              Connect with creators and sponsors from across the world, expanding your network and opportunities.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Matching</h3>
            <p className="text-gray-600 text-sm">
              Leverage AI to find the perfect match based on your goals, values, and target audience.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full">
              <ThumbsUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Trusted Partnerships</h3>
            <p className="text-gray-600 text-sm">
              Build authentic, lasting partnerships with trusted brands and creators who align with your vision.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600 text-sm">
              Enjoy a secure and transparent process for collaborations, ensuring peace of mind for all parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
