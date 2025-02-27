import React, { useState } from 'react';
import { 
  getAllInfluencers,
  getInfluencersByNiche,
  getInfluencersByFollowerRange,
  getInfluencersByPlatform,
  Influencer
} from '../libs/data/data-influencer';
import { Instagram, Youtube, Twitter, Linkedin, Search, Filter } from 'lucide-react';

const InfluencerData: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'niche' | 'followers' | 'platform'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);
  const [selectedFollowerRange, setSelectedFollowerRange] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const allInfluencers = getAllInfluencers();
  const influencersByNiche = getInfluencersByNiche();
  const influencersByFollowerRange = getInfluencersByFollowerRange();
  
  const niches = Object.keys(influencersByNiche);
  
  // Filter influencers based on search term
  const filteredInfluencers = allInfluencers.filter(inf => 
    inf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inf.niche.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inf.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inf.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Get platform icon
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'youtube':
        return <Youtube className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      default:
        return null;
    }
  };
  
  // Format number with K, M suffixes
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  // Render influencer card with improved, standardized sizing
  const renderInfluencerCard = (influencer: Influencer) => (
    <div key={influencer.id} className="bg-white rounded-lg shadow overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1">
      <div className="flex flex-col h-full">
        {/* Reduced header height */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-20 relative">
          <div className="absolute bottom-0 transform translate-y-1/2 left-4">
            {/* Smaller avatar */}
            <div className="w-16 h-16 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500 font-medium">
                {influencer.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
        
        {/* Optimized padding and spacing */}
        <div className="pt-10 px-4 pb-4 flex flex-col flex-grow">
          <h3 className="font-bold text-base text-gray-900 truncate">{influencer.name}</h3>
          <p className="text-blue-600 font-medium text-sm truncate">{influencer.niche}</p>
          <p className="text-gray-600 text-xs mt-2 line-clamp-2 h-8">{influencer.bio}</p>
          
          {/* Platform tags with optimized size */}
          <div className="mt-2 flex flex-wrap gap-1">
            {influencer.platforms.map((platform) => (
              <span key={platform} className="inline-flex items-center gap-1 bg-gray-100 px-1.5 py-0.5 rounded-full text-xs text-gray-700">
                {getPlatformIcon(platform)}
                <span className="truncate max-w-16">{platform}</span>
              </span>
            ))}
          </div>
          
          {/* Stats with standardized height */}
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-50 p-1.5 rounded">
              <p className="text-gray-500">Followers</p>
              <p className="font-bold text-gray-900">{formatNumber(influencer.followers)}</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <p className="text-gray-500">Engagement</p>
              <p className="font-bold text-gray-900">{influencer.engagement}%</p>
            </div>
          </div>
          
          {/* Action button */}
          <div className="mt-auto pt-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-2 rounded text-xs font-medium transition-colors">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <h1 className="text-3xl font-bold text-center mb-3">Our Influencer Network</h1>
      <p className="text-gray-600 text-center text-sm max-w-2xl mx-auto mb-8">
        Connect with top influencers across various niches and platforms. Our network features content creators with diverse audience sizes and engagement rates.
      </p>
      
      {/* Search Bar - more compact */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search influencers by name, niche, or location..."
            className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>
      </div>
      
      {/* Filter Tabs - improved responsive design */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex -mb-px max-w-3xl mx-auto overflow-x-auto">
          <button 
            className={`py-2 px-4 text-center border-b-2 font-medium text-xs whitespace-nowrap ${
              activeTab === 'all' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All Influencers
          </button>
          <button 
            className={`py-2 px-4 text-center border-b-2 font-medium text-xs whitespace-nowrap ${
              activeTab === 'niche' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('niche')}
          >
            By Niche
          </button>
          <button 
            className={`py-2 px-4 text-center border-b-2 font-medium text-xs whitespace-nowrap ${
              activeTab === 'followers' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('followers')}
          >
            By Followers
          </button>
          <button 
            className={`py-2 px-4 text-center border-b-2 font-medium text-xs whitespace-nowrap ${
              activeTab === 'platform' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('platform')}
          >
            By Platform
          </button>
        </nav>
      </div>
      
      {/* Content based on active tab with improved grid */}
      <div className="mb-8">
        {activeTab === 'all' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filteredInfluencers.map(renderInfluencerCard)}
          </div>
        )}
        
        {activeTab === 'niche' && (
          <div>
            <div className="flex flex-wrap gap-1 mb-4">
              {niches.map(niche => (
                <button
                  key={niche}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedNiche === niche
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedNiche(selectedNiche === niche ? null : niche)}
                >
                  {niche}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {(selectedNiche 
                ? influencersByNiche[selectedNiche] 
                : filteredInfluencers
              ).map(renderInfluencerCard)}
            </div>
          </div>
        )}
        
        {activeTab === 'followers' && (
          <div>
            <div className="flex flex-wrap gap-1 mb-4">
              {[
                { key: 'micro', label: 'Micro (< 100K)' },
                { key: 'small', label: 'Small (100K - 500K)' },
                { key: 'medium', label: 'Medium (500K - 1M)' },
                { key: 'large', label: 'Large (1M+)' }
              ].map(range => (
                <button
                  key={range.key}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedFollowerRange === range.key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedFollowerRange(
                    selectedFollowerRange === range.key ? null : range.key
                  )}
                >
                  {range.label}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {(selectedFollowerRange 
                ? influencersByFollowerRange[selectedFollowerRange as keyof typeof influencersByFollowerRange] 
                : filteredInfluencers
              ).map(renderInfluencerCard)}
            </div>
          </div>
        )}
        
        {activeTab === 'platform' && (
          <div>
            <div className="flex flex-wrap gap-1 mb-4">
              {['Instagram', 'YouTube', 'TikTok', 'Twitter', 'LinkedIn'].map(platform => (
                <button
                  key={platform}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedPlatform === platform
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedPlatform(
                    selectedPlatform === platform ? null : platform
                  )}
                >
                  <span className="flex items-center gap-1">
                    {getPlatformIcon(platform)}
                    {platform}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {(selectedPlatform 
                ? getInfluencersByPlatform(selectedPlatform) 
                : filteredInfluencers
              ).map(renderInfluencerCard)}
            </div>
          </div>
        )}
      </div>
      
      {/* Stats Section - more compact */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 md:p-6 text-white">
        <h2 className="text-xl font-bold mb-4 text-center">Influencer Network Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <p className="text-white/70 text-xs">Total Influencers</p>
            <p className="text-2xl font-bold">{allInfluencers.length}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <p className="text-white/70 text-xs">Niches</p>
            <p className="text-2xl font-bold">{niches.length}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <p className="text-white/70 text-xs">Average Followers</p>
            <p className="text-2xl font-bold">
              {formatNumber(
                Math.round(allInfluencers.reduce((sum, inf) => sum + inf.followers, 0) / allInfluencers.length)
              )}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <p className="text-white/70 text-xs">Average Engagement</p>
            <p className="text-2xl font-bold">
              {(allInfluencers.reduce((sum, inf) => sum + inf.engagement, 0) / allInfluencers.length).toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA Section - more compact */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold mb-2">Ready to Work with Our Influencers?</h2>
        <p className="text-gray-600 text-sm max-w-xl mx-auto mb-4">
          Join our platform to connect with these influencers and create impactful marketing campaigns.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors text-sm">
          Register as a Brand
        </button>
      </div>
    </div>
  );
};

export default InfluencerData;