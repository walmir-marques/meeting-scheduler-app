import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="flex items-center justify-between p-5">
      <Image
        src={logo}
        width={100}
        height={100}
        alt="My App Logo"
        className="w-[150px] md:w-[200px]"
      />
      <ul className="hidden md:flex gap-14 font-medium text-lg">
        <li className="hover:text-primary transition-all duration-300 cursor-pointer">
          Product
        </li>
        <li className="hover:text-primary transition-all duration-300 cursor-pointer">
          Pricing
        </li>
        <li className="hover:text-primary transition-all duration-300 cursor-pointer">
          Contact Us
        </li>
        <li className="hover:text-primary transition-all duration-300 cursor-pointer">
          About Us
        </li>
      </ul>
      <div>
        <Button variant="ghost">Login</Button>
        <Button>Get Started</Button>
      </div>
    </header>
  );
}

export default Header;
