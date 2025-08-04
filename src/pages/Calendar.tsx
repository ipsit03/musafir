import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Calendar</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check availability and plan your travel rides
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <h2 className="text-2xl font-semibold text-gray-900">January 2025</h2>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-lg">
            <CalendarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              Interactive calendar with availability view is under development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;