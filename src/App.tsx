import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Brand from './pages/Brand';
import Influencer from './pages/Influencer';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />
            
            {/* Brand Dashboard Route */}
            <Route path="/brand" element={<Brand />} />
            
            {/* Influencer Dashboard Route */}
            <Route path="/influencer" element={<Influencer />} />

            {/* Catch all route - 404 */}
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center min-h-screen">
                  <h1 className="text-4xl font-bold text-gray-800">404</h1>
                  <p className="mt-2 text-gray-600">Page not found</p>
                  <a
                    href="/"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    Go Home
                  </a>
                </div>
              }
            />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
};

export default App;