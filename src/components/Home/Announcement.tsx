import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Announcement = () => {
  const ladakhDate = new Date("2025-10-31T00:00:00");
  const arunachalDate = new Date("2025-12-26T00:00:00");

  const [ladakhTime, setLadakhTime] = useState(getTimeLeft(ladakhDate));
  const [arunachalTime, setArunachalTime] = useState(getTimeLeft(arunachalDate));

  function getTimeLeft(targetDate: Date) {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setLadakhTime(getTimeLeft(ladakhDate));
      setArunachalTime(getTimeLeft(arunachalDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-yellow-100 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          🚨 Announcements
        </h2>

        {/* Ladakh Trip */}
        <div className="mb-10">
          <p className="text-lg text-gray-700 mb-4">
            The{" "}
            <Link
              to="/rides/leh-ladakh"
              className="font-semibold text-blue-600 hover:underline"
            >
              Ladakh Trip
            </Link>{" "}
            is officially announced! 🏔️  
            <br />
            Date: <span className="font-bold">31st October 2025</span>
          </p>

          <div className="flex justify-center gap-6 text-gray-900 font-mono text-xl">
            <div className="bg-white shadow rounded-lg px-4 py-2">
              <span className="block text-3xl font-bold">{ladakhTime.days}</span>
              <span className="text-sm">Days</span>
            </div>
            <div className="bg-white shadow rounded-lg px-4 py-2">
              <span className="block text-3xl font-bold">{ladakhTime.hours}</span>
              <span className="text-sm">Hours</span>
            </div>
            <div className="bg-white shadow rounded-lg px-4 py-2">
              <span className="block text-3xl font-bold">{ladakhTime.minutes}</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="bg-white shadow rounded-lg px-4 py-2">
              <span className="block text-3xl font-bold">{ladakhTime.seconds}</span>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
        </div>

        {/* Arunachal Trip */}
        <div>
          <p className="text-lg text-gray-700 mb-4">
            The{" "}
            <Link
              to="/rides/arunachal-explorer"
              className="font-semibold text-blue-600 hover:underline"
            >
              Arunachal Explorer
            </Link>{" "}
            is coming soon! 🌄  
            <br />
            Date: <span className="font-bold">26th December 2025</span>
          </p>

          <div className="flex justify-center gap-6 text-gray-900 font-mono text-xl">
            <div className="bg-white shadow rounded-lg px-4 py-2">
              <span className="block text-3xl font-bold">{arunachalTime.days}</span>
              <span className="text-sm">Days</span>
            </div>
            <div className="bg-white shadow rounded-lg px-4 py-2">
              <span className="block text-3xl font-bold">{arunachalTime.hours}</span>
              <span className="text-sm">Hours</span>
            </div>
            <div className="bg-white shadow rounded-lg px-4 py-2">
              <span className="block text-3xl font-bold">{arunachalTime.minutes}</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="bg-white shadow rounded-lg px-4 py-2">
              <span className="block text-3xl font-bold">{arunachalTime.seconds}</span>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
