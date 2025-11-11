"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function HeaderClient({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/narrative-content", label: "Narrative" },
    { href: "/casting", label: "Casting" },
  ];

  // ✅ Navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (pathname === "/") {
        // Hide completely when at very top
        if (currentScrollY === 0) {
          setIsVisible(false);
        } else {
          // Normal scroll-up behavior after that
          setIsVisible(currentScrollY <= lastScrollY);
        }
      } else {
        // Normal behavior for all other pages
        setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 80);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, pathname]);

  // ✅ Smooth scroll for #contact
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")?.substring(1);
      const targetEl = targetId ? document.getElementById(targetId) : null;
      if (targetEl) targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
      setIsMenuOpen(false);
    };
    links.forEach((link) => link.addEventListener("click", handleClick));
    return () => links.forEach((link) => link.removeEventListener("click", handleClick));
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white shadow-sm transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {children}

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-normal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href ? "text-[#F0B225]" : "text-black"
              } ${
                item.href === "/narrative-content" ? "px-4" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-white text-base rounded-full bg-[#EC3A1A] px-6 py-2 font-medium"
          >
            Contact
          </a>
        </nav>

        {/* ✅ Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-black ml-auto flex items-center justify-center"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-4 text-lg font-normal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block transition-colors ${
                pathname === item.href ? "text-[#F0B225]" : "text-black"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="block text-white text-base rounded-full bg-[#EC3A1A] px-6 py-2 text-center"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
