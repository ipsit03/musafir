import React from "react";
import { Link } from "react-router-dom";

const cardBaseClasses =
  "flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden";
const cardWidthClasses = "min-w-[250px] sm:min-w-[300px] lg:min-w-[350px]";
const imageHeightClasses = "h-40 sm:h-44 lg:h-48 object-cover";
const titleClasses = "text-lg sm:text-xl font-semibold text-gray-900 mb-2";
const descClasses =
  "text-gray-700 text-xs sm:text-sm mb-3 whitespace-normal break-words max-w-full";
const listClasses =
  "list-disc list-inside text-gray-600 text-xs sm:text-sm mb-4 whitespace-normal break-words";
const buttonClasses =
  "inline-block bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-blue-700 text-xs sm:text-sm";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Featured Rides Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Featured Rides
          </h2>

          {/* Horizontal Scroll Container */}
          <div className="flex space-x-6 overflow-x-auto pb-4 px-1 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200">
            
            {/* Ladakh */}
            <div className={`${cardWidthClasses} ${cardBaseClasses}`}>
              <img src="/ladakh.png" alt="Leh–Ladakh Expedition" className={`w-full ${imageHeightClasses}`} />
              <div className="p-4">
                <h3 className={titleClasses}>Leh–Ladakh Expedition</h3>
                <p className={descClasses}>
                  A 15-day journey through Himalayan passes, valleys, and lakes — from Sissu to Nubra, Pangong, and Manali.
                </p>
                <ul className={listClasses}>
                  <li>Khardung La (highest motorable road)</li>
                  <li>Pangong Lake camping</li>
                  <li>Nubra Valley & Hunder dunes</li>
                  <li>Magnetic Hill, Shanti Stupa, Leh Market</li>
                </ul>
                <Link to="/rides/leh-ladakh" className={buttonClasses}>
                  View Ride Details
                </Link>
              </div>
            </div>

            {/* Arunachal */}
            <div className={`${cardWidthClasses} ${cardBaseClasses}`}>
              <img src="/arunachal.png" alt="Arunachal Explorer" className={`w-full ${imageHeightClasses}`} />
              <div className="p-4">
                <h3 className={titleClasses}>Arunachal Explorer</h3>
                <p className={descClasses}>
                  A 10-night expedition through the mountains, monasteries, and wildlife parks of North-East India.
                </p>
                <ul className={listClasses}>
                  <li>Tawang Monastery & Sela Pass</li>
                  <li>Bumla Pass & Madhuri Lake</li>
                  <li>Kaziranga Jeep Safari</li>
                  <li>Dirang Valley, Sangti, Guwahati</li>
                </ul>
                <Link to="/rides/arunachal-explorer" className={buttonClasses}>
                  View Ride Details
                </Link>
              </div>
            </div>

            {/* Meghalaya */}
            <div className={`${cardWidthClasses} ${cardBaseClasses}`}>
              <img src="/meghalaya.png" alt="Meghalaya Expedition" className={`w-full ${imageHeightClasses}`} />
              <div className="p-4">
                <h3 className={titleClasses}>Meghalaya Expedition</h3>
                <p className={descClasses}>
                  A 7-day adventure through sacred groves, root bridges, and the crystal waters of Dawki and Nongriat.
                </p>
                <ul className={listClasses}>
                  <li>Laitlum Canyon & Sacred Forest</li>
                  <li>Mawlynnong & Umngot River</li>
                  <li>Double Decker Root Bridge trek</li>
                  <li>Stay in Shillong & Nongriat</li>
                </ul>
                <Link to="/rides/meghalaya-expedition" className={buttonClasses}>
                  View Ride Details
                </Link>
              </div>
            </div>

            {/* Varanasi */}
            <div className={`${cardWidthClasses} ${cardBaseClasses}`}>
              <img src="/varanasi.jpeg" alt="Varanasi, Ayodhya & Prayagraj" className={`w-full ${imageHeightClasses}`} />
              <div className="p-4">
                <h3 className={titleClasses}>The Sacred Circle: Varanasi, Ayodhya & Prayagraj</h3>
                <p className={descClasses}>
                  Explore Kashi, Ayodhya, and Prayagraj in 6 days—temples, aartis, heritage, food trails, and stories.
                </p>
                <ul className={listClasses}>
                  <li>Kashi Vishwanath, Ganga Aarti & Sarnath</li>
                  <li>Ram Janmabhoomi & Saryu Aarti in Ayodhya</li>
                  <li>Triveni Sangam boat ride, Anand Bhavan in Prayagraj</li>
                  <li>Musafir-led guided heritage exploration</li>
                </ul>
                <Link to="/rides/varanasi-sacred-circle" className={buttonClasses}>
                  View Ride Details
                </Link>
              </div>
            </div>

            {/* Meghalaya Bike */}
            <div className={`${cardWidthClasses} ${cardBaseClasses}`}>
              <img src="/meghalaya-bike.png" alt="Meghalaya Bike Expedition" className={`w-full ${imageHeightClasses}`} />
              <div className="p-4">
                <h3 className={titleClasses}>Meghalaya Bike Expedition</h3>
                <p className={descClasses}>
                  Ride to rivers, waterfalls, remote camps & villages across Meghalaya — bike through clouds & pine forests.
                </p>
                <ul className={listClasses}>
                  <li>Bike through Nongkhnum Island & Krangsuri</li>
                  <li>Trek to Nongriat's Double Decker Bridge</li>
                  <li>Camp in Shnongpdeng by the river</li>
                  <li>Cherrapunji, Shillong & Umiam Lake ride</li>
                </ul>
                <Link to="/rides/meghalaya-bike-expedition" className={buttonClasses}>
                  View Ride Details
                </Link>
              </div>
            </div>

            {/* Himachal */}
            <div className={`${cardWidthClasses} ${cardBaseClasses}`}>
              <img src="/himachal.png" alt="Himachal Group Tour" className={`w-full ${imageHeightClasses}`} />
              <div className="p-4">
                <h3 className={titleClasses}>Himachal Group Tour</h3>
                <p className={descClasses}>
                  A scenic 10-day trip through Shimla, Manali & Kasol — pine forests, snow passes & riverside cafes.
                </p>
                <ul className={listClasses}>
                  <li>Shimla, Kufri & Ridge</li>
                  <li>Solang Valley & Atal Tunnel</li>
                  <li>Rohtang Pass Adventure</li>
                  <li>Kasol & Manikaran</li>
                </ul>
                <Link to="/rides/himachal-group-tour" className={buttonClasses}>
                  View Ride Details
                </Link>
              </div>
            </div>

            {/* Nagaland */}
            <div className={`${cardWidthClasses} ${cardBaseClasses}`}>
              <img src="/nagaland.png" alt="Nagaland Expedition" className={`w-full ${imageHeightClasses}`} />
              <div className="p-4">
                <h3 className={titleClasses}>Nagaland Winter Expedition</h3>
                <p className={descClasses}>
                  Witness Hornbill Festival & tribal culture in this 9-day journey through Kohima, Kisama, Dzukou & more.
                </p>
                <ul className={listClasses}>
                  <li>Hornbill Festival at Kisama</li>
                  <li>Stay in traditional Naga village</li>
                  <li>Dzukou Valley trek experience</li>
                  <li>Explore Kohima War Cemetery</li>
                </ul>
                <Link to="/rides/nagaland-winter-expedition" className={buttonClasses}>
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
