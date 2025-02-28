import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, User, Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation(); // This hook gives us the current URL path
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-white/95 to-gray-50/95 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-blue-600 rounded-lg p-2 group-hover:bg-blue-700 transition-colors">
              <Search className="w-5 h-5 text-white" />
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
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
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
            >
              Brands
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                  isProfileOpen 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } transition-colors`}
              >
                <User className="w-5 h-5" />
                <span className="hidden md:inline">Account</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link to="/profile" className={`block px-4 py-2 ${isActive('/profile') ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-50'}`}>Profile</Link>
                  <Link to="/settings" className={`block px-4 py-2 ${isActive('/settings') ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-50'}`}>Settings</Link>
                  <hr className="my-2 border-gray-100" />
                  <Link to="/logout" className="block px-4 py-2 text-red-600 hover:bg-gray-50">Logout</Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg border border-gray-100">
            <Link to="/" className={`block px-4 py-2 ${isActive('/') ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-50'}`}>Home</Link>
            <Link to="/influencers" className={`block px-4 py-2 ${isActive('/influencers') ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-50'}`}>Influencers</Link>
            <Link to="/brands" className={`block px-4 py-2 ${isActive('/brands') ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-50'}`}>Brands</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;