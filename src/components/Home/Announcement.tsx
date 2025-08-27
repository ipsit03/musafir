import React, { useEffect, useState } from "react";

const Announcement = () => {
  const tripDate = new Date("2025-10-31T00:00:00"); // Ladakh trip date
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = tripDate.getTime() - now.getTime();

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
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-yellow-100 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          🚨 Announcement
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The <span className="font-semibold">Ladakh Trip</span> date is
          officially announced! 🏔️  
          <br />
          Mark your calendars: <span className="font-bold">31st October 2025</span>
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-6 text-gray-900 font-mono text-xl">
          <div className="bg-white shadow rounded-lg px-4 py-2">
            <span className="block text-3xl font-bold">{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="bg-white shadow rounded-lg px-4 py-2">
            <span className="block text-3xl font-bold">{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="bg-white shadow rounded-lg px-4 py-2">
            <span className="block text-3xl font-bold">{timeLeft.minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="bg-white shadow rounded-lg px-4 py-2">
            <span className="block text-3xl font-bold">{timeLeft.seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
