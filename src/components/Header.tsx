"use client";
import Link from "next/link";


export const Header = (params: any) => {

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 `}>
        <nav className="container mx-auto bg-white px-4 w-full py-8 flex justify-between">
        <Link href="/"><img src="/imgs/Logo.png" alt="Logo" /></Link>
        <Link href="/">About Us</Link>
        <Link href="/">News</Link>
        <Link href="/">Production Services</Link>
        <Link href="/">Team</Link>
        <Link href="/">Testimonials</Link>
        <Link href="/">Clients</Link>
        <Link href="/">Contact</Link>

      </nav>
    </header>
  );
};