import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const FeaturedRides = () => {
  const rides = [
    {
      id: 1,
      destination: 'Manali Trek',
      image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: 'September 2025',
      duration: '3 Days, 2 Nights',
      price: '₹4,999',
    },
    {
      id: 2,
      destination: 'Goa Beach Adventure',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: 'October 2025',
      duration: '2 Days, 1 Night',
      price: '₹2,999',
    },
    {
      id: 3,
      destination: 'Rajasthan Desert Safari',
      image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: 'November 2025',
      duration: '4 Days, 3 Nights',
      price: '₹6,999',
    },
    {
      id: 4,
      destination: 'Kerala Backwaters',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: 'December 2025',
      duration: '3 Days, 2 Nights',
      price: '₹5,499',
    },
    {
      id: 5,
      destination: 'Himachal Hill Station',
      image: 'https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: 'January 2026',
      duration: '5 Days, 4 Nights',
      price: '₹8,999',
    },
    {
      id: 6,
      destination: 'Uttarakhand Adventure',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: 'February 2026',
      duration: '4 Days, 3 Nights',
      price: '₹7,499',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Rides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular travel rides and book your next adventure
          </p>
        </div>

        {/* Horizontally scrollable container */}
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6" style={{ width: 'max-content' }}>
            {rides.map((ride) => (
              <div
                key={ride.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-80"
              >
                <div className="relative h-48">
                  <img
                    src={ride.image}
                    alt={ride.destination}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-900">{ride.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {ride.destination}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{ride.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{ride.duration}</span>
                    </div>
                  </div>

                  <Link
                    to={`/rides/${ride.id}`}
                    className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 group"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Rides Button */}
        <div className="text-center mt-8">
          <Link
            to="/rides"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            View All Rides
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRides;