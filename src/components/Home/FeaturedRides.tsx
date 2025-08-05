import React from "react";
import { Link } from "react-router-dom";
import ladakhImg from "frontend\src\assets\ladakh.png";
import arunachalImg from "frontend\src\assets\arunachal.png";


const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="bg-blue-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Discover India with Musafir.com</h1>
          <p className="text-lg sm:text-xl mb-6">
            Explore scenic routes, cultural gems, and unforgettable adventures — with expert guidance.
          </p>
          <Link
            to="/rides"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            View All Rides
          </Link>
        </div>
      </section> */}

      {/* Featured Rides Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Featured Rides</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Leh–Ladakh Card */}
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="/ladakh.png"
                alt="Leh–Ladakh Expedition"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Leh–Ladakh Expedition</h3>
                <p className="text-gray-700 text-sm mb-3">
                  A 15-day journey through Himalayan passes, valleys, and lakes — from Sissu to Nubra, Pangong, and Manali.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  <li>Khardung La (highest motorable road)</li>
                  <li>Pangong Lake camping</li>
                  <li>Nubra Valley & Hunder dunes</li>
                  <li>Magnetic Hill, Shanti Stupa, Leh Market</li>
                </ul>
                <Link
                  to="/rides/leh-ladakh"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  View Ride Details
                </Link>
              </div>
            </div>

            {/* Arunachal Card */}
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="/arunachal.png"
                alt="Arunachal Explorer"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Arunachal Explorer</h3>
                <p className="text-gray-700 text-sm mb-3">
                  A 10-night expedition through the mountains, monasteries, and wildlife parks of North-East India.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  <li>Tawang Monastery & Sela Pass</li>
                  <li>Bumla Pass & Madhuri Lake</li>
                  <li>Kaziranga Jeep Safari</li>
                  <li>Dirang Valley, Sangti, Guwahati</li>
                </ul>
                <Link
                  to="/rides/arunachal-explorer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  View Ride Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
