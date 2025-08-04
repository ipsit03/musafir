import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MessageCircle className="h-16 w-16 text-blue-200 mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Need Help Planning Your Trip?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Our travel experts are here to help you plan the perfect adventure. Get personalized recommendations and support.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg group"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;