"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailPhone: "",
    company: "",
    projectType: "",
    services: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          emailPhone: "",
          company: "",
          projectType: "",
          services: "",
        });
      } else throw new Error("Error sending message");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-[#EC3A1A] py-16 px-4">
      <div className="container mx-auto max-w-2xl text-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          We’d love to hear more about you and your project.
        </h2>
        <p className="text-center mb-8">
          Please fill this form and we'll soon get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border-none rounded-lg px-4 py-2 text-black bg-white focus:ring-2 focus:ring-[#F0B225]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-white">
              Email Address / Phone Number
            </label>
            <input
              type="text"
              name="emailPhone"
              value={formData.emailPhone}
              onChange={handleChange}
              required
              className="w-full border-none rounded-lg px-4 py-2 text-black bg-white focus:ring-2 focus:ring-[#F0B225]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-white">
              Company / Production
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border-none rounded-lg px-4 py-2 text-black bg-white focus:ring-2 focus:ring-[#F0B225]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-white">Project Type</label>
            <input
              type="text"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full border-none rounded-lg px-4 py-2 text-black bg-white focus:ring-2 focus:ring-[#F0B225]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-white">Services Needed</label>
            <textarea
              name="services"
              value={formData.services}
              onChange={handleChange}
              rows={3}
              className="w-full border-none rounded-lg px-4 py-2 text-black bg-white focus:ring-2 focus:ring-[#F0B225]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-white text-[#EC3A1A] font-medium py-3 rounded-lg hover:bg-[#F0B225] hover:text-white transition"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-200 text-center mt-3">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-yellow-200 text-center mt-3">
              There was an error sending your message.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
