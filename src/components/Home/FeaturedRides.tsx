import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Featured Rides Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            MUSAFIR EXPERIENCES
          </h2>

          {/* Horizontal Scroll Container */}
          <div className="flex space-x-6 overflow-x-auto pb-4 px-1 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200">
            {/* Ladakh Card */}
            <div className="min-w-[350px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="/ladakh.png"
                alt="Leh–Ladakh Expedition"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  MusafirxLadakh Expedition
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  A 16-day journey through Himalayan passes, valleys, and lakes — from Sissu to Nubra, Pangong, and Manali.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  <li>Khardung La (highest motorable road)</li>
                  <li>Pangong Lake camping</li>
                  <li>Nubra Valley & Hunder dunes</li>
                  <li>Magnetic Hill, Shanti Stupa, Leh Market</li>
                </ul>
                <Link
                  to="/rides/leh-ladakh"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  View Ride Details
                </Link>
              </div>
            </div>

            {/* Arunachal Card */}
            <div className="min-w-[350px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="/arunachal.png"
                alt="Arunachal Explorer"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  MusafirxArunachal Explorer
                </h3>
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
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  View Ride Details
                </Link>
              </div>
            </div>

            {/* Meghalaya Card */}
            <div className="min-w-[350px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="/meghalaya.png"
                alt="Meghalaya Expedition"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  MusafirxMeghalaya Expedition
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  A 7-day adventure through sacred groves, root bridges, and the crystal waters of Dawki and Nongriat.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  <li>Laitlum Canyon & Sacred Forest</li>
                  <li>Mawlynnong & Umngot River</li>
                  <li>Double Decker Root Bridge trek</li>
                  <li>Stay in Shillong & Nongriat</li>
                </ul>
                <Link
                  to="/rides/meghalaya-expedition"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  View Ride Details
                </Link>
              </div>
            </div>

            {/* Varanasi Card */}
            <div className="min-w-[350px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="/varanasi.jpeg"
                alt="Varanasi, Ayodhya & Prayagraj"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  The Sacred Circle: Varanasi, Ayodhya & Prayagraj
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Explore Kashi, Ayodhya, and Prayagraj in 6 days—temples, aartis, heritage, food trails, and stories.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  <li>Kashi Vishwanath, Ganga Aarti & Sarnath</li>
                  <li>Ram Janmabhoomi & Saryu Aarti in Ayodhya</li>
                  <li>Triveni Sangam boat ride, Anand Bhavan in Prayagraj</li>
                  <li>Musafir-led guided heritage exploration</li>
                </ul>
                <Link
                  to="/rides/varanasi-sacred-circle"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  View Ride Details
                </Link>
              </div>
            </div>
            {/* Meghalaya Bike Expedition Card */}
            <div className="min-w-[320px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="/meghalaya-bike.png"
                alt="Meghalaya Bike Expedition"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  MusafirxMeghalaya Bike Expedition
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Ride to rivers, waterfalls, remote camps & villages across Meghalaya — bike through clouds & pine forests.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  <li>Bike through Nongkhnum Island & Krangsuri</li>
                  <li>Trek to Nongriat's Double Decker Bridge</li>
                  <li>Camp in Shnongpdeng by the river</li>
                  <li>Cherrapunji, Shillong & Umiam Lake ride</li>
                </ul>
                <Link
                  to="/rides/meghalaya-bike-expedition"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  View Ride Details
                </Link>
              </div>
            </div>
            {/* Himachal Card */}
            <div className="min-w-[350px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="/himachal.png"
                alt="Himachal Group Tour"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  MusafirxHimachal Group Tour
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  A scenic 10-day trip through Shimla, Manali & Kasol — pine forests, snow passes & riverside cafes.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  <li>Shimla, Kufri & Ridge</li>
                  <li>Solang Valley & Atal Tunnel</li>
                  <li>Rohtang Pass Adventure</li>
                  <li>Kasol & Manikaran</li>
                </ul>
                <Link
                  to="/rides/himachal-group-tour"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  View Ride Details
                </Link>
              </div>
            </div>
            {/* Nagaland Card */}
            <div className="min-w-[350px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="/nagaland.png"
                alt="Nagaland Expedition"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  MusafirxNagaland Winter Expedition
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Witness Hornbill Festival & tribal culture in this 9-day journey through Kohima, Kisama, Dzukou & more.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  <li>Hornbill Festival at Kisama</li>
                  <li>Stay in traditional Naga village</li>
                  <li>Dzukou Valley trek experience</li>
                  <li>Explore Kohima War Cemetery</li>
                </ul>
                <Link
                  to="/rides/nagaland-winter-expedition"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
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
