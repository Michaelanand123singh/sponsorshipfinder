import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

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
        answer: "Yes, you can cancel your Premium subscription at any time. You'll continue to have access to Premium features until the end of the current billing cycle."
      },
      {
        question: "Do you offer a money-back guarantee for the Premium plan?",
        answer: "Yes, we offer a 30-day money-back guarantee for the Premium plan. If you're not satisfied with the service, you can request a refund within 30 days of your purchase."
      },
    ]
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our plans and features
          </p>
        </div>

        <div className="grid gap-12">
          {Object.entries(faqs).map(([category, questions], categoryIndex) => (
            <div key={category} className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 capitalize">
                {category} Plan FAQs
              </h3>
              <div className="space-y-3">
                {questions.map((faq, index) => {
                  const questionIndex = categoryIndex * questions.length + index;
                  const isActive = activeQuestion === questionIndex;
                  
                  return (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-colors duration-200"
                    >
                      <button
                        onClick={() => setActiveQuestion(isActive ? null : questionIndex)}
                        className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                      >
                        <span className="text-lg font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0
                            ${isActive ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-200 ease-in-out
                          ${isActive ? 'max-h-96' : 'max-h-0'}`}
                      >
                        <p className="px-6 pb-4 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;