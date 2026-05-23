import React from "react";
import { useParams } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import {
  Calendar,
  Users,
  Clock,
  MapPin,
  Mountain,
  Bike,
  CheckCircle,
  XCircle,
  Info,
  Megaphone,
  IndianRupee,
} from "lucide-react";
import { bikeRideData } from "../data/bikerides";
import { Link } from "react-router-dom";

const BikeRideDetail = () => {
  const { id } = useParams();
  const ride = bikeRideData[id || ""];

  if (!ride) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Bike ride not found.</p>
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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {ride.title}
            </h1>
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
                <Bike className="h-5 w-5 text-blue-600 mr-2" />
                Mode: {ride.mode}
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                Group Size: {ride.groupSize}
              </div>
            </div>

            {/* 💰 Price Section */}

            {ride.price && (
              <div className="mb-8">

                <h2 className="text-xl font-semibold text-green-700 flex items-center mb-3">
                  <IndianRupee className="h-5 w-5 mr-2" />
                  Price Details
                </h2>

                {Object.values(ride.price).every(
                  (value) =>
                    value === "To be announced"
                ) ? (
                  <p className="text-gray-700 text-sm italic">
                    To be announced
                  </p>
                ) : Object.keys(ride.price)
                  .length === 1 ? (

                  /* SINGLE PRICE */

                  <div className="bg-gradient-to-r from-green-50 to-emerald-100 border border-green-200 rounded-2xl p-6 shadow-sm">

                    <p className="text-3xl font-bold text-green-900">
                      {
                        Object.values(
                          ride.price
                        )[0]
                      }
                    </p>

                  </div>
                ) : (

                  /* MULTIPLE PRICES */

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {Object.entries(
                      ride.price
                    ).map(([type, value]) => (
                      <div
                        key={type}
                        className="bg-gradient-to-r from-green-50 to-emerald-100 border border-green-200 rounded-2xl p-5 shadow-sm"
                      >

                        <p className="text-sm font-medium text-gray-600 capitalize mb-1">
                          {type}
                        </p>

                        <p className="text-2xl font-bold text-green-900">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            {/* 📣 Booking Announcement */}
            {ride.announcement && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg mb-6 flex items-start">
                <Megaphone className="h-5 w-5 mr-2 mt-1 text-yellow-600" />
                <span className="text-sm font-medium">{ride.announcement}</span>
              </div>
            )}
            {/* 🟦 Book Now Button */}
            <div className="mb-8">
              {ride.bookingEnabled ? (
                <Link
                  to={`/book/${ride.id}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200"
                >
                  Book Now →
                </Link>
              ) : (
                <button
                  disabled
                  className="inline-block bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg shadow cursor-not-allowed opacity-70"
                >
                  Booking Unavailable
                </button>
              )}
            </div>

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
      <BackToTop />
    </div>
  );
};

export default BikeRideDetail;
