import Link from "next/link";
import Image from "next/image";
import FooterClient from "./FooterClient";

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col">
        {/* Top CTA Section — interactive part moved to FooterClient */}
        <FooterClient />

        {/* Footer Info Section */}
        <footer
          className="w-full bg-black text-white mt-auto py-4 transition-all duration-300"
          style={{ backgroundColor: "#1d2020" }}
        >
          <nav className="container mx-auto px-4 w-full py-8 flex flex-col justify-between ml-[33%]">
            <div className="py-16 border-b border-gray-300">
              <p className="text-lg font-thin">Address</p>
              <h3 className="text-4xl">
                Etla 9, Col. Hipódromo, 06100, Ciudad de México, México
              </h3>
            </div>

            <div className="py-16 border-b border-gray-300">
              <p className="text-lg font-thin">Phone</p>
              <h3 className="text-4xl pt-2">+ 52 1 552 202 1414</h3>
            </div>

            <div className="flex flex-col py-16 border-b border-gray-300">
              <p className="text-lg font-thin">Email</p>
              <h3 className="text-4xl pt-2">cath@tlgm.mx</h3>
              <h3 className="text-4xl">enrique@tlgm.mx</h3>
            </div>

            <div className="py-16">
              <p className="text-lg font-thin">Connect</p>
              <div className="flex flex-row gap-4 mb-4 pt-2">
                <Link href="https://www.linkedin.com/company/92421640/admin/dashboard/">
                  <Image
                    src="/imgs/linkedin-logo.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="invert brightness-0"
                  />
                </Link>
                <Link href="https://www.instagram.com/telegramaaudiovisual/">
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
      <h3
        className="text-xs text-white text-center"
        style={{ backgroundColor: "#1d2020" }}
      >
        © 2023 Telegrama Audiovisual SA de CV
      </h3>
    </div>
  );
};

export default Footer;
