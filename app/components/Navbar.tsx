"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Equipment', href: '#' },
    { name: 'How to it works', href: '#' },
    { name: 'Feature', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <nav className="bg-[#020617] text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="All Service Rental Logo"
                width={90}
                height={60}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-[#22c55e] transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 border border-[#22c55e] text-[#22c55e] rounded-md text-sm font-semibold hover:bg-[#22c55e]/10 transition-all">
            Log in
          </button>
          <button className="px-6 py-2 bg-[#22c55e] text-white rounded-md text-sm font-semibold hover:bg-[#1da850] transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out border-b border-gray-800 bg-[#020617] ${
          isMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="px-6 py-8 space-y-6">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium hover:text-[#22c55e] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-6 border-t border-gray-800 flex flex-col gap-4">
            <button className="w-full py-3 border border-[#22c55e] text-[#22c55e] rounded-md text-base font-semibold">
              Log in
            </button>
            <button className="w-full py-3 bg-[#22c55e] text-white rounded-md text-base font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
