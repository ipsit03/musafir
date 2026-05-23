import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { rideData } from "../data/rides";
import { bikeRideData } from "../data/bikerides";

import jsPDF from "jspdf";

import { supabase } from "../supabase";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  numberOfTravelers: number;
  selectedPricing: string;
  pickupCity: string;
  specialRequests: string;
}

const BookingPage = () => {
  const { id } = useParams();

  const ride =
    rideData[id || ""] ||
    bikeRideData[id || ""];

  if (!ride) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">
          Ride not found.
        </p>
      </div>
    );
  }

  // Pricing
  const pricingOptions =
    Object.entries(ride.price);

  const hasMultiplePrices =
    pricingOptions.length > 1;

  const [formData, setFormData] =
    useState<FormData>({
      fullName: "",
      email: "",
      phone: "",
      numberOfTravelers: 1,
      selectedPricing:
        Object.keys(ride.price)[0],
      pickupCity: "",
      specialRequests: "",
    });

  const [showSuccess, setShowSuccess] =
    useState(false);

  // Current price
  const currentPrice =
    ride.price[
      formData.selectedPricing
    ];

  // Base numeric price
  const basePrice =
    parseInt(
      currentPrice.replace(/[^\d]/g, "")
    ) || 0;

  // Total
  const calculateTotal = () =>
    basePrice *
    formData.numberOfTravelers;

  // Handle change
  const handleChange = (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "numberOfTravelers"
          ? parseInt(value)
          : value,
    }));
  };

  // PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);

    doc.text(
      "Musafir Booking Confirmation",
      20,
      20
    );

    doc.setFontSize(12);

    doc.text(
      `Trip: ${ride.title}`,
      20,
      40
    );

    doc.text(
      `Name: ${formData.fullName}`,
      20,
      50
    );

    doc.text(
      `Email: ${formData.email}`,
      20,
      60
    );

    doc.text(
      `Phone: ${formData.phone}`,
      20,
      70
    );

    doc.text(
      `Travelers: ${formData.numberOfTravelers}`,
      20,
      80
    );

    doc.text(
      `Pricing: ${currentPrice}`,
      20,
      90
    );

    doc.text(
      `Total: ₹${calculateTotal()}`,
      20,
      100
    );

    doc.save(
      `Musafir-${ride.id}-Booking.pdf`
    );
  };

  // WhatsApp
  const sendToWhatsApp = () => {
    const message = `
📌 *New Musafir Booking*

🧳 Trip: ${ride.title}
👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
👥 Travelers: ${formData.numberOfTravelers}
💰 Price: ${currentPrice}
💵 Total: ₹${calculateTotal()}
📍 Pickup: ${formData.pickupCity}
📝 Requests: ${
      formData.specialRequests || "None"
    }
`;

    const whatsappURL = `https://wa.me/918900002341?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappURL,
      "_blank"
    );
  };

  // Google Sheets
  const sendToGoogleSheet =
    async () => {
      const data = {
        trip: ride.title,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        travelers:
          formData.numberOfTravelers,
        pricing: currentPrice,
        total: calculateTotal(),
        pickup:
          formData.pickupCity,
        requests:
          formData.specialRequests,
      };

      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbx1h-knwjz4sBlH7AF2oFQiArQw83XmENC0j1ORdR6lOwF7Lfp_VRLhvh5g6UrJ_BeDKA/exec",
          {
            method: "POST",
            body: JSON.stringify(data),
          }
        );
      } catch (error) {
        console.error(error);
      }
    };

  // Submit
  const handleSubmit =
    async () => {
      const bookingData = {
        trip: ride.title,

        full_name:
          formData.fullName,

        email: formData.email,

        phone: formData.phone,

        dob: "",

        gender: "",

        address: "",

        aadhar_number: "",

        travel_date: "",

        number_of_travelers:
          formData.numberOfTravelers,

        selected_pricing:
          currentPrice,

        pickup_city:
          formData.pickupCity,

        special_requests:
          formData.specialRequests,

        total: calculateTotal(),

        aadhar_file_url: "",

        voter_file_url: "",

        medical_file_url: "",
      };

      const { error } =
        await supabase
          .from("bookings")
          .insert([bookingData]);

      if (error) {
        console.log(error);

        alert(error.message);

        return;
      }

      generatePDF();

      sendToWhatsApp();

      sendToGoogleSheet();

      setShowSuccess(true);
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* Ride Card */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src={ride.image}
              alt={ride.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">
                {ride.title}
              </h1>

              <p className="text-gray-600">
                {ride.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                <p>
                  <strong>
                    Duration:
                  </strong>{" "}
                  {ride.duration}
                </p>

                <p>
                  <strong>
                    Location:
                  </strong>{" "}
                  {ride.location}
                </p>

                <p>
                  <strong>
                    Mode:
                  </strong>{" "}
                  {ride.mode}
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-xl shadow p-6 space-y-4">

            <h2 className="text-xl font-bold">
              Traveler Details
            </h2>

            <input
              name="fullName"
              placeholder="Full Name"
              className="w-full border rounded p-3"
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email"
              className="w-full border rounded p-3"
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone"
              className="w-full border rounded p-3"
              onChange={handleChange}
            />

            {/* Travelers */}
            <select
              name="numberOfTravelers"
              className="w-full border rounded p-3"
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5].map(
                (n) => (
                  <option
                    key={n}
                    value={n}
                  >
                    {n} Traveler
                  </option>
                )
              )}
            </select>

            {/* Dynamic Price */}
            {hasMultiplePrices ? (
              <select
                name="selectedPricing"
                value={
                  formData.selectedPricing
                }
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              >
                {pricingOptions.map(
                  ([type, value]) => (
                    <option
                      key={type}
                      value={type}
                    >
                      {type.toUpperCase()} —{" "}
                      {value}
                    </option>
                  )
                )}
              </select>
            ) : (
              <div className="w-full border rounded-xl p-4 bg-green-50 border-green-200">
                <p className="text-sm text-gray-600 mb-1">
                  Expedition Price
                </p>

                <p className="text-2xl font-bold text-green-700">
                  {currentPrice}
                </p>
              </div>
            )}

            <input
              name="pickupCity"
              placeholder="Pickup City"
              className="w-full border rounded p-3"
              onChange={handleChange}
            />

            <textarea
              name="specialRequests"
              placeholder="Special Requests"
              className="w-full border rounded p-3"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-white rounded-xl shadow p-6 sticky top-6 h-fit">

          <h2 className="text-xl font-bold mb-4">
            Booking Summary
          </h2>

          <p>
            <strong>Trip:</strong>{" "}
            {ride.title}
          </p>

          <p>
            <strong>Price:</strong>{" "}
            {currentPrice}
          </p>

          <p>
            <strong>Travelers:</strong>{" "}
            {
              formData.numberOfTravelers
            }
          </p>

          <p className="mt-4 text-3xl font-bold text-blue-600">
            ₹{calculateTotal()}
          </p>

          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow text-center">

            <h2 className="text-xl font-bold mb-2">
              Booking Confirmed 🎉
            </h2>

            <p>
              We'll contact you soon.
            </p>

            <button
              onClick={() =>
                setShowSuccess(false)
              }
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;