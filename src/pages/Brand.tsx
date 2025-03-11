import React, { useState } from 'react';
import { brands as brandsData } from '../libs/data/data-brand';

// Define the brand data type
interface BrandData {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  foundedYear?: number;
}

const Brand: React.FC = () => {
  const [brands] = useState<BrandData[]>(brandsData);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Featured Brands</h1>
      
      {/* Brands Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
              {brand.logo ? (
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="text-gray-400 text-xl">{brand.name[0].toUpperCase()}</div>
              )}
            </div>
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{brand.name}</h2>
              <p className="text-sm text-gray-500 mb-2">Category: {brand.category}</p>
              {brand.foundedYear && (
                <p className="text-sm text-gray-500 mb-2">Founded: {brand.foundedYear}</p>
              )}
              <p className="text-gray-700 mb-4 line-clamp-3">{brand.description}</p>
              
              <div className="flex justify-between items-center mt-auto">
                {brand.website && (
                  <a 
                    href={brand.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Visit Website
                  </a>
                )}
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* No brands found state */}
      {brands.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No brands found.</p>
        </div>
      )}
    </div>
  );
};

export default Brand;