import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = {
    enhanced: [
      {
        question: "What is the difference between the Enhanced and Premium plans?",
        answer: "The Enhanced plan offers additional features like AI-driven insights and advanced analytics, while the Premium plan includes everything in Enhanced plus priority support, custom integrations, and advanced training."
      },
      {
        question: "How do I upgrade to the Enhanced plan?",
        answer: "You can upgrade to the Enhanced plan by going to the 'Account Settings' page and selecting the 'Upgrade' option under your current plan. Follow the prompts to complete your upgrade."
      },
      {
        question: "Is there a free trial for the Enhanced plan?",
        answer: "Yes, we offer a 14-day free trial of the Enhanced plan. You can access all the features during this trial period. Afterward, you'll need to choose a subscription plan to continue using the Enhanced features."
      },
    ],
    premium: [
      {
        question: "What features are exclusive to the Premium plan?",
        answer: "Premium users receive priority customer support, custom integration options, exclusive webinars, and dedicated account managers. You also get all the features from the Enhanced plan."
      },
      {
        question: "Can I cancel my Premium subscription anytime?",
        answer: "Yes, you can cancel your Premium subscription at any time. You’ll continue to have access to Premium features until the end of the current billing cycle."
      },
      {
        question: "Do you offer a money-back guarantee for the Premium plan?",
        answer: "Yes, we offer a 30-day money-back guarantee for the Premium plan. If you’re not satisfied with the service, you can request a refund within 30 days of your purchase."
      },
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>

        <div className="space-y-12">
          {/* Enhanced FAQs */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Enhanced Plan FAQs</h3>
            <div className="space-y-4">
              {faqs.enhanced.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div 
                    onClick={() => toggleQuestion(index)}
                    className="flex justify-between items-center cursor-pointer mb-4"
                  >
                    <p className="text-lg font-semibold text-gray-800">{faq.question}</p>
                    {activeQuestion === index ? (
                      <ChevronUp className="w-6 h-6 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                  {activeQuestion === index && (
                    <p className="text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Premium FAQs */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium Plan FAQs</h3>
            <div className="space-y-4">
              {faqs.premium.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div 
                    onClick={() => toggleQuestion(index + faqs.enhanced.length)}
                    className="flex justify-between items-center cursor-pointer mb-4"
                  >
                    <p className="text-lg font-semibold text-gray-800">{faq.question}</p>
                    {activeQuestion === index + faqs.enhanced.length ? (
                      <ChevronUp className="w-6 h-6 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                  {activeQuestion === index + faqs.enhanced.length && (
                    <p className="text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
