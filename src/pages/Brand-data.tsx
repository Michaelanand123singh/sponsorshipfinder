import React, { useState } from 'react';
import { 
  getAllBrands,
  getBrandsByIndustry,
  getBrandsBySize,
  getBrandsByBudget,
  getBrandsByNiche,
  Brand
} from '../libs/data/data-brand';
import { Building, Users, Search, Filter, DollarSign, Globe, Briefcase, Target } from 'lucide-react';

const BrandData: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'industry' | 'size' | 'budget'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const allBrands = getAllBrands();
  const brandsByIndustry = getBrandsByIndustry();
  const brandsBySize = getBrandsBySize();
  const brandsByBudget = getBrandsByBudget();
  
  const industries = Object.keys(brandsByIndustry);
  
  // Filter brands based on search term
  const filteredBrands = allBrands.filter(brand => 
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Format budget display
  const formatBudget = (budget: string) => {
    switch (budget) {
      case 'Low':
        return { text: 'Low Budget', icon: <DollarSign className="w-3 h-3" /> };
      case 'Medium':
        return { text: 'Medium Budget', icon: <React.Fragment><DollarSign className="w-3 h-3" /><DollarSign className="w-3 h-3" /></React.Fragment> };
      case 'High':
        return { text: 'High Budget', icon: <React.Fragment><DollarSign className="w-3 h-3" /><DollarSign className="w-3 h-3" /><DollarSign className="w-3 h-3" /></React.Fragment> };
      default:
        return { text: budget, icon: null };
    }
  };

  // Render brand card - improved with more compact design
  const renderBrandCard = (brand: Brand) => (
    <div key={brand.id} className="bg-white rounded-lg shadow overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1">
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
            <Building className="w-5 h-5 text-gray-500" />
          </div>
          <div>
            <h3 className="font-bold text-base text-gray-900">{brand.name}</h3>
            <p className="text-blue-600 text-xs font-medium">{brand.industry}</p>
          </div>
        </div>
        
        <p className="text-gray-600 text-xs mb-3 line-clamp-2">{brand.description}</p>
        
        <div className="grid grid-cols-2 gap-1 mb-3 text-xs">
          <div className="flex items-center text-gray-600">
            <Globe className="w-3 h-3 mr-1 flex-shrink-0" />
            <span className="truncate">{brand.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Briefcase className="w-3 h-3 mr-1 flex-shrink-0" />
            <span className="truncate">{brand.size}</span>
          </div>
          <div className="flex items-center text-gray-600 col-span-2">
            <DollarSign className="w-3 h-3 mr-1 flex-shrink-0" />
            <span className="truncate">{formatBudget(brand.campaignBudget).text}</span>
          </div>
        </div>
        
        {/* Target Audience with compact design */}
        <div className="mb-2">
          <div className="text-xs font-medium text-gray-700 mb-1">Target Audience:</div>
          <div className="flex flex-wrap gap-1">
            {brand.targetAudience.slice(0, 3).map((audience) => (
              <span key={audience} className="inline-flex items-center bg-gray-100 px-1.5 py-0.5 rounded-full text-xs text-gray-700">
                <Target className="w-2 h-2 mr-0.5" />
                {audience}
              </span>
            ))}
            {brand.targetAudience.length > 3 && (
              <span className="inline-flex items-center bg-gray-100 px-1.5 py-0.5 rounded-full text-xs text-gray-700">
                +{brand.targetAudience.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Preferred Niches with compact design */}
        <div className="mb-2">
          <div className="text-xs font-medium text-gray-700 mb-1">Niches:</div>
          <div className="flex flex-wrap gap-1">
            {brand.preferredNiches.slice(0, 3).map((niche) => (
              <span key={niche} className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full text-xs">
                {niche}
              </span>
            ))}
            {brand.preferredNiches.length > 3 && (
              <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full text-xs">
                +{brand.preferredNiches.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Previous Campaign info - shown only if available */}
        {brand.previousCampaigns && brand.previousCampaigns.length > 0 && (
          <div className="border-t border-gray-100 pt-2 mt-2">
            <div className="text-xs font-medium text-gray-700 mb-1">Recent Campaign:</div>
            <div className="bg-gray-50 p-2 rounded text-xs">
              <p className="font-medium text-gray-800">{brand.previousCampaigns[0].name}</p>
              <p className="text-gray-600 text-xs mt-0.5 line-clamp-1">{brand.previousCampaigns[0].results}</p>
            </div>
          </div>
        )}
        
        <div className="mt-3">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded text-xs font-medium transition-colors">
            Contact Brand
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3">Partner Brands</h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8 text-sm md:text-base">
        Discover the brands looking to collaborate with influencers like you. From startups to enterprises, across various industries and budgets.
      </p>
      
      {/* Search Bar - more compact */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search brands by name, industry, or location..."
            className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>
      </div>
      
      {/* Filter Tabs - more compact and better mobile support */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex -mb-px max-w-3xl mx-auto overflow-x-auto">
          <button 
            className={`py-2 px-4 text-center border-b-2 font-medium text-xs md:text-sm whitespace-nowrap ${
              activeTab === 'all' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All Brands
          </button>
          <button 
            className={`py-2 px-4 text-center border-b-2 font-medium text-xs md:text-sm whitespace-nowrap ${
              activeTab === 'industry' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('industry')}
          >
            By Industry
          </button>
          <button 
            className={`py-2 px-4 text-center border-b-2 font-medium text-xs md:text-sm whitespace-nowrap ${
              activeTab === 'size' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('size')}
          >
            By Company Size
          </button>
          <button 
            className={`py-2 px-4 text-center border-b-2 font-medium text-xs md:text-sm whitespace-nowrap ${
              activeTab === 'budget' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('budget')}
          >
            By Budget
          </button>
        </nav>
      </div>
      
      {/* Content based on active tab - improved grid for better responsiveness */}
      <div className="mb-8">
        {activeTab === 'all' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredBrands.map(renderBrandCard)}
          </div>
        )}
        
        {activeTab === 'industry' && (
          <div>
            <div className="flex flex-wrap gap-1 mb-4">
              {industries.map(industry => (
                <button
                  key={industry}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedIndustry === industry
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedIndustry(selectedIndustry === industry ? null : industry)}
                >
                  {industry}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {(selectedIndustry 
                ? brandsByIndustry[selectedIndustry] 
                : filteredBrands
              ).map(renderBrandCard)}
            </div>
          </div>
        )}
        
        {activeTab === 'size' && (
          <div>
            <div className="flex flex-wrap gap-1 mb-4">
              {['Startup', 'Small', 'Medium', 'Enterprise'].map(size => (
                <button
                  key={size}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedSize === size
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedSize(
                    selectedSize === size ? null : size
                  )}
                >
                  <span className="flex items-center gap-1">
                    <Building className="w-3 h-3" />
                    {size}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {(selectedSize 
                ? brandsBySize[selectedSize as keyof typeof brandsBySize] 
                : filteredBrands
              ).map(renderBrandCard)}
            </div>
          </div>
        )}
        
        {activeTab === 'budget' && (
          <div>
            <div className="flex flex-wrap gap-1 mb-4">
              {['Low', 'Medium', 'High'].map(budget => {
                const budgetInfo = formatBudget(budget);
                return (
                  <button
                    key={budget}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedBudget === budget
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedBudget(
                      selectedBudget === budget ? null : budget
                    )}
                  >
                    <span className="flex items-center gap-1">
                      {budgetInfo.icon}
                      {budget} Budget
                    </span>
                  </button>
                );
              })}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {(selectedBudget 
                ? brandsByBudget[selectedBudget as keyof typeof brandsByBudget] 
                : filteredBrands
              ).map(renderBrandCard)}
            </div>
          </div>
        )}
      </div>
      
      {/* Stats Section - more compact */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 md:p-6 text-white">
        <h2 className="text-xl font-bold mb-4 text-center">Brand Network Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
            <p className="text-white/70 text-xs">Total Brands</p>
            <p className="text-xl md:text-2xl font-bold">{allBrands.length}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
            <p className="text-white/70 text-xs">Industries</p>
            <p className="text-xl md:text-2xl font-bold">{industries.length}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
            <p className="text-white/70 text-xs">Avg. Budget</p>
            <p className="text-xl md:text-2xl font-bold">Med-High</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
            <p className="text-white/70 text-xs">Top Niche</p>
            <p className="text-xl md:text-2xl font-bold">Lifestyle</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section - more compact */}
      <div className="mt-8 md:mt-12 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Ready to Collaborate?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-sm md:text-base">
          Join our platform to connect with these brands and create impactful partnerships.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors text-sm md:text-base">
          Register as an Influencer
        </button>
      </div>
    </div>
  );
};

export default BrandData;