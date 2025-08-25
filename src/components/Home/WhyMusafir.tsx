import React from 'react';
import { Shield, Star, Smartphone, Calendar } from 'lucide-react';

const WhyMusafir = () => {
  const features = [
    {
      title: 'Trusted Travel Guides',
      description: 'Experienced guides who know the destinations inside out',
      icon: Shield,
    },
    {
      title: 'Curated Rides with Complete Itineraries',
      description: 'Carefully planned trips with detailed itineraries for the best experience',
      icon: Star,
    },
    {
      title: 'Easy Booking System',
      description: 'Simple and secure booking process with instant confirmation',
      icon: Smartphone,
    },
    {
      title: 'Month-wise Availability View',
      description: 'Clear calendar view to check availability and plan your trips ahead',
      icon: Calendar,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose MusafirTravelCo.org
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make travel planning simple, safe, and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMusafir;