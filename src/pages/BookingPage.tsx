import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { rideData } from "../data/rides";
import jsPDF from "jspdf";


interface FormData {
  fullName: string;
  email: string;
  phone: string;
  numberOfTravelers: number;
  selectedPricing: string;
  travelDate: string;
  pickupCity: string;
  specialRequests: string;
}

const BookingPage = () => {
  const { id } = useParams();
  const ride = rideData[id || ""];

  const pricingOptions = ride?.price
    ? Object.entries(ride.price).map(([type, value]) => ({
        type,
        price: parseInt(value.replace(/[^\d]/g, "")) || 0,
      }))
    : [];

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    numberOfTravelers: 1,
    selectedPricing: pricingOptions[0]?.type || "",
    travelDate: "",
    pickupCity: "",
    specialRequests: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  if (!ride) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Ride not found.</p>
      </div>
    );
  }

  const getSelectedPrice = () => {
    const selected = pricingOptions.find(
      (opt) => opt.type === formData.selectedPricing
    );
    return selected?.price || 0;
  };

  const calculateTotal = () =>
    getSelectedPrice() * formData.numberOfTravelers;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "numberOfTravelers" ? parseInt(value) : value,
    }));
  };
  const generatePDF = () => {
  const doc = new jsPDF();

  // Logo
  const logo = new Image();
  logo.src = "/musafir-logo.png";

  logo.onload = () => {
    doc.addImage(logo, "PNG", 15, 10, 30, 30);

    // Title
    doc.setFontSize(20);
    doc.text("Musafir Travel Booking Confirmation", 50, 20);

    // Description
    doc.setFontSize(11);
    doc.text(
      "Musafir is a curated travel community offering immersive journeys,",
      50,
      28
    );
    doc.text(
      "adventure rides, cultural explorations, and offbeat experiences across India.",
      50,
      34
    );

    // Divider
    doc.line(15, 45, 195, 45);

    // Trip Details
    doc.setFontSize(14);
    doc.text("Trip Details", 15, 55);

    doc.setFontSize(12);
    doc.text(`Trip: ${ride.title}`, 15, 65);
    doc.text(`Duration: ${ride.duration}`, 15, 75);
    doc.text(`Location: ${ride.location}`, 15, 85);
    doc.text(`Mode: ${ride.mode}`, 15, 95);

    // User Details
    doc.setFontSize(14);
    doc.text("Traveler Information", 15, 110);

    doc.setFontSize(12);
    doc.text(`Name: ${formData.fullName}`, 15, 120);
    doc.text(`Email: ${formData.email}`, 15, 130);
    doc.text(`Phone: ${formData.phone}`, 15, 140);
    doc.text(`Travelers: ${formData.numberOfTravelers}`, 15, 160);
    doc.text(`Pricing Type: ${formData.selectedPricing}`, 15, 170);
    doc.text(`Total Amount: ₹${calculateTotal()}`, 15, 180);

    // Footer
    doc.setFontSize(10);
    doc.text(
      "Thank you for choosing Musafir. We look forward to traveling with you!",
      15,
      200
    );
    doc.text(
      "For support contact: musafir.travel.community@gmail.com",
      15,
      208
    );

    doc.save(`Musafir-${ride.id}-Booking.pdf`);
  };
};
const sendToWhatsApp = () => {
  const message = `
📌 *New Musafir Booking*

🧳 Trip: ${ride.title}
👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
📅 Date: ${formData.travelDate}
👥 Travelers: ${formData.numberOfTravelers}
💺 Pricing: ${formData.selectedPricing}
💰 Total: ₹${calculateTotal()}
📍 Pickup: ${formData.pickupCity}
📝 Requests: ${formData.specialRequests || "None"}
  `;

  const whatsappURL = `https://wa.me/918900002341?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
};
const sendToGoogleSheet = async () => {
  const data = {
    trip: ride.title,
    name: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    date: formData.travelDate,
    travelers: formData.numberOfTravelers,
    pricing: formData.selectedPricing,
    total: calculateTotal(),
    pickup: formData.pickupCity,
    requests: formData.specialRequests,
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbx1h-knwjz4sBlH7AF2oFQiArQw83XmENC0j1ORdR6lOwF7Lfp_VRLhvh5g6UrJ_BeDKA/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error sending booking:", error);
  }
};





  const handleSubmit = () => {
  generatePDF(); // 👈 Added
  sendToGoogleSheet();
  setShowSuccess(true);
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src={ride.image}
              alt={ride.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">{ride.title}</h1>
              <p className="text-gray-600">{ride.description}</p>

              <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                <p><strong>Duration:</strong> {ride.duration}</p>
                <p><strong>Location:</strong> {ride.location}</p>
                <p><strong>Mode:</strong> {ride.mode}</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-xl shadow p-6 space-y-4">
            <h2 className="text-xl font-bold">Traveler Details</h2>

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

            <select
              name="numberOfTravelers"
              className="w-full border rounded p-3"
              onChange={handleChange}
            >
              {[1,2,3,4,5].map(n=>(
                <option key={n}>{n}</option>
              ))}
            </select>

            <select
              name="selectedPricing"
              className="w-full border rounded p-3"
              onChange={handleChange}
            >
              {pricingOptions.map(opt => (
                <option key={opt.type} value={opt.type}>
                  {opt.type} – ₹{opt.price}
                </option>
              ))}
            </select>

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

        {/* RIGHT SUMMARY */}
        <div className="bg-white rounded-xl shadow p-6 sticky top-6">
          <h2 className="text-xl font-bold mb-4">Booking Summary</h2>

          <p><strong>Trip:</strong> {ride.title}</p>
          <p><strong>Price Type:</strong> {formData.selectedPricing}</p>
          <p><strong>Travelers:</strong> {formData.numberOfTravelers}</p>
          <p className="mt-2 text-lg font-bold text-blue-600">
            Total: ₹{calculateTotal()}
          </p>

          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h2 className="text-xl font-bold mb-2">Booking Confirmed 🎉</h2>
            <p>We’ll contact you soon.</p>
            <button
              onClick={() => setShowSuccess(false)}
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
