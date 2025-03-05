import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '../components/layout/Card';
import { Button } from '../components/layout/Button';
import { ArrowRight, BarChart, Target, Users, Zap } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../components/layout/Dialog";

interface BrandFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  keywords: string[];
}

const Brand: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const features: BrandFeature[] = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "Targeted Influencer Matching",
      description: "Connect with influencers who perfectly align with your brand values and target audience.",
      keywords: ["influencer marketing", "brand alignment", "targeted partnerships"]
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-500" />,
      title: "Comprehensive Campaign Analytics",
      description: "Track ROI, engagement rates, and campaign performance in real-time with advanced analytics tools.",
      keywords: ["marketing analytics", "campaign performance", "ROI tracking"]
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Advanced Audience Insights",
      description: "Gain deep, actionable insights into influencer audiences to ensure perfect marketing alignment.",
      keywords: ["audience research", "marketing insights", "demographic targeting"]
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Rapid Campaign Deployment",
      description: "Streamlined, efficient process to launch influencer marketing campaigns within days, not weeks.",
      keywords: ["quick launch", "marketing efficiency", "campaign acceleration"]
    }
  ];

  return (
    <>
      {/* SEO Helmet for metadata and structured data */}
      <Helmet>
        <title>Influencer Marketing Platform | Brand Growth Solutions</title>
        <meta 
          name="description" 
          content="Amplify your brand with our advanced influencer matching platform. Connect with authentic creators, track performance, and accelerate your marketing strategy." 
        />
        <meta 
          name="keywords" 
          content="influencer marketing, brand growth, marketing platform, creator partnerships" 
        />
        <link rel="canonical" href="https://www.sponsorshipfinder.com/brand" />
        
        {/* Open Graph for social media sharing */}
        <meta property="og:title" content="Influencer Marketing Platform" />
        <meta 
          property="og:description" 
          content="Powerful influencer matching solutions to boost your brand's reach and engagement." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sponsorshipfinder.com/brand" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Influencer Marketing Platform",
            "description": "Connect with authentic creators and accelerate your brand growth",
            "publisher": {
              "@type": "Organization",
              "name": "Your Brand Name",
              "logo": "https://yourdomain.com/logo.png"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white" aria-label="Brand Marketing Platform">
        {/* Hero Section */}
        <section 
          className="py-20 bg-gradient-to-r from-blue-600 to-blue-800" 
          aria-labelledby="hero-title"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 
                id="hero-title" 
                className="text-4xl font-bold mb-6"
                data-testid="hero-heading"
              >
                Amplify Your Brand with Intelligent Influencer Marketing
              </h1>
              <p 
                className="text-xl mb-8" 
                data-testid="hero-description"
              >
                Connect with authentic creators who share your brand's vision and values
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    className="bg-white text-blue-600 hover:bg-blue-50"
                    aria-label="Get Started with Influencer Marketing"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-4xl h-3/4">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSehOkCEicsrYu23XbRA7Z5SOsPleNrr7ju_K6JS4dx1NckiBg/viewform?embedded=true"
                    className="w-full h-full border-0"
                    title="Get Started Form"
                  >
                    Loading form...
                  </iframe>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section 
          className="py-20" 
          aria-labelledby="features-title"
        >
          <div className="container mx-auto px-4">
            <h2 
              id="features-title" 
              className="text-3xl font-bold text-center mb-12"
              data-testid="features-heading"
            >
              Why Brands Choose Our Platform
            </h2>
            <div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8" 
              aria-label="Platform Features"
            >
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="border border-gray-200"
                  data-testid={`feature-card-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      {feature.icon}
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p 
                      className="text-gray-600"
                      data-testid={`feature-description-${index}`}
                    >
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-20 bg-gray-50" 
          aria-labelledby="cta-title"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 
              id="cta-title" 
              className="text-3xl font-bold mb-6"
              data-testid="cta-heading"
            >
              Ready to Accelerate Your Brand Growth?
            </h2>
            <p 
              className="text-xl text-gray-600 mb-8"
              data-testid="cta-description"
            >
              Join thousands of successful brands transforming their marketing strategy
            </p>
            <Button 
              className="bg-blue-600 text-white hover:bg-blue-700"
              aria-label="Contact Us"
            >
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default React.memo(Brand);