"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface FormData {
  name: string;
  phone: string;
  email: string;
  country: string;
  investmentInterest: string;
  communicationChannel: string;
}

interface MVPFormProps {
  onClose: () => void;
  onSubmitSuccess: () => void;
}

export default function MVPForm({ onClose, onSubmitSuccess }: MVPFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    country: "",
    investmentInterest: "",
    communicationChannel: "Email",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.communicationChannel.trim()) {
      newErrors.communicationChannel = "Please select a communication channel";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Here we'll implement the Google Sheets submission
      const response = await fetch("/api/submit-mvp-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();

      // Check if we have a redirect URL in the response
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        // Fallback to the normal success handler
        onSubmitSuccess();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-dark-light rounded-xl shadow-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">MVP Kasst Access</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <p className="text-light mb-6">
          Please complete this form to access the MVP Kasst platform.
        </p>

        {submitError && (
          <div className="bg-red-900/30 border border-red-500 text-red-200 px-4 py-2 rounded mb-4">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-light mb-1">
                Full Name or Company Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-dark border rounded-lg px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.name ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-light mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-dark border rounded-lg px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.phone ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-red-400 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-light mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-dark border rounded-lg px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.email ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="country" className="block text-light mb-1">
                Country *
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full bg-dark border rounded-lg px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.country ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.country && (
                <p className="mt-1 text-red-400 text-sm">{errors.country}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="investmentInterest"
                className="block text-light mb-1"
              >
                Investment Interest (Optional)
              </label>
              <input
                type="text"
                id="investmentInterest"
                name="investmentInterest"
                value={formData.investmentInterest}
                onChange={handleChange}
                placeholder="How much are you planning to invest?"
                className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="communicationChannel"
                className="block text-light mb-1"
              >
                Preferred Communication Channel *
              </label>
              <select
                id="communicationChannel"
                name="communicationChannel"
                value={formData.communicationChannel}
                onChange={handleChange}
                className={`w-full bg-dark border rounded-lg px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.communicationChannel
                    ? "border-red-500"
                    : "border-gray-700"
                }`}
              >
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone Call">Phone Call</option>
              </select>
              {errors.communicationChannel && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.communicationChannel}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-primary ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </div>
              ) : (
                "Access MVP"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
