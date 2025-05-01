'use client';

import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from '../common/SocialIcons';

// Navigation links (matching Navbar)
const navLinks = [
  { name: 'About Us', href: '#about' },
  { 
    name: 'Services', 
    href: '#services',
    dropdownItems: [
      { name: 'Private Events', href: '#private-events' },
      { name: 'Corporate Events', href: '#corporate-events' },
      { name: 'Cocktail Masterclass', href: '#cocktail-masterclass' },
    ]
  },
  { name: 'Testimonial', href: '#testimonial' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo */}
          <div className="w-[200px]">
            <Link href="/" className="flex items-center">
              <div className="relative h-28 w-48">
                <Image
                  src="/logo.svg"
                  alt="The Cocktail Lab"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Social Media Icons */}
          <SocialIcons />

          {/* Hygiene Certificate */}
          <div className="w-[200px]">
            <div className="relative h-36 w-60">
              <Image
                src="/rating.svg"
                alt="Food Hygiene Rating"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Center Section - Navigation */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <h3 className="text-lg font-bold text-white mb-4">{link.name}</h3>
                {link.dropdownItems && (
                  <ul className="space-y-2">
                    {link.dropdownItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-400 hover:text-emerald-600 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} The Cocktail Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 