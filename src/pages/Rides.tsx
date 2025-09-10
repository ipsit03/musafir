import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { rideData } from "../data/rides";
import { Link, useLocation } from "react-router-dom";

const Rides = () => {
  const ridesArray = Object.values(rideData);
  const location = useLocation();

  const queryParam = new URLSearchParams(location.search).get("q") || "";
  const [searchQuery, setSearchQuery] = useState(queryParam);

  useEffect(() => {
    setSearchQuery(queryParam);
  }, [queryParam]);

  const filteredRides = ridesArray.filter((ride) => {
    const lowerQuery = searchQuery.toLowerCase();

    const matchesItinerary = ride.itinerary?.some((day) =>
      day.toLowerCase().includes(lowerQuery)
    );

    return (
      ride.title.toLowerCase().includes(lowerQuery) ||
      ride.location.toLowerCase().includes(lowerQuery) ||
      matchesItinerary
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            ✈️ All Getaways
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover breathtaking journeys and plan your next unforgettable adventure.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-12 border border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search rides by title, location or itinerary..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Rides Grid */}
        {filteredRides.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredRides.map((ride, index) => (
              <div
                key={ride.id}
                className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white transition transform hover:-translate-y-2 hover:shadow-2xl duration-300 opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={ride.image}
                    alt={ride.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <Link
                      to={`/rides/${ride.id}`}
                      className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {ride.title}
                  </h2>
                  <div className="text-sm text-gray-500 flex flex-col space-y-1 mb-3">
                    <span>📅 {ride.date}</span>
                    <span>⏳ {ride.duration}</span>
                    <span>📍 {ride.location}</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {ride.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">
            😔 No rides found. Try searching with another keyword.
          </p>
        )}
      </div>
    </div>
  );
};

export default Rides;
