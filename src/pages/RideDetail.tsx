import React from "react";
import { useParams } from "react-router-dom";
import {
  Calendar,
  Users,
  Clock,
  MapPin,
  Mountain,
  Bus,
  CheckCircle,
  XCircle,
  Info,
  Megaphone,
} from "lucide-react";
import { rideData } from "../data/rides";

const RideDetail = () => {
  const { id } = useParams();
  const ride = rideData[id || ""];

  if (!ride) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Ride not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={ride.image}
            alt={ride.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{ride.title}</h1>
            <p className="text-gray-600 mb-6">{ride.description}</p>

            {/* Trip Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm">
              {ride.date && (
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  {ride.date}
                </div>
              )}
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                Duration: {ride.duration}
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                {ride.location}
              </div>
              {ride.altitude && (
                <div className="flex items-center">
                  <Mountain className="h-5 w-5 text-blue-600 mr-2" />
                  Altitude: {ride.altitude}
                </div>
              )}
              <div className="flex items-center">
                <Bus className="h-5 w-5 text-blue-600 mr-2" />
                Mode: {ride.mode}
              </div>
              {ride.groupSize && (
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  Group Size: {ride.groupSize}
                </div>
              )}
            </div>

            {/* 📣 Booking Announcement */}
            {ride.announcement && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg mb-6 flex items-start">
                <Megaphone className="h-5 w-5 mr-2 mt-1 text-yellow-600" />
                <span className="text-sm font-medium">{ride.announcement}</span>
              </div>
            )}

            {/* 🟦 Book Now Button (only if booking link exists) */}
            {ride.bookingLink && (
              <div className="mb-8">
                <a
                  href={ride.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200"
                >
                  Book Now →
                </a>
              </div>
            )}

            {/* Itinerary */}
            {ride.itinerary && (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Detailed Itinerary
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm mb-8">
                  {ride.itinerary.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Inclusions */}
            {ride.inclusions && (
              <>
                <h2 className="text-xl font-semibold text-green-700 flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 mr-2" /> Inclusions
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-sm mb-6">
                  {ride.inclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Exclusions */}
            {ride.exclusions && (
              <>
                <h2 className="text-xl font-semibold text-red-600 flex items-center mb-2">
                  <XCircle className="h-5 w-5 mr-2" /> Exclusions
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-sm mb-6">
                  {ride.exclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Notes */}
            {ride.notes && (
              <>
                <h2 className="text-xl font-semibold text-blue-700 flex items-center mb-2">
                  <Info className="h-5 w-5 mr-2" /> Essential Notes
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {ride.notes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideDetail;
