'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { 
      name: 'Services', 
      href: '#services',
      dropdownItems: [
        { name: 'Private Events', href: '#private-events' },
        { name: 'Corporate Events', href: '#corporate-events' },
        { name: 'Wedding Services', href: '#wedding-services' },
      ]
    },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-transparent backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                {isScrolled || isMobileMenuOpen ? (
                  <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Caviar Dreams' }}>
                    The Cocktail Lab
                  </span>
                ) : (
                  <div className="relative h-28 w-48 mt-10">
                    <Image
                      src="/logo.svg"
                      alt="The Cocktail Lab"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                )}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.dropdownItems && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center space-x-1 py-2">
                    <Link
                      href={link.href}
                      className="relative text-gray-300 text-[15px] font-semibold group-hover:text-emerald-600 transition-colors duration-200"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-200" />
                      </span>
                    </Link>
                    {link.dropdownItems && (
                      <svg
                        className={`w-4 h-4 transition-all duration-200 text-gray-300 group-hover:text-emerald-600 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                  {link.dropdownItems && activeDropdown === link.name && (
                    <div className="absolute left-0 mt-1 w-64 bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg border border-gray-800">
                      <div className="py-1">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2.5 text-[14px] text-gray-300 hover:text-emerald-600 transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/signup"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform duration-300 hover:scale-105 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#059669_0%,#065f46_50%,#059669_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_2rem_-0.5rem_#059669]">
                  Get a Quote Now
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed w-full bg-[#0A0A0B] transition-all duration-300 z-50 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          top: '5rem',
          height: isMobileMenuOpen ? 'auto' : 0,
          overflow: 'hidden',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(10, 10, 11, 0.95)'
        }}
      >
        <div className="px-2 pt-6 pb-3 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                className="block px-3 py-2 text-gray-200 hover:text-white hover:bg-gray-800 rounded-md"
              >
                {link.name}
              </Link>
              {link.dropdownItems && (
                <div className="pl-4">
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link
              href="/signup"
              className="relative inline-flex w-full h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform duration-300 hover:scale-105 group"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#059669_0%,#065f46_50%,#059669_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_2rem_-0.5rem_#059669]">
                Get a Quote Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 