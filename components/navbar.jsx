'use client'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-2 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo + Registration Number */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.png" // Update with your actual logo path
              alt="Kernel Greens Logo"
              width={30} // Adjust width as needed
              height={15} // Adjust height as needed
            />
          </Link>
          <span className="text-sm text-gray-100 tracking-wider font-semibold">
            BN2786979
          </span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="https://resolvo.vercel.app" className="bg-accent text-white px-4 py-2 rounded hover:bg-amber-900 transition">
            Report to Resolvo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
