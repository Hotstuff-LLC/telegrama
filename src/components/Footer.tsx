import Link from "next/link";
import Image from "next/image";
import FooterClient from "./FooterClient";

export const Footer = () => {
  return (
    <div className="overflow-x-hidden w-full relative">
      {/*Static red buffer background */}
      <div
        className="absolute top-0 left-0 w-full -z-10"
        style={{
          backgroundColor: "#ec3a1a",
          height: "1000px", // match or slightly exceed form max height
        }}
      />

      <div className="flex flex-col relative z-10">
        {/* Top CTA + Form */}
        <FooterClient />

        {/* Footer Info Section */}
        <footer
          className="w-full bg-[#1d2020] text-white mt-auto py-4 transition-all duration-300"
        >
          <nav
            className="
              max-w-6xl mx-auto px-4 w-full py-8 flex flex-col justify-between
              md:pl-[33%] md:ml-0
            "
          >
            {/* Address */}
            <div className="py-10 md:py-16 border-b border-gray-300">
              <p className="text-base md:text-lg font-thin">Address</p>
              <h3 className="text-2xl md:text-4xl leading-snug">
                Etla 9, Col. Hipódromo, 06100, Ciudad de México, México
              </h3>
            </div>

            {/* Phone */}
            <div className="py-10 md:py-16 border-b border-gray-300">
              <p className="text-base md:text-lg font-thin">Phone</p>
              <h3 className="text-2xl md:text-4xl pt-2">+ 52 1 552 202 1414</h3>
            </div>

            {/* Email */}
            <div className="flex flex-col py-10 md:py-16 border-b border-gray-300">
              <p className="text-base md:text-lg font-thin">Email</p>
              <h3 className="text-2xl md:text-4xl pt-2">cath@tlgm.mx</h3>
              <h3 className="text-2xl md:text-4xl">enrique@tlgm.mx</h3>
            </div>

            {/* Social */}
            <div className="py-10 md:py-16">
              <p className="text-base md:text-lg font-thin">Connect</p>
              <div className="flex flex-row gap-4 mb-4 pt-2">
                <Link
                  href="https://www.linkedin.com/company/92421640/admin/dashboard/"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/imgs/linkedin-logo.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="invert brightness-0"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/telegramaaudiovisual/"
                  aria-label="Instagram"
                >
                  <Image
                    src="/imgs/instagram-logo.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="invert brightness-0"
                  />
                </Link>
              </div>
            </div>
          </nav>
        </footer>
      </div>

      {/* Bottom copyright */}
      <h3 className="text-[10px] md:text-xs text-white text-center py-3 bg-[#1d2020]">
        © 2023 Telegrama Audiovisual SA de CV
      </h3>
    </div>
  );
};

export default Footer;
