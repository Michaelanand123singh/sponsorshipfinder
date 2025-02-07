import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, User } from 'lucide-react';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Account</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Profile</Link>
                <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Settings</Link>
                <hr className="my-2 border-gray-100" />
                <Link to="/logout" className="block px-4 py-2 text-red-600 hover:bg-gray-50">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;