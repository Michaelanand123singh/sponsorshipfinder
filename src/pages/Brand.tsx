import React, { useState } from 'react';
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
}

const Brand: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const features: BrandFeature[] = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "Targeted Matching",
      description: "Connect with influencers who perfectly align with your brand values and target audience."
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-500" />,
      title: "Campaign Analytics",
      description: "Track ROI, engagement rates, and campaign performance in real-time."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Audience Insights",
      description: "Gain deep insights into influencer audiences to ensure perfect alignment."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Quick Launch",
      description: "Streamlined process to launch campaigns within days, not weeks."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-6">
              Amplify Your Brand with Influencer Marketing
            </h1>
            <p className="text-xl mb-8">
              Connect with authentic creators who share your brand's vision and values
            </p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Brands Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {feature.icon}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Brand?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful brands using our platform
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Schedule a Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Brand;
