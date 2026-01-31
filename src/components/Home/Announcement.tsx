import React from "react";
import { Link } from "react-router-dom";

const Announcement = () => {
  return (
    <section className="bg-yellow-100 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          🚨 Announcements
        </h2>

        {/* Kanaichatta Trip Announcement */}
        <div>
          <p className="text-lg text-gray-700 mb-4">
            The{" "}
            <Link
              to="/rides/kanaichatta-sea-beach-expedition"
              className="font-semibold text-blue-600 hover:underline"
            >
              Kanaichatta Sea Beach Expedition
            </Link>{" "}
            is now open for explorers! 🌊🌴
          </p>

          <p className="text-gray-800 italic max-w-2xl mx-auto">
            Escape into Bengal’s untouched coastline with Sonajhuri forests,
            red crabs, mangrove trails, and serene beachside camping.
            <br />
            <span className="font-semibold text-gray-900">
              Limited slots available —
            </span>{" "}
            experience nature in its purest form with Musafir. 💙
          </p>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
