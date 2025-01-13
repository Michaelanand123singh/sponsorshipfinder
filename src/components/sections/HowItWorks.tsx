import { ArrowRight, Sparkles, Target, Users } from 'lucide-react'; // Make sure ArrowRight is included

import { Laptop, CheckCircle, UserCheck } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Our platform simplifies the process of connecting creators with sponsors through an easy, AI-powered experience. Here’s how it works:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="p-6 bg-white rounded-lg shadow-lg flex items-center justify-center w-20 h-20 mb-4">
                <Laptop className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Create Your Profile</h3>
              <p className="text-gray-600">
                Sign up and complete your profile with essential information about your brand, values, and goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="p-6 bg-white rounded-lg shadow-lg flex items-center justify-center w-20 h-20 mb-4">
                <CheckCircle className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Get Matched</h3>
              <p className="text-gray-600">
                Our AI-powered system matches you with the most relevant sponsors who align with your values and audience.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="p-6 bg-white rounded-lg shadow-lg flex items-center justify-center w-20 h-20 mb-4">
                <UserCheck className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Start Collaborating</h3>
              <p className="text-gray-600">
                Once matched, you can connect with sponsors, discuss terms, and start building your partnership.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
