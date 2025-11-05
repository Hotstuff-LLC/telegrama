"use client";
import Link from "next/link";
import Image from "next/image";

export const Footer = (params: any) => {

  return (
    <div>
        <div className={`text-6xl text-white py-26 px-12 flex flex-row items-center  justify-between`}
        style={{ backgroundColor: "#ec3a1a" }}>
          <h3>Tell us about your project<br/>—we'll handle the rest.</h3>
          <button className={`bg-white text-black text-4xl rounded-full px-10 py-6 font-regular hover:bg-gray-100`}>Let's Connect</button>
        </div>
    <header
      className={`w-full bg-black text-white mt-auto py-4 transition-all duration-300`}
      style={{ backgroundColor: "#1d2020" }}>
        <nav className="container mx-auto px-4 w-full py-8 flex flex-col justify-between ml-[33%]">
        <div className="py-16 border-b border-gray-300">
        <p  className="text-lg font-thin">Address</p>
        <h3 className="text-4xl">Etla 9, Col Condesa. CP 06100, Mexico City</h3>
        </div>
        <div className="py-16 border-b border-gray-300">
        <p className="text-lg font-thin">Phone</p>
        <h3 className="text-4xl pt-2">+ 52 1 552 202 1414</h3>
        </div>
        <div  className={"flex flex-col py-16 border-b border-gray-300"}>
        <p className="text-lg font-thin">Email</p>
        <h3 className="text-4xl pt-2">cathcuevas.prod@gmail.com</h3>
        <h3 className="text-4xl">enriquerizo@gmail.com</h3>
        </div>
        <div className="py-16">
        <p  className="text-lg font-thin">Connect</p>
        <div className="flex flex-row gap-4 mb-4 pt-2">
        <Link href="/">
          <Image src="/imgs/linkedin-logo.svg"
            alt="Image 2"
            width={20}
            height={20}
            className="invert brightness-0"
           />
        </Link>
        <Link href="/">
          <Image src="/imgs/instagram-logo.svg"
           alt="Image 3"
            width={20}
            height={20}
            className="invert brightness-0"
           />
        </Link>
        </div>
        </div>
      </nav>
    </header>
        <h3 className="text-xs text-white"
        style={{ backgroundColor: "#1d2020" }}
        >© 2023 Telegrama Audiovisual SA de CV</h3>
    </div>
  );
};