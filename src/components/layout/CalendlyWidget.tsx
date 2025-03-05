import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

// Define a type for Calendly window object
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      showPopupWidget: (url: string) => void;
    };
  }
}

interface CalendlyWidgetProps {
  url?: string;
  prefill?: {
    name?: string;
    email?: string;
    customFields?: Record<string, string>;
  };
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
  url = 'https://calendly.com/official-sponsorshipfinder/30min',
  prefill = {}
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Preload Calendly resources
    const preloadResources = () => {
      const links = [
        {
          rel: 'preconnect',
          href: 'https://assets.calendly.com'
        },
        {
          rel: 'dns-prefetch',
          href: 'https://assets.calendly.com'
        }
      ];

      links.forEach(link => {
        const linkElement = document.createElement('link');
        linkElement.rel = link.rel;
        linkElement.href = link.href;
        document.head.appendChild(linkElement);
      });
    };

    // Load Calendly script dynamically
    const loadCalendlyScript = () => {
      if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
        setIsLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setIsLoaded(true);
      script.onerror = () => setError('Failed to load Calendly script');
      document.body.appendChild(script);

      // Load Calendly stylesheet
      const stylesheet = document.createElement('link');
      stylesheet.href = 'https://assets.calendly.com/assets/external/widget.css';
      stylesheet.rel = 'stylesheet';
      document.head.appendChild(stylesheet);

      return () => {
        document.body.removeChild(script);
        document.head.removeChild(stylesheet);
      };
    };

    preloadResources();
    const cleanup = loadCalendlyScript();

    return () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, []);

  // Initialize Calendly widget with prefill data
  const initCalendlyWidget = () => {
    if (window.Calendly) {
      try {
        window.Calendly.initPopupWidget({
          url,
          // Optional prefill data
          pageSettings: {
            ...prefill
          }
        });
      } catch (err) {
        setError('Failed to initialize Calendly widget');
        console.error(err);
      }
    }
  };

  // Error boundary fallback
  if (error) {
    return (
      <div 
        role="alert" 
        className="p-4 bg-red-50 text-red-700 rounded-lg"
      >
        <p>Unable to load scheduling widget. Please try again later.</p>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      {/* SEO and Performance Optimizations */}
      <Helmet>
        {/* Preload Calendly resources */}
        <link 
          rel="preload" 
          href="https://assets.calendly.com/assets/external/widget.js" 
          as="script" 
        />
        <link 
          rel="preload" 
          href="https://assets.calendly.com/assets/external/widget.css" 
          as="style" 
        />

        {/* Structured Data for Scheduling */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sponsorship Finder Consultation",
            "description": "Schedule a 30-minute consultation with our team",
            "provider": {
              "@type": "Organization",
              "name": "Sponsorship Finder"
            },
            "serviceType": "Business Consultation",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      {/* Calendly Widget Trigger */}
      <button
        onClick={initCalendlyWidget}
        disabled={!isLoaded}
        aria-label="Schedule a Consultation"
        className={`
          px-4 py-2 rounded-lg 
          ${isLoaded 
            ? 'bg-blue-500 text-white hover:bg-blue-600' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
          transition-colors duration-300
        `}
      >
        {isLoaded ? 'Schedule Consultation' : 'Loading...'}
      </button>
    </>
  );
};

export default CalendlyWidget;