import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">SponsorshipFinder</h3>
            <p className="text-gray-300 text-sm">
              Connecting influential voices with innovative brands to create meaningful partnerships.
            </p>
          </div>

          {/* For Influencers */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold mb-4">For Influencers</h4>
            <ul className="space-y-2">
              <li><Link to="/influencer/signup" className="text-gray-300 hover:text-white text-sm">Create Profile</Link></li>
              <li><Link to="/browse-brands" className="text-gray-300 hover:text-white text-sm">Browse Brands</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-white text-sm">How It Works</Link></li>
              <li><Link to="/success-stories" className="text-gray-300 hover:text-white text-sm">Success Stories</Link></li>
            </ul>
          </div>

          {/* For Brands */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold mb-4">For Brands</h4>
            <ul className="space-y-2">
              <li><Link to="/brand/signup" className="text-gray-300 hover:text-white text-sm">Register Brand</Link></li>
              <li><Link to="/find-influencers" className="text-gray-300 hover:text-white text-sm">Find Influencers</Link></li>
              <li><Link to="/campaign-tools" className="text-gray-300 hover:text-white text-sm">Campaign Tools</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white text-sm">Pricing</Link></li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white text-sm">FAQ</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white text-sm">Blog</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white text-sm">Resources</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SponsorshipFinder. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-white">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;