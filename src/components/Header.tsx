import HeaderClient from "./HeaderClient";
import Link from "next/link";

export const Header = () => {
  return (
    <HeaderClient>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <img src="/imgs/Logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-normal">
          <a href="/" className="text-[#F0B225]">Productions</a>
          <a href="#about_us">About Us</a>
          <a href="#clients">Clients</a>
          <a href="#services">Services</a>
          <a href="#bios">Team</a>
          <a href="#faq">FAQ</a>
          <a href="/" className="text-white text-base rounded-full bg-[#EC3A1A] px-6 py-2 font-medium">Contact</a>
        </nav>
      </div>
    </HeaderClient>
  );
};

export default Header;
