"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission delay
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 md:px-20 text-white w-full bg-gradient-to-b from-black via-indigo-950 to-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
        📡 Contact Me
      </h2>
      <p className="text-sm md:text-base text-gray-400 mb-10 text-center max-w-xl">
        Send me a transmission from your sector — I'll get back to you faster
        than the speed of light!
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl space-y-6 bg-black/30 backdrop-blur-sm p-8 rounded-2xl shadow-[0_0_25px_#00f2ff40] border border-teal-500/20"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-teal-300 text-sm font-semibold mb-1"
            >
              Astronaut Name
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full rounded-md border border-teal-500/30 bg-black/40 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-teal-100/50"
              placeholder="e.g., Nova Starwalker"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-teal-300 text-sm font-semibold mb-1"
            >
              Galactic Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full rounded-md border border-teal-500/30 bg-black/40 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-teal-100/50"
              placeholder="e.g., nova@cosmos.net"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-teal-300 text-sm font-semibold mb-1"
            >
              Your Message to Mission Control
            </label>
            <textarea
              name="message"
              rows={5}
              required
              onChange={handleChange}
              className="w-full rounded-md border border-teal-500/30 bg-black/40 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-teal-100/50"
              placeholder="Share your ideas, questions, or planetary coordinates..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-400 text-black font-bold py-2 px-6 rounded-md shadow-[0_0_10px_#00f2ff] transition duration-300"
          >
            🚀 Launch Message
          </button>
        </form>
      ) : (
        <div className="text-center space-y-4 max-w-xl">
          <h3 className="text-2xl font-semibold text-teal-400">
            🚀 Transmission Received!
          </h3>
          <p className="text-gray-300">
            I'll get back to you as soon as the space signal clears ✨
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
