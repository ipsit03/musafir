import React from "react";
import { Link } from "react-router-dom";

const Announcement = () => {
  return (
    <section className="bg-yellow-100 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Announcements
        </h2>

        {/* Dooars Trip Announcement */}
        <div>

          <p className="text-lg text-gray-700 mb-4">
            Registrations are now open for{" "}

            <Link
              to="/bikerides/dooars-on-two-wheels"
              className="font-semibold text-blue-600 hover:underline"
            >
              DOOARS ON TWO WHEELS — A MONSOON BIKE EXPEDITION
            </Link>{" "}

            🌧️🏍️
          </p>

          <p className="text-gray-800 italic max-w-2xl mx-auto">
            Ride through the rain-soaked forests of North Bengal,
            riverside trails, tea gardens, Buxa Tiger Reserve,
            and the misty foothills of Samsing.

            <br />

            <span className="font-semibold text-gray-900">
              Limited rider slots available —
            </span>{" "}

            experience the wild Dooars on two wheels with Musafir. 💙
          </p>
        </div>
      </div>
    </section>
  );
};

export default Announcement;