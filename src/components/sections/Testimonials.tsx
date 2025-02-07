import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Content Creator",
      feedback: "This platform has completely changed the way I collaborate with brands. It's so easy to connect with companies that align with my values, and the process is seamless.",
      rating: 5,
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "John Smith",
      role: "Marketing Manager at XYZ Corp",
      feedback: "We've partnered with so many incredible creators through this platform. It has revolutionized our influencer marketing strategy, and the results speak for themselves.",
      rating: 4,
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Emily Johnson",
      role: "YouTube Creator",
      feedback: "I love how transparent the platform is. The AI matchmaking feature is so accurate, and I've been able to secure partnerships that feel authentic.",
      rating: 5,
      avatar: "/api/placeholder/100/100"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Trusted by Creators & Brands
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied users who have transformed their collaboration experience
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-8">
                <Quote className="w-8 h-8 text-blue-500 rotate-180" />
              </div>
              
              <div className="flex items-center gap-2 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                "{testimonial.feedback}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;