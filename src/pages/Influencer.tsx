import React, { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '../components/layout/Card';
import { Button } from '../components/layout/Button';
import { DollarSign, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../components/layout/Dialog";

// Performance: Lazy load heavy components
const CalendlyWidget = lazy(() => import('../components/layout/CalendlyWidget'));

interface InfluencerBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  ariaLabel: string;
}

// Performance Optimization: Memoized Component
const BenefitCard: React.FC<InfluencerBenefit> = React.memo(({ 
  icon, 
  title, 
  description, 
  ariaLabel 
}) => (
  <Card 
    className="border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    aria-label={ariaLabel}
  >
    <CardHeader>
      <CardTitle className="flex items-center gap-3">
        {icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
));

// Loading Fallback Component
const LoadingSpinner: React.FC = () => (
  <div 
    className="flex justify-center items-center min-h-screen"
    aria-live="polite" 
    aria-busy="true"
  >
    <div className="animate-pulse w-16 h-16 bg-purple-500 rounded-full"></div>
  </div>
);

const Influencer: React.FC = () => {
  // Preload resources
  useEffect(() => {
    // Preconnect to critical domains
    const preconnectLinks = [
      'https://assets.calendly.com',
      'https://docs.google.com'
    ];

    preconnectLinks.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    return () => {
      preconnectLinks.forEach(domain => {
        const existingLink = document.querySelector(`link[href="${domain}"]`);
        if (existingLink) document.head.removeChild(existingLink);
      });
    };
  }, []);

  const benefits: InfluencerBenefit[] = [
    {
      icon: <DollarSign className="w-6 h-6 text-purple-500" />,
      title: "Competitive Compensation",
      description: "Get paid your worth with transparent pricing and timely payments.",
      ariaLabel: "Competitive pay for creators"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
      title: "Brand Safety",
      description: "Work with pre-vetted brands that align with your values.",
      ariaLabel: "Verified and safe brand partnerships"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: "Growth Opportunities",
      description: "Access exclusive brand deals and long-term partnerships.",
      ariaLabel: "Career growth for influencers"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: "Creative Freedom",
      description: "Maintain your authentic voice while creating branded content.",
      ariaLabel: "Maintain creative authenticity"
    }
  ];

  const openCalendly = () => {
    // Performance: Lazy load Calendly
    import('https://assets.calendly.com/assets/external/widget.js')
      .then(() => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: 'https://calendly.com/official-sponsorshipfinder/30min'
          });
        }
      })
      .catch(error => console.error('Calendly load error', error));
  };

  return (
    <>
      <Helmet>
        {/* SEO Metadata */}
        <title>Become a Creator | Sponsorship Finder</title>
        <meta 
          name="description" 
          content="Join 5000+ creators. Monetize your influence with verified brand partnerships. Earn, grow, and maintain your creative authenticity." 
        />
        <meta 
          name="keywords" 
          content="influencer marketing, creator economy, brand partnerships, monetization, social media influencers" 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Become a Creator | Sponsorship Finder" />
        <meta 
          property="og:description" 
          content="Join 5000+ creators. Monetize your influence with verified brand partnerships." 
        />
        <meta property="og:type" content="website" />
        
        {/* Structured Data: Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sponsorship Finder",
            "description": "Platform connecting creators with brand partnerships",
            "numberOfEmployees": "50-100",
            "foundingDate": "2023",
            "url": "https://sponsorshipfinder.com",
            "logo": "https://sponsorshipfinder.com/logo.png"
          })}
        </script>

        {/* Structured Data: CreativeWork */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Creator Monetization Platform",
            "description": "Platform for influencers to find brand partnerships",
            "genre": "Influencer Marketing",
            "keywords": "influencer, brand deals, monetization"
          })}
        </script>
      </Helmet>

      <div 
        className="min-h-screen bg-white" 
        role="main" 
        aria-label="Influencer Opportunities Page"
      >
        {/* Hero Section */}
        <section 
          className="py-20 bg-gradient-to-r from-purple-600 to-purple-800"
          aria-labelledby="hero-title"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 
                id="hero-title" 
                className="text-4xl font-bold mb-6"
              >
                Turn Your Influence Into Income
              </h1>
              <p className="text-xl mb-8">
                Connect with brands that value your authentic voice and creative content
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    className="bg-white text-purple-600 hover:bg-purple-50"
                    aria-label="Join as Creator Form"
                  >
                    Join as Creator
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent 
                  className="max-w-4xl h-3/4"
                  aria-label="Creator Registration Form"
                >
                  <Suspense fallback={<LoadingSpinner />}>
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSeosG9NXjJk7rzDDIjEpqt94XTuhghcBOiYOAbOc-AQj0Wtvw/viewform?embedded=true"
                      className="w-full h-full border-0"
                      title="Join as Creator Form"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                    >
                      Loading form...
                    </iframe>
                  </Suspense>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section 
          className="py-20" 
          aria-labelledby="benefits-title"
        >
          <div className="container mx-auto px-4">
            <h2 
              id="benefits-title" 
              className="text-3xl font-bold text-center mb-12"
            >
              Benefits of Being a Creator
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard 
                  key={index} 
                  {...benefit} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section 
          className="py-20 bg-gray-50" 
          aria-labelledby="stats-title"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { value: "5000+", label: "Active Creators" },
                { value: "$2M+", label: "Paid to Creators" },
                { value: "1000+", label: "Brand Partnerships" }
              ].map((stat, index) => (
                <div key={index}>
                  <h3 
                    className="text-4xl font-bold text-purple-600 mb-2"
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-20" 
          aria-labelledby="cta-title"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 
              id="cta-title" 
              className="text-3xl font-bold mb-6"
            >
              Start Monetizing Your Influence
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our community of successful creators and start earning
            </p>
            <Button 
              className="bg-purple-600 text-white hover:bg-purple-700"
              onClick={openCalendly}
              aria-label="Schedule a consultation"
            >
              Apply Now
            </Button>
          </div>
        </section>

        {/* Lazy Load Calendly Widget */}
        <Suspense fallback={null}>
          <CalendlyWidget />
        </Suspense>
      </div>
    </>
  );
};

export default Influencer;