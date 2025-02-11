import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/layout/Card';
import { Button } from '../components/layout/Button';
import { DollarSign, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../components/layout/Dialog";

interface InfluencerBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

declare global {
  interface Window {
    Calendly?: any;
  }
}

const Influencer: React.FC = () => {
  useEffect(() => {
    // Add Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Add Calendly stylesheet
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/official-sponsorshipfinder/30min'
      });
    }
  };

  const benefits: InfluencerBenefit[] = [
    {
      icon: <DollarSign className="w-6 h-6 text-purple-500" />,
      title: "Competitive Compensation",
      description: "Get paid your worth with transparent pricing and timely payments."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
      title: "Brand Safety",
      description: "Work with pre-vetted brands that align with your values."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: "Growth Opportunities",
      description: "Access exclusive brand deals and long-term partnerships."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: "Creative Freedom",
      description: "Maintain your authentic voice while creating branded content."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-6">
              Turn Your Influence Into Income
            </h1>
            <p className="text-xl mb-8">
              Connect with brands that value your authentic voice and creative content
            </p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-white text-purple-600 hover:bg-purple-50">
                  Join as Creator
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-4xl h-3/4">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeosG9NXjJk7rzDDIjEpqt94XTuhghcBOiYOAbOc-AQj0Wtvw/viewform?embedded=true"
                  className="w-full h-full border-0"
                  title="Join as Creator Form"
                >
                  Loading form...
                </iframe>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of Being a Creator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {benefit.icon}
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-purple-600 mb-2">5000+</h3>
              <p className="text-gray-600">Active Creators</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-600 mb-2">$2M+</h3>
              <p className="text-gray-600">Paid to Creators</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-600 mb-2">1000+</h3>
              <p className="text-gray-600">Brand Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Monetizing Your Influence</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community of successful creators and start earning
          </p>
          <Button 
            className="bg-purple-600 text-white hover:bg-purple-700"
            onClick={openCalendly}
          >
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Influencer;