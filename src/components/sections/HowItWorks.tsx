import { ArrowRight, UserPlus, Users, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our platform to connect with brands looking for authentic influencers. Start your journey in three simple steps:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="p-6 bg-white rounded-lg shadow-lg flex items-center justify-center w-20 h-20 mb-4">
                <UserPlus className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Sign Up</h3>
              <p className="text-gray-600">
                Complete our simple registration form to create your influencer profile.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="p-6 bg-white rounded-lg shadow-lg flex items-center justify-center w-20 h-20 mb-4">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Get Discovered</h3>
              <p className="text-gray-600">
                Brands will be able to find and connect with you through our platform.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="p-6 bg-white rounded-lg shadow-lg flex items-center justify-center w-20 h-20 mb-4">
                <CheckCircle className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Collaborate</h3>
              <p className="text-gray-600">
                Start collaborating with brands and grow your influence.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button 
              onClick={scrollToHero}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;