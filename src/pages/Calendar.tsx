import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

// Static ride dates (later load dynamically from Supabase)
const rideDates = [
  { date: new Date("2025-10-31"), id: "leh-ladakh", name: "Leh-Ladakh Expedition" },
  { date: new Date("2025-12-05"), id: "nagaland-winter-expedition", name: "Nagaland Winter Expedition" },
  { date: new Date("2025-12-26"), id: "arunachal-explorer", name: "Arunachal Explorer" },
];

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(today));

  const minDate = new Date(today.getFullYear() - 1, 0, 1);
  const maxDate = new Date(today.getFullYear() + 10, 11, 31);

  const nextMonth = () => {
    const next = addMonths(currentMonth, 1);
    if (next <= maxDate) setCurrentMonth(next);
  };

  const prevMonth = () => {
    const prev = subMonths(currentMonth, 1);
    if (prev >= minDate) setCurrentMonth(prev);
  };

  const renderHeader = () => (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={prevMonth}
        className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <CalendarDays className="h-6 w-6 text-blue-600" />
        {format(currentMonth, "MMMM yyyy")}
      </h2>
      <button
        onClick={nextMonth}
        className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );

  const renderDays = () => {
    const startDate = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 0 });
    const endDate = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 0 });

    const rows = [];
    let current = startDate;

    while (current <= endDate) {
      const days = [];

      for (let i = 0; i < 7; i++) {
        const formattedDate = format(current, "d");
        const ride = rideDates.find((ride) => isSameDay(ride.date, current));
        const isInactive = !isSameMonth(current, currentMonth);
        const isToday = isSameDay(current, today);

        let classes =
          "text-sm h-12 w-12 flex items-center justify-center rounded-full transition-all duration-300";

        if (ride) {
          classes +=
            " bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105";
        } else if (isToday) {
          classes += " border-2 border-blue-500 text-blue-600 font-bold";
        } else if (isInactive) {
          classes += " text-gray-300";
        } else {
          classes += " text-gray-700 hover:bg-gray-100";
        }

        const content = <div className={classes}>{formattedDate}</div>;

        days.push(
          <div
            key={current.toString()}
            className="flex justify-center items-center relative group"
          >
            {ride ? (
              <Link
                to={`/rides/${ride.id}`}
                className="h-12 w-12 block"
                title={`View ${ride.name}`}
              >
                {content}
              </Link>
            ) : (
              content
            )}

            {/* Tooltip for rides */}
            {ride && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                {ride.name}
              </div>
            )}
          </div>
        );

        current = addDays(current, 1);
      }

      rows.push(
        <div key={current.toString()} className="grid grid-cols-7 gap-2 mb-2">
          {days}
        </div>
      );
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            📅 Upcoming Adventures
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our upcoming expeditions. Highlighted dates represent{" "}
            <span className="font-semibold text-blue-600">Musafir trips</span>.
            Click to see details.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {renderHeader()}

          {/* Weekday Headings */}
          <div className="grid grid-cols-7 text-sm font-semibold text-gray-500 mb-4 text-center">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          {/* Calendar Grid */}
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
