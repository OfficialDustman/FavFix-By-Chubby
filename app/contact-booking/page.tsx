"use client";

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    notes: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  const validateForm = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.date) newErrors.date = "Preferred date and time is required.";
    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    alert("Booking submitted successfully!");
    // Clear the form or handle submission logic here.
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-[#1F3C88] mb-8">
          Contact & Booking
        </h1>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-[#1F3C88] mb-4">
              Get in Touch
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>Phone: (123) 456-7890</li>
              <li>Email: contact@favfix.com</li>
              <li>Address: 123 Handyman Lane, Fixitville</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-[#1F3C88] mb-4">
              Book a Service
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3C88]`}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3C88]`}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`w-full px-4 py-2 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3C88]`}
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                  Service Type
                </label>
                <select
                  id="service"
                  className={`w-full px-4 py-2 border ${
                    errors.service ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3C88]`}
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical Work</option>
                  <option value="painting">Painting</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                  Preferred Date & Time
                </label>
                <input
                  id="date"
                  type="datetime-local"
                  className={`w-full px-4 py-2 border ${
                    errors.date ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3C88]`}
                  value={formData.date}
                  onChange={handleInputChange}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
              </div>

              <div>
                <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3C88]"
                  placeholder="Any specific details or requests"
                  value={formData.notes}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#FFD166] text-[#1F3C88] px-6 py-2 rounded-lg font-medium hover:bg-[#FFC34B]"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
