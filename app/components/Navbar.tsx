import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    { name: 'Equipment', href: '#' },
    { name: 'How to it works', href: '#' },
    { name: 'Feature', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <nav className="bg-[#020617] text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
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

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-[#22c55e] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 border border-[#22c55e] text-[#22c55e] rounded-md text-sm font-semibold hover:bg-[#22c55e]/10 transition-all">
            Log in
          </button>
          <button className="px-6 py-2 bg-[#22c55e] text-white rounded-md text-sm font-semibold hover:bg-[#1da850] transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
