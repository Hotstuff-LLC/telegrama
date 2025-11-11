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
        className="
          text-3xl md:text-6xl text-white 
          py-12 md:py-26 px-6 md:px-12 
          flex flex-col md:flex-row items-center md:items-center justify-between gap-6
        "
        style={{ backgroundColor: "#ec3a1a" }}
      >
        <h3 id="contact" className="text-center md:text-left leading-tight">
          Tell us about your project
          <br />—we'll handle the rest.
        </h3>

        <button
          onClick={toggleForm}
          className="
            bg-white text-black 
            text-xl md:text-4xl rounded-full 
            px-8 md:px-10 py-4 md:py-6 
            font-regular hover:bg-gray-100 transition
          "
        >
          {showForm ? "Close Form" : "Let's Connect"}
        </button>
      </div>

      {/* Animated Form Reveal */}
      <div
        className={`
          overflow-hidden 
          transition-[max-height,opacity] duration-700 ease-in-out
          ${showForm ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"}
        `}
        style={{
          backgroundColor: "#ec3a1a", // ✅ keep red visible during transition
        }}
      >
        <ContactForm />
      </div>
    </>
  );
}
