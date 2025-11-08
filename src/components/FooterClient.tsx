"use client";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function FooterClient() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm((prev) => !prev);

  return (
    <>
      {/* CTA Banner */}
      <div
        className="text-6xl text-white py-26 px-12 flex flex-row items-center justify-between"
        style={{ backgroundColor: "#ec3a1a" }}
      >
        <h3>
          Tell us about your project
          <br />—we'll handle the rest.
        </h3>
        <button
          onClick={toggleForm}
          className="bg-white text-black text-4xl rounded-full px-10 py-6 font-regular hover:bg-gray-100 transition"
        >
          {showForm ? "Close Form" : "Let's Connect"}
        </button>
      </div>

      {/* Animated Form Reveal */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out ${
          showForm ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ContactForm />
      </div>
    </>
  );
}
