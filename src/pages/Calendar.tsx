// src/pages/Calendar.tsx
import React, { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, addDays, isSameMonth, isSameDay } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const rideDates = [
  {
    date: new Date("2025-10-03"), // Leh–Ladakh
    id: "leh-ladakh",
  },
  {
    date: new Date("2025-12-25"), // Arunachal
    id: "arunachal-explorer",
  },
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
      <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-lg">
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      <h2 className="text-2xl font-semibold text-gray-900">{format(currentMonth, "MMMM yyyy")}</h2>
      <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg">
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );

  const renderDays = () => {
    const start = startOfWeek(currentMonth, { weekStartsOn: 0 });
    const end = endOfMonth(currentMonth);
    const rows = [];

    let days = [];
    let day = start;
    let formattedDate = "";

    while (day <= end || days.length % 7 !== 0) {
      for (let i = 0; i < 7; i++) {
        const currentDay = addDays(day, i);
        formattedDate = format(currentDay, "d");

        const isRideDay = rideDates.find((ride) => isSameDay(ride.date, currentDay));
        const isInactive = !isSameMonth(currentDay, currentMonth);

        days.push(
          <div
            key={currentDay.toString()}
            className={`text-sm flex justify-center items-center h-10 w-10 rounded-full transition ${
              isRideDay
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : isInactive
                ? "text-gray-300"
                : "text-gray-800"
            }`}
          >
            {isRideDay ? (
              <Link to={`/rides/${isRideDay.id}`}>{formattedDate}</Link>
            ) : (
              formattedDate
            )}
          </div>
        );

        day = addDays(day, 1);
      }

      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-2 mb-2">
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Calendar</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click highlighted dates to view ride details
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {renderHeader()}
          <div className="grid grid-cols-7 text-sm font-medium text-gray-500 mb-4 text-center">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
          </div>
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
