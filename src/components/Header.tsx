import HeaderClient from "./HeaderClient";
import Link from "next/link";

export const Header = () => {
  return (
    <HeaderClient>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <img src="/imgs/Logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>
    </HeaderClient>
  );
};

export default Header;

