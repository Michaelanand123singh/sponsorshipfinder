import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ChartBar, Users, Zap, Target, Calendar } from 'lucide-react';

interface FormData {
  companyName: string;
  website: string;
  industry: string;
  email: string;
  phoneNumber: string;
  marketingBudget: string;
  targetAudience: string;
  campaignGoals: string;
  preferredPlatforms: string[];
  additionalInfo: string;
  demoDate?: string;
}

interface FormErrors {
  [key: string]: string;
}

// Card component for feature highlights
const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-all">
    <div className="mb-4 text-blue-600">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BrandRegistration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    website: '',
    industry: '',
    email: '',
    phoneNumber: '',
    marketingBudget: '',
    targetAudience: '',
    campaignGoals: '',
    preferredPlatforms: [],
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlatformChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      preferredPlatforms: checked
        ? [...prev.preferredPlatforms, value]
        : prev.preferredPlatforms.filter(platform => platform !== value)
    }));
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (!formData.targetAudience) newErrors.targetAudience = 'Target audience is required';
    if (!formData.campaignGoals) newErrors.campaignGoals = 'Campaign goals are required';
    
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Registration successful! Our team will contact you shortly.');
        setFormData({
          companyName: '',
          website: '',
          industry: '',
          email: '',
          phoneNumber: '',
          marketingBudget: '',
          targetAudience: '',
          campaignGoals: '',
          preferredPlatforms: [],
          additionalInfo: ''
        });
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting your registration. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleDemoRequest = () => {
    setShowDemoForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Amplify Your Brand with Influencer Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with authentic creators who share your brand's vision and values
            </p>
            <button
              onClick={handleDemoRequest}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Brands Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Target className="w-8 h-8" />}
            title="Targeted Matching"
            description="Connect with influencers who perfectly align with your brand values and target audience."
          />
          <FeatureCard
            icon={<ChartBar className="w-8 h-8" />}
            title="Campaign Analytics"
            description="Track ROI, engagement rates, and campaign performance in real-time."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Audience Insights"
            description="Gain deep insights into influencer audiences to ensure perfect alignment."
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Quick Launch"
            description="Streamlined process to launch campaigns within days, not weeks."
          />
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Ready to Grow Your Brand?</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your company name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry *
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your industry</option>
                  <option value="fashion">Fashion & Apparel</option>
                  <option value="beauty">Beauty & Cosmetics</option>
                  <option value="tech">Technology</option>
                  <option value="food">Food & Beverage</option>
                  <option value="health">Health & Wellness</option>
                  <option value="travel">Travel & Hospitality</option>
                  <option value="other">Other</option>
                </select>
                {errors.industry && (
                  <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Marketing Budget
                </label>
                <select
                  name="marketingBudget"
                  value={formData.marketingBudget}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select budget range</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-25000">$10,000 - $25,000</option>
                  <option value="25000-50000">$25,000 - $50,000</option>
                  <option value="50000+">$50,000+</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Audience *
                </label>
                <textarea
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Describe your target audience (age, interests, location, etc.)"
                />
                {errors.targetAudience && (
                  <p className="text-red-500 text-sm mt-1">{errors.targetAudience}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Campaign Goals *
                </label>
                <textarea
                  name="campaignGoals"
                  value={formData.campaignGoals}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="What are your main objectives for influencer marketing campaigns?"
                />
                {errors.campaignGoals && (
                  <p className="text-red-500 text-sm mt-1">{errors.campaignGoals}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Social Media Platforms
              </label>
              <div className="space-y-2">
                {['Instagram', 'TikTok', 'YouTube', 'Twitter', 'Facebook'].map((platform) => (
                  <label key={platform} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={platform.toLowerCase()}
                      checked={formData.preferredPlatforms.includes(platform.toLowerCase())}
                      onChange={handlePlatformChange}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span>{platform}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </form>
        </div>
      </div>

      {/* Demo Request Modal */}
      {showDemoForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Schedule a Demo</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="demoDate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  min={new Date().toISOString().split('T')[0]}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowDemoForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert('Demo request submitted! We will contact you shortly.');
                    setShowDemoForm(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Confirm Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandRegistration;