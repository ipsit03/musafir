import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Announcement = () => {
  const nagalandDate = new Date("2025-12-05T00:00:00");
  const arunachalDate = new Date("2025-12-26T00:00:00");

  const [nagalandTime, setNagalandTime] = useState(getTimeLeft(nagalandDate));
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
      setNagalandTime(getTimeLeft(nagalandDate));
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

        {/* Ladakh Trip Postponed Notice */}
        <div className="mb-10">
          <p className="text-lg text-gray-700 mb-4">
            The{" "}
            <Link
              to="/rides/leh-ladakh"
              className="font-semibold text-blue-600 hover:underline"
            >
              Ladakh Trip
            </Link>{" "}
            has been <span className="font-bold text-red-600">postponed</span>. ❄️
          </p>
          <p className="text-gray-800 italic max-w-2xl mx-auto">
            Due to unforeseen conditions in Ladakh, our upcoming{" "}
            <span className="font-semibold text-blue-600">
              Musafir × Ladakh
            </span>{" "}
            journey stands postponed.  
            <br />
            <span className="font-semibold text-gray-900">
              Safety first —
            </span>{" "}
            we’ll be back soon with new routes and fresh stories. 💙
          </p>
        </div>

        {/* Nagaland Trip */}
        <div className="mb-10">
          <p className="text-lg text-gray-700 mb-4">
            The{" "}
            <Link
              to="/rides/nagaland-winter-expedition"
              className="font-semibold text-blue-600 hover:underline"
            >
              Nagaland Adventure
            </Link>{" "}
            is happening soon! 🌿🔥  
            <br />
            Date: <span className="font-bold">5th December 2025</span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-gray-900 font-mono text-lg sm:text-xl">
            <CountdownBox label="Days" value={nagalandTime.days} />
            <CountdownBox label="Hours" value={nagalandTime.hours} />
            <CountdownBox label="Minutes" value={nagalandTime.minutes} />
            <CountdownBox label="Seconds" value={nagalandTime.seconds} />
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

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-gray-900 font-mono text-lg sm:text-xl">
            <CountdownBox label="Days" value={arunachalTime.days} />
            <CountdownBox label="Hours" value={arunachalTime.hours} />
            <CountdownBox label="Minutes" value={arunachalTime.minutes} />
            <CountdownBox label="Seconds" value={arunachalTime.seconds} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Small reusable component for countdown box
const CountdownBox = ({ label, value }: { label: string; value: number }) => (
  <div className="bg-white shadow rounded-lg px-2 sm:px-4 py-2 min-w-[64px]">
    <span className="block text-2xl sm:text-3xl font-bold">{value}</span>
    <span className="text-xs sm:text-sm">{label}</span>
  </div>
);

export default Announcement;
