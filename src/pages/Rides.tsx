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

    // Match against itinerary (title or description)
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Getaways</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore all available travel rides and find your perfect adventure.
          </p>
        </div>

        {/* Search Input */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search rides..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Rides Grid */}
        {filteredRides.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredRides.map((ride, index) => (
              <div
                key={ride.id}
                className="group rounded-xl shadow-md border border-gray-200 overflow-hidden transition transform hover:scale-[1.02] hover:shadow-2xl bg-white opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={ride.image}
                    alt={ride.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {ride.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">{ride.date}</p>
                  <p className="text-sm text-gray-500 mb-1">{ride.duration}</p>
                  <p className="text-sm text-gray-600 mb-3">{ride.location}</p>
                  <Link
                    to={`/rides/${ride.id}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No rides found for your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Rides;
