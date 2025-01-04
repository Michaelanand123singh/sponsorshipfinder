import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Content Creator",
      feedback: "This platform has completely changed the way I collaborate with brands. It’s so easy to connect with companies that align with my values, and the process is seamless.",
      rating: 5,
    },
    {
      name: "John Smith",
      role: "Marketing Manager at XYZ Corp",
      feedback: "We’ve partnered with so many incredible creators through this platform. It has revolutionized our influencer marketing strategy, and the results speak for themselves.",
      rating: 4,
    },
    {
      name: "Emily Johnson",
      role: "YouTube Creator",
      feedback: "I love how transparent the platform is. The AI matchmaking feature is so accurate, and I’ve been able to secure partnerships that feel authentic.",
      rating: 5,
    },
  ];

  return (
    <section className="pt-16 pb-24 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          What Our Users Are Saying
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from some of our amazing users who have experienced the power of our platform firsthand.
        </p>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-600 mb-4 italic">
                “{testimonial.feedback}”
              </p>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
