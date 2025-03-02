import React, { useState, useEffect } from 'react';
import { requirements, Requirement } from '../libs/data/requirement-data';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Calendar, Users, Briefcase, Award, Gift, TrendingUp, ChevronDown } from 'lucide-react';

const Feed: React.FC = () => {
  const [selectedRequirement, setSelectedRequirement] = useState<Requirement | null>(null);
  const [filterType, setFilterType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredRequirements, setFilteredRequirements] = useState(requirements);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sortOption, setSortOption] = useState('newest');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showGoogleForm, setShowGoogleForm] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle filtering, searching and sorting
  useEffect(() => {
    let result = [...requirements];
    
    // Apply collaboration type filter
    if (filterType !== 'All') {
      result = result.filter(req => req.collaborationType === filterType);
    }
    
    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(req => 
        req.title.toLowerCase().includes(term) || 
        req.brand.toLowerCase().includes(term) || 
        req.description.toLowerCase().includes(term) ||
        req.category.toLowerCase().includes(term)
      );
    }
    
    // Apply sorting
    if (sortOption === 'newest') {
      result.sort((a, b) => new Date(b.posted || b.deadline).getTime() - new Date(a.posted || a.deadline).getTime());
    } else if (sortOption === 'deadline') {
      result.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
    } else if (sortOption === 'budget') {
      result.sort((a, b) => {
        const aBudget = parseInt(a.budget?.replace(/[^0-9]/g, '') || '0');
        const bBudget = parseInt(b.budget?.replace(/[^0-9]/g, '') || '0');
        return bBudget - aBudget;
      });
    }
    
    setFilteredRequirements(result);
  }, [filterType, searchTerm, sortOption]);

  const handleCardClick = (req: Requirement) => {
    setSelectedRequirement(req);
    document.body.style.overflow = 'hidden';
    setShowGoogleForm(false);
  };

  const handleApply = () => {
    setShowGoogleForm(true);
  };

  const handleClose = () => {
    setSelectedRequirement(null);
    setShowGoogleForm(false);
    document.body.style.overflow = 'auto';
  };

  // Get collaborationType icon
  const getCollaborationIcon = (type: string) => {
    switch (type) {
      case 'Paid':
        return <Briefcase className="w-4 h-4" />;
      case 'Unpaid':
        return <Users className="w-4 h-4" />;
      case 'Barter':
        return <Gift className="w-4 h-4" />;
      default:
        return <Award className="w-4 h-4" />;
    }
  };

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const sortOptions = [
    { value: 'newest', label: 'Newest first', icon: <TrendingUp size={14} /> },
    { value: 'deadline', label: 'Deadline: Soonest', icon: <Calendar size={14} /> },
    { value: 'budget', label: 'Budget: Highest', icon: <Briefcase size={14} /> }
  ];

  const getSortLabel = () => {
    return sortOptions.find(option => option.value === sortOption)?.label || 'Sort by';
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header with gradient background */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-28 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Collaboration Opportunities</h1>
          <p className="text-blue-100 max-w-2xl text-lg md:text-xl">
            Discover exclusive partnership opportunities with premium brands seeking talented creators like you.
          </p>
        </div>
      </header>

      {/* Filter bar - sticky on scroll */}
      <div className={`sticky top-0 z-30 w-full bg-white backdrop-blur-lg bg-opacity-95 transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg' : 'py-4 shadow-md'}`}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-auto flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search opportunities..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto md:justify-end">
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filterType === 'All' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setFilterType('All')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-1 ${filterType === 'Paid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setFilterType('Paid')}
              >
                <Briefcase size={14} />
                Paid
              </button>
              <button 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-1 ${filterType === 'Unpaid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setFilterType('Unpaid')}
              >
                <Users size={14} />
                Unpaid
              </button>
              <button 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-1 ${filterType === 'Barter' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setFilterType('Barter')}
              >
                <Gift size={14} />
                Barter
              </button>
            </div>
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Collaboration Opportunities Feed */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          {/* Results count and sort options */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <p className="text-gray-500 mb-4 md:mb-0">
              Showing <span className="font-semibold text-gray-700">{filteredRequirements.length}</span> opportunities
            </p>
            <div className="relative">
              <button 
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                <span className="text-gray-500">Sort by:</span>
                <span className="font-medium">{getSortLabel()}</span>
                <ChevronDown size={14} className={`transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showSortDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-40">
                  {sortOptions.map(option => (
                    <button
                      key={option.value}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-gray-50 text-gray-700 first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => {
                        setSortOption(option.value);
                        setShowSortDropdown(false);
                      }}
                    >
                      {option.icon}
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Requirement cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRequirements.map((req) => (
              <motion.div 
                key={req.id}
                id={`requirement-card-${req.id}`} 
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col group"
                onClick={() => handleCardClick(req)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">{req.brand.charAt(0)}</span>
                      </div>
                      <span className="font-medium text-gray-700">{req.brand}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1
                        ${req.collaborationType === 'Paid' ? 'bg-emerald-50 text-emerald-700' : 
                        req.collaborationType === 'Unpaid' ? 'bg-amber-50 text-amber-700' : 
                        'bg-purple-50 text-purple-700'}`}
                      >
                        {getCollaborationIcon(req.collaborationType)}
                        {req.collaborationType}
                      </span>
                      <span className="px-2 py-1 rounded bg-gray-100 text-xs font-mono text-gray-600">ID: {req.id}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">{req.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{req.description}</p>
                  
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="inline-block w-20 text-gray-500">Platform:</span>
                      <span className="font-medium">{req.platform}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="inline-block w-20 text-gray-500">Category:</span>
                      <span className="font-medium">{req.category}</span>
                    </div>
                    {req.budget && req.collaborationType === 'Paid' && (
                      <div className="flex items-center text-sm">
                        <span className="inline-block w-20 text-gray-500">Budget:</span>
                        <span className="font-medium text-emerald-600">{req.budget}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="border-t border-gray-100 p-4 bg-gray-50 flex justify-between items-center">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>Deadline: {formatDate(req.deadline)}</span>
                  </div>
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state if no requirements match filter */}
          {filteredRequirements.length === 0 && (
            <motion.div 
              className="text-center py-16 bg-white rounded-xl shadow-md border border-gray-100 my-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Filter size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No opportunities found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We couldn't find any collaboration opportunities matching your criteria. Try adjusting your filters or check back later.
              </p>
              <button 
                onClick={() => {
                  setFilterType('All');
                  setSearchTerm('');
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Success notification */}
      <div 
        id="notification" 
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 translate-y-24 transition-transform duration-300 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Successfully applied to collaboration</span>
      </div>

      {/* Requirement detail modal */}
      <AnimatePresence>
        {selectedRequirement && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div 
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              id={`requirement-modal-${selectedRequirement.id}`}
            >
              {/* Header with close button */}
              <div className="relative p-6 border-b border-gray-100">
                <button 
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">{selectedRequirement.brand.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-500">{selectedRequirement.brand}</p>
                      <span className="px-2 py-1 rounded bg-gray-100 text-xs font-mono text-gray-600">ID: {selectedRequirement.id}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedRequirement.title}</h2>
                  </div>
                </div>
              </div>
              
              {!showGoogleForm ? (
                <>
                  <div className="p-6">
                    {/* Collaboration type and deadline */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                        ${selectedRequirement.collaborationType === 'Paid' ? 'bg-emerald-50 text-emerald-700' : 
                        selectedRequirement.collaborationType === 'Unpaid' ? 'bg-amber-50 text-amber-700' : 
                        'bg-purple-50 text-purple-700'}`}
                      >
                        {getCollaborationIcon(selectedRequirement.collaborationType)}
                        {selectedRequirement.collaborationType} Collaboration
                        {selectedRequirement.budget && selectedRequirement.collaborationType === 'Paid' ? ` · ${selectedRequirement.budget}` : ''}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Deadline: {formatDate(selectedRequirement.deadline)}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">About this opportunity</h3>
                      <div className="text-gray-700 leading-relaxed space-y-4">
                        <p>{selectedRequirement.description}</p>
                      </div>
                    </div>
                    
                    {/* Details grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">Platform</h4>
                        <p className="text-gray-900 font-medium">{selectedRequirement.platform}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">Category</h4>
                        <p className="text-gray-900 font-medium">{selectedRequirement.category}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">Deadline</h4>
                        <p className="text-gray-900 font-medium">{formatDate(selectedRequirement.deadline)}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">Collaboration Type</h4>
                        <p className="text-gray-900 font-medium">{selectedRequirement.collaborationType}</p>
                      </div>
                    </div>
                    
                    {/* Requirements */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">Requirements</h3>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        {selectedRequirement.requirements ? (
                          selectedRequirement.requirements.map((req, index) => (
                            <li key={`${selectedRequirement.id}-req-${index}`}>{req}</li>
                          ))
                        ) : (
                          <>
                            <li>Minimum {selectedRequirement.platform.includes(',') ? selectedRequirement.platform.split(',')[0].trim() : selectedRequirement.platform} following of 5,000+</li>
                            <li>Experience creating content in the {selectedRequirement.category} niche</li>
                            <li>Ability to complete the project before the deadline</li>
                            <li>Professional communication and timely responses</li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    {/* How to apply */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">How to Apply</h3>
                      <p className="text-gray-700 mb-4">
                        Click the "Apply for Collaboration" button below to express your interest. The brand will receive your profile and portfolio, and they'll reach out if they'd like to move forward.
                      </p>
                    </div>
                  </div>
                  
                  {/* Footer with apply button */}
                  <div className="border-t border-gray-100 p-6 bg-gray-50">
                    <button 
                      onClick={handleApply}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                      id={`apply-button-${selectedRequirement.id}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Apply for Collaboration
                    </button>
                  </div>
                </>
              ) : (
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-6 text-gray-800 text-center">Complete the application form</h3>
                  <div className="flex justify-center">
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSfiJOFxaXFILww08Zd3mpycupETEjMgluncH30J6tLMcfA6yA/viewform?embedded=true" 
                      width="640" 
                      height="600" 
                      frameBorder="0" 
                      marginHeight="0" 
                      marginWidth="0"
                      className="max-w-full"
                    >
                      Loading…
                    </iframe>
                  </div>
                  <div className="mt-6 text-center">
                    <button 
                      onClick={() => setShowGoogleForm(false)}
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors shadow-sm mr-4"
                    >
                      Back to Details
                    </button>
                    <button 
                      onClick={handleClose}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Feed;