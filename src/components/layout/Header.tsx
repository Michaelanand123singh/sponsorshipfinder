import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Function to handle mobile navigation clicks
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close dropdown when clicking outside
  const handleBlur = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-6" 
      role="banner"
    >
      <nav 
        className="container mx-auto bg-gradient-to-r from-white/95 to-gray-50/95 backdrop-blur-md rounded-full border border-gray-100 shadow-sm" 
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group" 
            aria-label="Sponsorship Finder Home"
          >
            <div className="bg-blue-600 rounded-lg p-2 group-hover:bg-blue-700 transition-colors">
              <Search className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-[#FB8003] to-[#FF9933] bg-clip-text text-transparent">
                Sponsor
              </span>
              <span className="bg-gradient-to-r from-[#1F4D6E] to-[#2D6F9E] bg-clip-text text-transparent">
                ship Finder
              </span>
            </span>
          </Link>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-6" role="menu">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              role="menuitem"
            >
              Home
            </Link>
            <Link 
              to="/influencers" 
              className={`font-medium transition-colors ${
                isActive('/influencers') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              role="menuitem"
            >
              Influencers
            </Link>
            <Link 
              to="/brands" 
              className={`font-medium transition-colors ${
                isActive('/brands') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              role="menuitem"
            >
              Brands
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Get Started Button - Desktop Only */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={handleBlur}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                className={`flex items-center font-medium space-x-2 px-4 py-2 rounded-full ${
                  isDropdownOpen 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } transition-colors`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              {isDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                  role="menu"
                >
                  <Link 
                    to="/register" 
                    role="menuitem"
                    className={`block px-4 py-2 ${
                      isActive('/register') 
                        ? 'text-blue-600 bg-gray-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Register
                  </Link>
                  <Link 
                    to="/login" 
                    role="menuitem"
                    className={`block px-4 py-2 ${
                      isActive('/login') 
                        ? 'text-blue-600 bg-gray-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Login
                  </Link>
                  <hr className="my-2 border-gray-100" />
                  <Link 
                    to="/learn-more" 
                    role="menuitem"
                    className="block px-4 py-2 text-blue-600 hover:bg-gray-50"
                  >
                    Learn More
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu - Now appears below the navbar */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden mt-2 py-4 bg-white rounded-lg shadow-lg border border-gray-100 container mx-auto"
          role="menu"
        >
          <Link 
            to="/" 
            className={`block px-4 py-2 ${
              isActive('/') 
                ? 'text-blue-600 bg-gray-50' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={handleMobileNavClick}
            role="menuitem"
          >
            Home
          </Link>
          <Link 
            to="/influencers" 
            className={`block px-4 py-2 ${
              isActive('/influencers') 
                ? 'text-blue-600 bg-gray-50' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={handleMobileNavClick}
            role="menuitem"
          >
            Influencers
          </Link>
          <Link 
            to="/brands" 
            className={`block px-4 py-2 ${
              isActive('/brands') 
                ? 'text-blue-600 bg-gray-50' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={handleMobileNavClick}
            role="menuitem"
          >
            Brands
          </Link>
          
          <hr className="my-2 border-gray-100" />
          
          {/* Get Started Button for Mobile */}
          <div className="px-4 py-2">
            <Link
              to="/get-started"
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              onClick={handleMobileNavClick}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          
          <div className="mt-2 px-4">
            <div className="flex space-x-4">
              <Link 
                to="/register" 
                className="text-sm text-gray-700 hover:text-blue-600"
                onClick={handleMobileNavClick}
              >
                Register
              </Link>
              <Link 
                to="/login" 
                className="text-sm text-gray-700 hover:text-blue-600"
                onClick={handleMobileNavClick}
              >
                Login
              </Link>
              <Link 
                to="/learn-more" 
                className="text-sm text-gray-700 hover:text-blue-600"
                onClick={handleMobileNavClick}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;