import React, { useEffect, useState } from "react";

interface Booking {
  id: number;
  trip: string;
  fullName: string;
  email: string;
  phone: string;
  numberOfTravelers: number;
  selectedPricing: string;
  travelDate: string;
  pickupCity: string;
  specialRequests: string;
  total: number;
}

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("musafirBookings") || "[]");
    setBookings(storedBookings);
  }, []);

  const clearBookings = () => {
    localStorage.removeItem("musafirBookings");
    setBookings([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Musafir Admin Dashboard
        </h1>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-600">No bookings yet.</p>
        ) : (
          <>
            <div className="text-right mb-4">
              <button
                onClick={clearBookings}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Clear All Bookings
              </button>
            </div>

            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white shadow rounded-lg p-5 border"
                >
                  <h2 className="font-bold text-lg text-blue-600">
                    {booking.trip}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-sm">
                    <p><strong>Name:</strong> {booking.fullName}</p>
                    <p><strong>Email:</strong> {booking.email}</p>
                    <p><strong>Phone:</strong> {booking.phone}</p>
                    <p><strong>Travelers:</strong> {booking.numberOfTravelers}</p>
                    <p><strong>Pricing:</strong> {booking.selectedPricing}</p>
                    <p><strong>Total:</strong> ₹{booking.total}</p>
                    <p><strong>Date:</strong> {booking.travelDate}</p>
                    <p><strong>Pickup:</strong> {booking.pickupCity}</p>
                  </div>

                  {booking.specialRequests && (
                    <p className="mt-2 text-sm">
                      <strong>Special Requests:</strong> {booking.specialRequests}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
