import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Brand from './pages/Brand';
import Influencer from './pages/Influencer';
import InfluencerData from './pages/Influencer-data';
import BrandData from './pages/Brand-data';

// Loading Fallback Component
const LoadingFallback: React.FC = () => (
  <div className="flex justify-center items-center h-screen text-xl">
    Loading...
  </div>
);

// SEO Metadata Component
const SEOMetadata: React.FC<{ 
  title?: string, 
  description?: string, 
  canonicalUrl?: string 
}> = ({ 
  title = "SponsorshipFinder | Connect, Create with Brands", 
  description = "Connect with brands that align with your values. Our AI-powered platform matches creators with sponsors for authentic partnerships", 
  canonicalUrl = "https://www.sponsorshipfinder.com/" 
}) => (
  <Helmet>
    {/* Primary Meta Tags */}
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`${canonicalUrl}/og-image.jpg`} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={canonicalUrl} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${canonicalUrl}/twitter-image.jpg`} />

    {/* Canonical Link */}
    <link rel="canonical" href={canonicalUrl} />

    {/* Favicon and App Icons */}
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  </Helmet>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <div className="min-h-screen bg-white">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {/* Home Route */}
                <Route 
                  path="/" 
                  element={
                    <>
                      <SEOMetadata 
                        title="Home | SponsorshipFinder" 
                        description="Discover exclusive partnership opportunities with premium brands seeking talented creators like you."
                      />
                      <Home />
                    </>
                  } 
                />
                
                {/* Brand Dashboard Route */}
                <Route 
                  path="/brand" 
                  element={
                    <>
                      <SEOMetadata 
                        title="Brand Dashboard | SponsorshipFinder" 
                        description="Manage and explore your brand opportunities"
                      />
                      <Brand />
                    </>
                  } 
                />
                
                {/* Influencer Dashboard Route */}
                <Route 
                  path="/influencer" 
                  element={
                    <>
                      <SEOMetadata 
                        title="Influencer Dashboard | SponsorshipFinder" 
                        description="Manage and explore your influencer opportunities"
                      />
                      <Influencer />
                    </>
                  } 
                />

                {/* Influencers Data Route */}
                <Route 
                  path="/influencers" 
                  element={
                    <>
                      <SEOMetadata 
                        title="Influencer Data | SponsorshipFinder" 
                        description="Detailed analytics and insights for influencers"
                      />
                      <InfluencerData />
                    </>
                  } 
                />

                {/* Brands Data Route */}
                <Route 
                  path="/brands" 
                  element={
                    <>
                      <SEOMetadata 
                        title="Brand Data | SponsorshipFinder" 
                        description="Comprehensive brand insights and analytics"
                      />
                      <BrandData />
                    </>
                  } 
                />

                {/* Catch all route - 404 */}
                <Route
                  path="*"
                  element={
                    <>
                      <SEOMetadata 
                        title="Page Not Found | SponsorshipFinder" 
                        description="The page you are looking for does not exist"
                      />
                      <div className="flex flex-col items-center justify-center min-h-screen">
                        <h1 className="text-4xl font-bold text-gray-800">404</h1>
                        <p className="mt-2 text-gray-600">Page not found</p>
                        <Link
                          to="/"
                          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                          Go Home
                        </Link>
                      </div>
                    </>
                  }
                />
              </Routes>
            </Suspense>
          </div>
        </Layout>
      </Router>
    </HelmetProvider>
  );
};

export default App;