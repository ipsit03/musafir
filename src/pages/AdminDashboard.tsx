import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";

interface Booking {
  id: string;

  trip: string;

  full_name: string;

  email: string;

  phone: string;

  dob?: string;

  gender?: string;

  address?: string;

  aadhar_number?: string;

  travel_date?: string;

  number_of_travelers?: number;

  selected_pricing?: string;

  pickup_city?: string;

  special_requests?: string;

  total?: number;

  created_at?: string;

  status?: string;
}

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<
    Booking[]
  >([]);

  useEffect(() => {
    fetchBookings();

    // Realtime listener
    const channel = supabase
      .channel("bookings-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "bookings",
        },
        () => {
          fetchBookings();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchBookings = async () => {
    const { data, error } =
      await supabase
        .from("bookings")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (error) {
      console.log(error);
      return;
    }

    setBookings(data || []);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Musafir Admin Dashboard
        </h1>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-600">
            No bookings yet.
          </p>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white shadow rounded-xl p-6 border"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-blue-600">
                    {booking.trip || "N/A"}
                  </h2>

                  <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                    {booking.status ||
                      "pending"}
                  </span>
                </div>

                {/* Main Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <p>
                    <strong>
                      Name:
                    </strong>{" "}
                    {booking.full_name ||
                      "N/A"}
                  </p>

                  <p>
                    <strong>
                      Email:
                    </strong>{" "}
                    {booking.email ||
                      "N/A"}
                  </p>

                  <p>
                    <strong>
                      Phone:
                    </strong>{" "}
                    {booking.phone ||
                      "N/A"}
                  </p>

                  <p>
                    <strong>
                      DOB:
                    </strong>{" "}
                    {booking.dob ||
                      "N/A"}
                  </p>

                  <p>
                    <strong>
                      Gender:
                    </strong>{" "}
                    {booking.gender ||
                      "N/A"}
                  </p>

                  <p>
                    <strong>
                      Travelers:
                    </strong>{" "}
                    {booking.number_of_travelers ||
                      "N/A"}
                  </p>

                  <p>
                    <strong>
                      Pricing:
                    </strong>{" "}
                    {booking.selected_pricing ||
                      "N/A"}
                  </p>

                  <p>
                    <strong>
                      Travel Date:
                    </strong>{" "}
                    {booking.travel_date ||
                      "N/A"}
                  </p>

                  <p>
                    <strong>
                      Pickup City:
                    </strong>{" "}
                    {booking.pickup_city ||
                      "N/A"}
                  </p>

                  <p>
                    <strong>
                      Total:
                    </strong>{" "}
                    {booking.total
                      ? `₹${booking.total}`
                      : "N/A"}
                  </p>

                  <p>
                    <strong>
                      Aadhar:
                    </strong>{" "}
                    {booking.aadhar_number ||
                      "N/A"}
                  </p>

                  <p>
                    <strong>
                      Created:
                    </strong>{" "}
                    {booking.created_at
                      ? new Date(
                          booking.created_at
                        ).toLocaleString()
                      : "N/A"}
                  </p>
                </div>

                {/* Address */}
                {booking.address && (
                  <div className="mt-4">
                    <p className="text-sm">
                      <strong>
                        Address:
                      </strong>{" "}
                      {booking.address}
                    </p>
                  </div>
                )}

                {/* Special Requests */}
                {booking.special_requests && (
                  <div className="mt-4">
                    <p className="text-sm">
                      <strong>
                        Special Requests:
                      </strong>{" "}
                      {
                        booking.special_requests
                      }
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;