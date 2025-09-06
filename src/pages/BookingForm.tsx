// src/pages/BookingForm.tsx
import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    tripDate: "",
    gender: "",
    address: "",
    aadharNumber: "",
    aadharFile: null as File | null,
    voterFile: null as File | null,
    medicalFile: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("✅ Form submitted! (Connect backend/Google Form here)");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          📝 Trip Registration Form
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              pattern="[0-9]{10}"
              required
              placeholder="10-digit number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="dob"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not">Prefer not to say</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Aadhar Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Aadhar Card Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="aadharNumber"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.aadharNumber}
              onChange={handleChange}
            />
          </div>

          {/* Upload Aadhar */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Aadhar Card Photo (Front & Back) <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="aadharFile"
              accept=".jpg,.jpeg,.png,.pdf"
              required
              onChange={handleChange}
            />
          </div>

          {/* Upload Voter ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Voter ID Card <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="voterFile"
              accept=".jpg,.jpeg,.png,.pdf"
              required
              onChange={handleChange}
            />
          </div>

          {/* Upload Medical Certificate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Medical Certificate <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-600 mb-2">
              ✅ Must state you are medically fit for high-altitude travel <br />
              ✅ Must be dated within 7 days before the trip starts <br />
              ✅ Accepted formats: PDF, JPG, PNG <br />
              ⛔ Registrations without valid medical certificates will be rejected.
            </p>
            <input
              type="file"
              name="medicalFile"
              accept=".jpg,.jpeg,.png,.pdf"
              required
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
