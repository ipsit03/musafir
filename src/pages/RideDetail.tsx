import React from "react";
import { useParams } from "react-router-dom";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { mockRides } from "../data/mockRides";

const RideDetail = () => {
  const { id } = useParams();
  const ride = mockRides.find((r) => r.id === id);

  if (!ride) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Ride not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={ride.image}
            alt={ride.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {ride.title}
            </h1>
            <p className="text-gray-600 mb-6">{ride.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                <span className="text-gray-700">Date: {ride.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <span className="text-gray-700">Duration: {ride.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                <span className="text-gray-700">Location: {ride.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <span className="text-gray-700">
                  Group Size: {ride.groupSize}
                </span>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideDetail;
