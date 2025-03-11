import React, { useState, useEffect, useCallback } from 'react';
import { Card } from '../components/layout/Card';
import { Button } from '../components/layout/Button';
import { Loader2, Search, Filter, ArrowUpDown } from 'lucide-react';
import { debounce } from 'lodash';
import { requirements } from '../libs/data/requirement-data';

// Types
interface SponsorshipRequirement {
  id: string;
  title: string;
  description: string;
  category: string;
  brandName: string;
  budgetRange: {
    min: number;
    max: number;
  };
  createdAt: string;
  deadline?: string;
  followersRequired?: number;
  platforms?: string[];
  location?: string;
}

interface FilterOptions {
  search: string;
  category: string;
  minBudget: number;
  maxBudget: number;
  sortBy: 'newest' | 'highestBudget' | 'deadline';
  platforms: string[];
}

const FeedPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredRequirements, setFilteredRequirements] = useState<SponsorshipRequirement[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    category: 'all',
    minBudget: 0,
    maxBudget: 50000,
    sortBy: 'newest',
    platforms: [],
  });
  const [activeTab, setActiveTab] = useState<string>('basic');
  const [sliderValues, setSliderValues] = useState<[number, number]>([0, 50000]);

  const categories = [
    'Fashion', 'Beauty', 'Travel', 'Fitness', 'Technology', 
    'Food', 'Gaming', 'Lifestyle', 'Education', 'Entertainment'
  ];

  const platformOptions = [
    'Instagram', 'YouTube', 'TikTok', 'Twitter', 'Twitch', 'LinkedIn', 'Facebook'
  ];

  // Load requirements data
  useEffect(() => {
    setIsLoading(true);
    // Simulate API loading
    setTimeout(() => {
      setFilteredRequirements(requirements);
      setIsLoading(false);
    }, 500);
  }, []);

  // Apply filters
  const applyFilters = useCallback(() => {
    let result = [...requirements];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        item => 
          item.title.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.brandName.toLowerCase().includes(searchLower)
      );
    }

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter(item => item.category === filters.category);
    }

    // Budget filter
    result = result.filter(
      item => 
        item.budgetRange.max >= filters.minBudget && 
        item.budgetRange.min <= filters.maxBudget
    );

    // Platform filter
    if (filters.platforms.length > 0) {
      result = result.filter(
        item => item.platforms?.some(platform => filters.platforms.includes(platform))
      );
    }

    // Sorting
    switch (filters.sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'highestBudget':
        result.sort((a, b) => b.budgetRange.max - a.budgetRange.max);
        break;
      case 'deadline':
        result.sort((a, b) => {
          if (!a.deadline) return 1;
          if (!b.deadline) return -1;
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        });
        break;
    }

    setFilteredRequirements(result);
  }, [filters]);

  // Apply filters when filters change
  useEffect(() => {
    if (!isLoading) {
      applyFilters();
    }
  }, [filters, applyFilters, isLoading]);

  // Debounced search handler
  const handleSearchChange = debounce((value: string) => {
    setFilters(prev => ({ ...prev, search: value }));
  }, 300);

  // Format budget range for display
  const formatBudget = (min: number, max: number) => {
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Handle apply button click
  const handleApply = (requirementId: string) => {
    alert(`Navigating to apply for ${requirementId}`);
    // Without react-router, we can use window.location.href = `/apply/${requirementId}`;
  };

  // Toggle platform filter
  const togglePlatformFilter = (platform: string) => {
    setFilters(prev => {
      if (prev.platforms.includes(platform)) {
        return { ...prev, platforms: prev.platforms.filter(p => p !== platform) };
      } else {
        return { ...prev, platforms: [...prev.platforms, platform] };
      }
    });
  };

  // Custom Badge component since we don't have the UI library
  const Badge = ({ 
    children, 
    variant = 'default', 
    className = '', 
    onClick 
  }: { 
    children: React.ReactNode, 
    variant?: 'default' | 'secondary' | 'outline', 
    className?: string,
    onClick?: () => void
  }) => {
    let classes = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ";
    
    if (variant === 'default') {
      classes += "bg-primary text-primary-foreground ";
    } else if (variant === 'secondary') {
      classes += "bg-gray-100 text-gray-800 ";
    } else if (variant === 'outline') {
      classes += "border border-gray-200 text-gray-700 ";
    }
    
    if (onClick) {
      classes += "cursor-pointer hover:opacity-80 ";
    }
    
    classes += className;
    
    return (
      <span className={classes} onClick={onClick}>
        {children}
      </span>
    );
  };

  // Custom Input component
  const Input = ({ 
    placeholder, 
    className = '', 
    onChange 
  }: { 
    placeholder?: string, 
    className?: string, 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
  }) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md ${className}`}
        onChange={onChange}
      />
    );
  };

  // Custom Select component
  const Select = ({ 
    value, 
    options, 
    onChange,
    placeholder
  }: { 
    value: string, 
    options: {value: string, label: string}[],
    onChange: (value: string) => void,
    placeholder?: string
  }) => {
    return (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };

  // Custom Slider component (basic implementation)
  const Slider = ({ 
    min = 0, 
    max = 100, 
    step = 1,
    value,
    onChange
  }: { 
    min?: number, 
    max?: number, 
    step?: number,
    value: [number, number],
    onChange: (value: [number, number]) => void
  }) => {
    return (
      <div className="w-full flex space-x-4 items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[0]}
          onChange={(e) => onChange([parseInt(e.target.value), value[1]])}
          className="w-full"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[1]}
          onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
          className="w-full"
        />
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8 mt-28 px-4">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold">Find Sponsorship Opportunities</h1>
          <p className="text-gray-500">
            Browse the latest sponsorship requirements from brands looking to collaborate with influencers
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative flex-grow">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={18} />
              </div>
              <Input 
                placeholder="Search opportunities..." 
                className="pl-10"
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-2">
              <Select
                value={filters.category}
                options={[
                  { value: 'all', label: 'All Categories' },
                  ...categories.map(cat => ({ value: cat, label: cat }))
                ]}
                onChange={(value) => setFilters(prev => ({ ...prev, category: value }))}
                placeholder="Category"
              />
              
              <Select
                value={filters.sortBy}
                options={[
                  { value: 'newest', label: 'Newest First' },
                  { value: 'highestBudget', label: 'Highest Budget' },
                  { value: 'deadline', label: 'Deadline' }
                ]}
                onChange={(value: string) => 
                  setFilters(prev => ({ ...prev, sortBy: value as 'newest' | 'highestBudget' | 'deadline' }))
                }
                placeholder="Sort by"
              />
            </div>
          </div>
          
          <div className="mt-4">
            {/* Simple tabs implementation */}
            <div className="border-b mb-4">
              <div className="flex space-x-4">
                <button 
                  className={`pb-2 px-1 ${activeTab === 'basic' ? 'border-b-2 border-primary font-medium' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('basic')}
                >
                  Basic Filters
                </button>
                <button 
                  className={`pb-2 px-1 ${activeTab === 'advanced' ? 'border-b-2 border-primary font-medium' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('advanced')}
                >
                  Advanced Filters
                </button>
              </div>
            </div>
            
            {activeTab === 'basic' && (
              <div className="flex flex-col space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">${sliderValues[0].toLocaleString()}</span>
                    <Slider
                      min={0}
                      max={50000}
                      step={500}
                      value={sliderValues}
                      onChange={(values) => {
                        setSliderValues(values);
                        setFilters(prev => ({ 
                          ...prev, 
                          minBudget: values[0], 
                          maxBudget: values[1] 
                        }));
                      }}
                    />
                    <span className="text-sm">${sliderValues[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'advanced' && (
              <div className="flex flex-col space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Platforms</label>
                  <div className="flex flex-wrap gap-2">
                    {platformOptions.map(platform => (
                      <Badge 
                        key={platform}
                        variant={filters.platforms.includes(platform) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => togglePlatformFilter(platform)}
                      >
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {filteredRequirements.length} {filteredRequirements.length === 1 ? 'Opportunity' : 'Opportunities'} Found
            </h2>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="animate-spin h-8 w-8 text-primary" />
              <span className="ml-2">Loading opportunities...</span>
            </div>
          ) : filteredRequirements.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <p className="text-gray-500 mb-4">No sponsorship opportunities found matching your criteria.</p>
              <Button 
                onClick={() => setFilters({
                  search: '',
                  category: 'all',
                  minBudget: 0,
                  maxBudget: 50000,
                  sortBy: 'newest',
                  platforms: [],
                })}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRequirements.map((requirement) => (
                <Card key={requirement.id} className="overflow-hidden transition-all duration-200 hover:shadow-md">
                  <div className="p-4 pb-3">
                    <div className="flex justify-between items-start">
                      <Badge className="mb-2">{requirement.category}</Badge>
                      <Badge variant="outline" className="text-xs">
                        ID: {requirement.id}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold line-clamp-2 hover:line-clamp-none cursor-pointer">{requirement.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-2">
                      <span>by <span className="font-medium">{requirement.brandName}</span></span>
                      <span>•</span>
                      <span>Posted {formatDate(requirement.createdAt)}</span>
                    </div>
                  </div>
                  
                  <div className="px-4 pb-3">
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {requirement.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {requirement.platforms?.map(platform => (
                          <Badge key={platform} variant="secondary" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-semibold">Budget: </span>
                          <span>{formatBudget(requirement.budgetRange.min, requirement.budgetRange.max)}</span>
                        </div>
                        
                        {requirement.deadline && (
                          <div className="text-xs text-right">
                            <span className="font-medium">Deadline: </span>
                            <span>{formatDate(requirement.deadline)}</span>
                          </div>
                        )}
                      </div>
                      
                      {requirement.followersRequired && (
                        <div className="text-sm">
                          <span className="font-medium">Min. Followers: </span>
                          <span>{requirement.followersRequired.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="px-4 py-3 border-t">
                    <Button 
                      className="w-full" 
                      onClick={() => handleApply(requirement.id)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
          
          {filteredRequirements.length > 0 && (
            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;