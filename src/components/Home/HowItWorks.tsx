import React from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: 'Browse Rides',
      description: 'Explore our curated collection of travel rides across various destinations',
      icon: Search,
    },
    {
      step: 2,
      title: 'Choose Destination & Date',
      description: 'Select your preferred destination and check available dates in our calendar',
      icon: MapPin,
    },
    {
      step: 3,
      title: 'Book with Our Guide',
      description: 'Connect with our expert guides and book your perfect travel experience',
      icon: Calendar,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to book your next adventure with Musafir.com
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="text-center relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-200 rounded-full"></div>
                </div>
              )}

              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.step}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;