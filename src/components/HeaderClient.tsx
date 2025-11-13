"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderClient({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "#productions", label: "Productions" },
    { href: "#about-us", label: "About Us" },
    { href: "#clients", label: "Clients" },
    { href: "#services", label: "Services" },
    { href: "#bios", label: "Team" },
    { href: "#faq", label: "FAQ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (pathname === "/") {
        if (currentScrollY === 0) {
          setIsVisible(false);
        } else {
          setIsVisible(currentScrollY <= lastScrollY);
        }
      } else {
        setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 80);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, pathname]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1);
      const el = document.getElementById(id);
      if (el) {
        const header = document.querySelector("header");
        const headerHeight = header ? header.clientHeight : 0;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight - 10;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        setIsMenuOpen(false);
      }
    } else {
      router.push(href);
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 relative">
        {children}

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-normal relative flex-nowrap whitespace-nowrap">
          {navItems.map((item) => {
            if (item.label === "Services") {
              return (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-black hover:text-[#F0B225] transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.label}
                    <ChevronDown size={18} className="mt-[2px]" />
                  </button>

                  {/* Dropdown with animation */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 -mt-1 w-56 bg-white py-2 z-50 "
                      >
                        <a
                          href="/narrative-content"
                          onClick={(e) => handleAnchorClick(e, "/narrative-content")}
                          className="block px-4 py-2 hover:bg-[#F0B225] hover:text-white text-black"
                        >
                          Narrative Content
                        </a>
                        <a
                          href="/casting"
                          onClick={(e) => handleAnchorClick(e, "/casting")}
                          className="block px-4 py-2 hover:bg-[#F0B225] hover:text-white text-black"
                        >
                          Casting
                        </a>
                        <a
                          href="/services"
                          onClick={(e) => handleAnchorClick(e, "/services")}
                          className="block px-4 py-2 hover:bg-[#F0B225] hover:text-white text-black"
                        >
                          Local Production Services
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`cursor-pointer transition-colors text-black hover:text-[#F0B225] ${
                  item.label === "About Us" ? "px-6" : ""
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            className="text-white text-base bg-[#EC3A1A] px-6 py-2 rounded-full font-medium"
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 px-6 py-4 flex flex-col space-y-4 text-lg font-normal"
          >
            {navItems.map((item) => {
              if (item.label === "Services") {
                return (
                  <div key={item.href} className="flex flex-col">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between text-black hover:text-[#F0B225]"
                    >
                      {item.label}
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex flex-col pl-4 mt-2 space-y-2"
                        >
                          <a
                            href="/narrative-content"
                            onClick={(e) => handleAnchorClick(e, "/narrative-content")}
                            className="text-black hover:text-[#F0B225]"
                          >
                            Narrative Content
                          </a>
                          <a
                            href="/casting"
                            onClick={(e) => handleAnchorClick(e, "/casting")}
                            className="text-black hover:text-[#F0B225]"
                          >
                            Casting
                          </a>
                          <a
                            href="/services"
                            onClick={(e) => handleAnchorClick(e, "/services")}
                            className="text-black hover:text-[#F0B225]"
                          >
                            Local Production Services
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="block transition-colors text-black hover:text-[#F0B225]"
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="block text-white text-base bg-[#EC3A1A] px-6 py-2 text-center"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
