// src/pages/BikeRides.tsx
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { bikeRideData } from "../data/bikerides";
import { Link, useLocation } from "react-router-dom";

const BikeRides = () => {
  const ridesArray = Object.values(bikeRideData);
  const location = useLocation();

  // Extract query string from URL (?q=meghalaya)
  const queryParam = new URLSearchParams(location.search).get("q") || "";
  const [searchQuery, setSearchQuery] = useState(queryParam);

  // Update local state if URL changes (back/forward navigation)
  useEffect(() => {
    setSearchQuery(queryParam);
  }, [queryParam]);

  const filteredRides = ridesArray.filter((ride) => {
    const lowerQuery = searchQuery.toLowerCase();
    return (
      ride.title.toLowerCase().includes(lowerQuery) ||
      ride.location.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bike Expeditions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore thrilling bike expeditions across India — built for riders
            who crave adventure.
          </p>
        </div>

        {/* Search Input */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search bike rides..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Bike Rides Grid */}
        {filteredRides.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredRides.map((ride) => (
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
                  <p className="text-sm text-gray-600 mb-3">{ride.location}</p>
                  <Link
                    to={`/bikerides/${ride.id}`} // ✅ fixed route
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No bike rides found for your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default BikeRides;
