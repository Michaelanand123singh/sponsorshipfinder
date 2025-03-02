import React, { useState } from 'react';
import { 
  getAllBrands,
  getBrandsByIndustry,
  getBrandsBySize,
  getBrandsByBudget,
  getBrandsByNiche,
  Brand
} from '../libs/data/data-brand';
import { Link } from 'react-router-dom';
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

  // Render brand card - improved with more consistent and premium design
  const renderBrandCard = (brand: Brand) => (
    <div key={brand.id} className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
            <Building className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{brand.name}</h3>
            <p className="text-blue-600 text-xs font-semibold tracking-wide uppercase">{brand.industry}</p>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{brand.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="flex items-center text-gray-700">
            <Globe className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" />
            <span className="truncate">{brand.location}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Briefcase className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" />
            <span className="truncate">{brand.size}</span>
          </div>
          <div className="flex items-center text-gray-700 col-span-2">
            <DollarSign className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" />
            <span className="truncate">{formatBudget(brand.campaignBudget).text}</span>
          </div>
        </div>
        
        {/* Target Audience with premium design */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-700 mb-2 flex items-center">
            <Target className="w-3 h-3 mr-1.5 text-blue-500" />
            <span>Target Audience</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {brand.targetAudience.slice(0, 3).map((audience) => (
              <span key={audience} className="inline-flex items-center bg-gray-50 px-2 py-1 rounded-md text-xs text-gray-700 border border-gray-100">
                {audience}
              </span>
            ))}
            {brand.targetAudience.length > 3 && (
              <span className="inline-flex items-center bg-gray-50 px-2 py-1 rounded-md text-xs text-gray-700 border border-gray-100">
                +{brand.targetAudience.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Preferred Niches with premium design */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-700 mb-2 flex items-center">
            <Filter className="w-3 h-3 mr-1.5 text-blue-500" />
            <span>Niches</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {brand.preferredNiches.slice(0, 3).map((niche) => (
              <span key={niche} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs border border-blue-100">
                {niche}
              </span>
            ))}
            {brand.preferredNiches.length > 3 && (
              <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs border border-blue-100">
                +{brand.preferredNiches.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Previous Campaign info - shown only if available with premium design */}
        {brand.previousCampaigns && brand.previousCampaigns.length > 0 && (
          <div className="border-t border-gray-100 pt-3 mt-auto">
            <div className="text-xs font-semibold text-gray-700 mb-2 flex items-center">
              <Search className="w-3 h-3 mr-1.5 text-blue-500" />
              <span>Recent Campaign</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-sm border border-gray-100">
              <p className="font-medium text-gray-800 mb-1">{brand.previousCampaigns[0].name}</p>
              <p className="text-gray-600 text-xs line-clamp-2">{brand.previousCampaigns[0].results}</p>
            </div>
          </div>
        )}
        
        <div className="mt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center">
            Contact Brand
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-6 py-28 md:py-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">Partner Brands</h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-sm md:text-base">
        Discover the brands looking to collaborate with influencers like you. From startups to enterprises, across various industries and budgets.
      </p>
      
      {/* Search Bar - premium design */}
      <div className="max-w-xl mx-auto mb-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search brands by name, industry, or location..."
            className="w-full px-5 py-3 pl-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
        </div>
      </div>
      
      {/* Filter Tabs - premium design */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex -mb-px max-w-3xl mx-auto overflow-x-auto justify-center">
          <button 
            className={`py-3 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              activeTab === 'all' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All Brands
          </button>
          <button 
            className={`py-3 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              activeTab === 'industry' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('industry')}
          >
            By Industry
          </button>
          <button 
            className={`py-3 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              activeTab === 'size' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('size')}
          >
            By Company Size
          </button>
          <button 
            className={`py-3 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
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
      
      {/* Content based on active tab - improved grid for better responsiveness and consistent card heights */}
      <div className="mb-10">
        {activeTab === 'all' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBrands.map(renderBrandCard)}
          </div>
        )}
        
        {activeTab === 'industry' && (
          <div>
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {industries.map(industry => (
                <button
                  key={industry}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedIndustry === industry
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedIndustry(selectedIndustry === industry ? null : industry)}
                >
                  {industry}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {(selectedIndustry 
                ? brandsByIndustry[selectedIndustry] 
                : filteredBrands
              ).map(renderBrandCard)}
            </div>
          </div>
        )}
        
        {activeTab === 'size' && (
          <div>
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {['Startup', 'Small', 'Medium', 'Enterprise'].map(size => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedSize(
                    selectedSize === size ? null : size
                  )}
                >
                  <span className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    {size}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {(selectedSize 
                ? brandsBySize[selectedSize as keyof typeof brandsBySize] 
                : filteredBrands
              ).map(renderBrandCard)}
            </div>
          </div>
        )}
        
        {activeTab === 'budget' && (
          <div>
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {['Low', 'Medium', 'High'].map(budget => {
                const budgetInfo = formatBudget(budget);
                return (
                  <button
                    key={budget}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedBudget === budget
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedBudget(
                      selectedBudget === budget ? null : budget
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {budgetInfo.icon}
                      {budget} Budget
                    </span>
                  </button>
                );
              })}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {(selectedBudget 
                ? brandsByBudget[selectedBudget as keyof typeof brandsByBudget] 
                : filteredBrands
              ).map(renderBrandCard)}
            </div>
          </div>
        )}
      </div>
      
      {/* Stats Section - premium design */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white shadow-lg my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Brand Network Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-5 transition-transform hover:-translate-y-1 hover:bg-white/20">
            <p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">Total Brands</p>
            <p className="text-2xl md:text-3xl font-bold">{allBrands.length}</p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-5 transition-transform hover:-translate-y-1 hover:bg-white/20">
            <p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">Industries</p>
            <p className="text-2xl md:text-3xl font-bold">{industries.length}</p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-5 transition-transform hover:-translate-y-1 hover:bg-white/20">
            <p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">Avg. Budget</p>
            <p className="text-2xl md:text-3xl font-bold">Med-High</p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-5 transition-transform hover:-translate-y-1 hover:bg-white/20">
            <p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">Top Niche</p>
            <p className="text-2xl md:text-3xl font-bold">Lifestyle</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section - premium design */}
      <div className="mt-12 md:mt-16 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Ready to Collaborate?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-base">
          Join our platform to connect with these brands and create impactful partnerships.
        </p>
        <Link to="/influencer">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors text-base shadow-md hover:shadow-lg">
            Register as an Influencer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrandData;