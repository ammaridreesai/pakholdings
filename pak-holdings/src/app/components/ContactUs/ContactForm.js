'use client';

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    source: "",
    message: "",
    terms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message
  const [errors, setErrors] = useState({}); // To track form errors

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = e.target.value.replace(/\D/g, "").slice(0, 10);
    const phone = `${formattedPhone.slice(0, 4)}-${formattedPhone.slice(4)}`;
    setFormData({ ...formData, phone });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/\d{4}-\d{7}/.test(formData.phone)) newErrors.phone = "Phone number format should be XXXX-XXXXXXX";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) return; // Don't submit if there are errors

    setIsSubmitting(true); // Start submitting
    setShowSuccessMessage(false); // Reset success message before submitting

    // Send form data to EmailJS
    emailjs
      .sendForm(
        "service_jcrijwn", // Replace with your service ID
        "template_ztkaygn", // Replace with your template ID
        e.target,
        "3UZYaObuM81_HTxpm" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setShowSuccessMessage(true); // Show success message
          setTimeout(() => {
            setShowSuccessMessage(false); // Hide success message after 5 seconds
          }, 5000);
        },
        (error) => {
          console.log("Error:", error.text);
          alert("An error occurred while sending your message.");
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Reset the submitting state
        // Reset form fields after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          topic: "",
          source: "",
          message: "",
          terms: false,
        });
      });
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-screen-md mx-auto px-6 sm:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center text-lg font-normal mb-10">We&apos;d love to hear from you!</p>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="first-name" className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-lg transition outline-none`}
              />
              {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-lg transition outline-none`}
              />
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg transition outline-none`}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              className={`w-full p-3 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg transition outline-none`}
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="topic" className="block text-sm font-medium">Select a Topic</label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              className={`w-full p-3 border ${errors.topic ? "border-red-500" : "border-gray-300"} rounded-lg transition outline-none`}
            >
              <option value="" className="bg-black text-white">Select one...</option>
              <option value="Retail Development" className="bg-black text-white">Retail Development</option>
              <option value="Real Estate" className="bg-black text-white">Real Estate</option>
              <option value="Lifestyle Ventures" className="bg-black text-white">Lifestyle Ventures</option>
            </select>
            {errors.topic && <p className="text-red-500 text-xs">{errors.topic}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full p-3 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-lg transition outline-none`}
              placeholder="Type your message..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              className="h-4 w-4 text-green-500"
            />
            <label htmlFor="terms" className="text-sm font-medium">I agree to the Terms</label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="mt-4 text-center text-green-600">
            Your message has been sent successfully!
          </div>
        )}
      </div>
    </div>
  );
}
