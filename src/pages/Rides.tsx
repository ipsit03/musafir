import React from 'react';
import { Search, Filter } from 'lucide-react';

const rides = [
  {
    id: 1,
    title: 'Manali Snow Trek',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    date: 'December 2025',
    duration: '3 Days, 2 Nights',
    price: '₹4,999',
  },
  {
    id: 2,
    title: 'Leh Bike Tour',
    image: 'https://images.unsplash.com/photo-1592743555218-3e0a3b3fc3ee?auto=format&fit=crop&w=800&q=80',
    date: 'August 2025',
    duration: '7 Days, 6 Nights',
    price: '₹14,999',
  },
  {
    id: 3,
    title: 'Rajasthan Desert Safari',
    image: 'https://images.unsplash.com/photo-1586985289360-d2d94dbe23b4?auto=format&fit=crop&w=800&q=80',
    date: 'November 2025',
    duration: '4 Days, 3 Nights',
    price: '₹7,500',
  },
  {
    id: 4,
    title: 'Goa Beach Retreat',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    date: 'October 2025',
    duration: '3 Days, 2 Nights',
    price: '₹6,000',
  },
  {
    id: 5,
    title: 'Kashmir Paradise Tour',
    image: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=80',
    date: 'September 2025',
    duration: '5 Days, 4 Nights',
    price: '₹10,500',
  },
  {
    id: 6,
    title: 'Coorg Forest Escape',
    image: 'https://images.unsplash.com/photo-1606744824163-aca753b14030?auto=format&fit=crop&w=800&q=80',
    date: 'July 2025',
    duration: '2 Days, 1 Night',
    price: '₹3,499',
  },
];


const Rides = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Rides</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore all available travel rides and find your perfect adventure
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search rides..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        {/* Rides Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rides.map((ride) => (
            <div
              key={ride.id}
              className="rounded-xl shadow-md border border-gray-200 overflow-hidden transition hover:shadow-lg bg-white"
            >
              <img
                src={ride.image}
                alt={ride.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{ride.title}</h2>
                <p className="text-sm text-gray-500 mb-1">{ride.date}</p>
                <p className="text-sm text-gray-500 mb-1">{ride.duration}</p>
                <p className="text-lg font-bold mb-3">{ride.price}</p>
                <a
                  href={`/rides/${ride.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rides;
