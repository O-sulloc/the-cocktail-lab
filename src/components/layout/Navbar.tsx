'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button2 from '../common/Button2';
import SocialIcons from '../common/SocialIcons';

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
      dropdownItems: [
        { name: 'Explore Bars', href: '/bars' },
        { name: 'Bar Hire', href: '/hire' },
        { name: 'Masterclass', href: '/masterclass' },
      ]
    },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'bg-[#0A0A0B]' 
            : isScrolled 
              ? 'bg-transparent backdrop-blur-md'
              : 'bg-transparent'
        }`}
        style={{ 
          top: '2.5rem', // Match Banner's height (40px = 2.5rem)
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="w-[200px] flex items-center justify-center h-20">
                {isScrolled || isMobileMenuOpen ? (
                    <span className="text-2xl font-bold text-white whitespace-nowrap" style={{ fontFamily: 'Caviar Dreams' }}>
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
                </div>
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
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="relative text-gray-300 text-[15px] font-bold group-hover:text-emerald-600 transition-colors duration-200"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-200" />
                        </span>
                      </Link>
                    ) : (
                      <span className="relative text-gray-300 text-[15px] font-bold group-hover:text-emerald-600 transition-colors duration-200 cursor-pointer">
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-200" />
                        </span>
                      </span>
                    )}
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

            {/* Social Media Icons - Desktop Only */}
            <div className="hidden md:flex items-center">
              <SocialIcons />
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Button2
                text="Get a Quote Now"
                href="contact"
              />
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
        className={`md:hidden fixed w-full transition-all duration-300 z-50 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          top: '6rem',
          height: isMobileMenuOpen ? 'auto' : 0,
          overflow: 'hidden',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(10, 10, 11, 0.95)'
        }}
      >
        <div className="px-2 pt-6 pb-3 space-y-4">
          {/* Navigation Links */}
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.href ? (
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-gray-200 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  {link.name}
                </Link>
              ) : (
                <span className="block px-3 py-2 text-gray-200 cursor-pointer">
                  {link.name}
                </span>
              )}
              {link.dropdownItems && (
                <div className="pl-4 mt-1 space-y-1">
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Social Icons - Mobile */}
          <div className="py-4 border-t border-gray-800">
            <SocialIcons 
              className="flex justify-center space-x-6"
              iconClassName="w-5 h-5"
            />
          </div>

          {/* CTA Button - Mobile */}
          <div className="pt-2">
            <Button2
              text="Get a Quote Now"
              href="contact"
              className='w-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 