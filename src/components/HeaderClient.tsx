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
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
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
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <img
            src="/imgs/Logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-normal">
          <Link href="/" className="text-[#F0B225]">
            Productions
          </Link>
          <Link href="/">About Us</Link>
          <Link href="/">Clients</Link>
          <Link href="/">Services</Link>
          <Link href="/">Team</Link>
          <Link href="/">FAQ</Link>
          <Link
            href="/"
            className="text-white text-base rounded-full bg-[#EC3A1A] px-6 py-2 font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-black"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-lg font-normal">
          <Link href="/" className="block text-[#F0B225]">Productions</Link>
          <Link href="/" className="block">About Us</Link>
          <Link href="/" className="block">Clients</Link>
          <Link href="/" className="block">Services</Link>
          <Link href="/" className="block">Team</Link>
          <Link href="/" className="block">FAQ</Link>
          <Link
            href="/"
            className="block text-white text-base rounded-full bg-[#EC3A1A] px-6 py-2 font-medium text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

