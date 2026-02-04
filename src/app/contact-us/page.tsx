"use client";

import { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Contact <span className="text-orange-600">Us</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a question, feedback, or want to place a bulk order?
            We’d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Get in Touch
              </h3>
              <p className="mt-2 text-gray-600">
                Reach out to us for daily lunch & dinner delivery, subscriptions,
                or special requests.
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>📍 <strong>Address:</strong> Noida, India</p>
              <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
              <p>✉️ <strong>Email:</strong> support@foodhub.com</p>
              <p>⏰ <strong>Timing:</strong> 12 PM – 11 PM (All Days)</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={4}
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
