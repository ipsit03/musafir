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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Static ride dates (could be dynamically loaded later)
const rideDates = [
  { date: new Date("2025-10-31"), id: "leh-ladakh" }, // ✅ updated from 3rd → 31st Oct
  { date: new Date("2025-12-25"), id: "arunachal-explorer" },
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
      <h2 className="text-2xl font-semibold text-gray-900">
        {format(currentMonth, "MMMM yyyy")}
      </h2>
      <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg">
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
        const isRideDay = rideDates.find((ride) => isSameDay(ride.date, current));
        const isInactive = !isSameMonth(current, currentMonth);

        const baseClasses =
          "text-sm h-10 w-10 flex items-center justify-center rounded-full transition";
        const textColor = isInactive ? "text-gray-300" : "text-gray-800";
        const rideClasses = isRideDay
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : textColor;

        const dayContent = (
          <div className={`${baseClasses} ${rideClasses}`}>
            {formattedDate}
          </div>
        );

        days.push(
          <div key={current.toString()} className="flex justify-center items-center">
            {isRideDay ? (
              <Link
                to={`/rides/${isRideDay.id}`}
                className="h-10 w-10 block"
                title={`View ${isRideDay.id.replace("-", " ")} ride details`}
              >
                {dayContent}
              </Link>
            ) : (
              dayContent
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

          {/* Weekday Headings */}
          <div className="grid grid-cols-7 text-sm font-medium text-gray-500 mb-4 text-center">
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
