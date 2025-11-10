"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function HeaderClient({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 80);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white shadow-sm transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Server-rendered header (logo + desktop nav) */}
      {children}

      {/* Mobile toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-black absolute right-6 top-4"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-4 text-lg font-normal">
          <a href="/" className="block text-[#F0B225]">Productions</a>
          <a href="#about_us" className="block">About Us</a>
          <a href="#clients" className="block">Clients</a>
          <a href="#services" className="block">Services</a>
          <a href="#bios" className="block">Team</a>
          <a href="#faq" className="block">FAQ</a>
          <a
            href="/"
            className="block text-white text-base rounded-full bg-[#EC3A1A] px-6 py-2 text-center"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
