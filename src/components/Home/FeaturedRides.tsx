import React from "react";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Home: React.FC = () => {
  const rides = [
    {
      title: "MusafirxLadakh Expedition",
      desc: "A 16-day journey through Himalayan passes, valleys, and lakes — from Sissu to Nubra, Pangong, and Manali.",
      img: "/Ladakh.jpg",
      link: "/rides/leh-ladakh",
    },
    {
      title: "MusafirxArunachal Explorer",
      desc: "A 10-night expedition through the mountains, monasteries, and wildlife parks of North-East India.",
      img: "/Arunachal2.png",
      link: "/rides/arunachal-explorer",
    },
    {
      title: "MusafirxNagaland Winter Expedition",
      desc: "Witness Hornbill Festival & tribal culture in this 9-day journey through Kohima, Kisama, Dzukou & more.",
      img: "/Nagaland2.png",
      link: "/rides/nagaland-winter-expedition",
    },
    {
      title: "MusafirxMeghalaya Expedition",
      desc: "A 7-day adventure through sacred groves, root bridges, and the crystal waters of Dawki and Nongriat.",
      img: "/Meghalaya.jpg",
      link: "/rides/meghalaya-expedition",
    },
    {
      title: "The Sacred Circle: Varanasi, Ayodhya & Prayagraj",
      desc: "Explore Kashi, Ayodhya, and Prayagraj in 6 days—temples, aartis, heritage, food trails, and stories.",
      img: "/Prayagraj.png",
      link: "/rides/varanasi-sacred-circle",
    },
    {
      title: "MusafirxMeghalaya Bike Expedition",
      desc: "Ride to rivers, waterfalls, remote camps & villages across Meghalaya — bike through clouds & pine forests.",
      img: "/Meghalayabikeexpedition.png",
      link: "/rides/meghalaya-bike-expedition",
    },
    {
      title: "MusafirxHimachal Group Tour",
      desc: "A scenic 10-day trip through Shimla, Manali & Kasol — pine forests, snow passes & riverside cafes.",
      img: "/Himachal2.png",
      link: "/rides/himachal-group-tour",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            MUSAFIR EXPERIENCES
          </h2>

          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={28}
              slidesPerView={1}
              loop
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              grabCursor={true}
              simulateTouch={true}
              touchRatio={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="rounded-2xl px-4 pb-6"
            >
              {rides.map((ride, idx) => (
                <SwiperSlide key={idx} className="pb-4">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-[360px] md:h-[400px]">
                    <img
                      src={ride.img}
                      alt={ride.title}
                      className="w-full h-40 md:h-44 object-cover"
                    />
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {ride.title}
                      </h3>
                      <p className="text-gray-700 text-sm mb-3 ride-desc">
                        {ride.desc}
                      </p>
                      <div className="mt-auto flex justify-center"> {/* 👈 center align */}
                        <Link
                          to={ride.link}
                          className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:opacity-90 transition"
                        >
                          View Ride Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-center mt-8">
              <Link
                to="/rides"
                className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:opacity-95 transition"
              >
                See All Experiences
              </Link>
            </div>

            <style>{`
              .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
                opacity: 0.6;
                background: #cbd5e1;
              }
              .swiper-pagination-bullet-active {
                opacity: 1;
                background: linear-gradient(90deg, #2563eb, #7c3aed);
              }
              .ride-desc {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
            `}</style>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
