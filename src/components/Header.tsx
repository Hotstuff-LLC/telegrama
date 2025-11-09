import Link from "next/link";
import HeaderClient from "./HeaderClient";

export const Header = () => {
  return (
    <HeaderClient>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <img
            src="/imgs/Logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-lg font-normal">
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
        </div>
      </nav>
    </HeaderClient>
  );
};

export default Header;
