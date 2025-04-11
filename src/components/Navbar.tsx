'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Customers', href: '#customers' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-[#0A0A0B]/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {isScrolled || isMobileMenuOpen ? (
                <span className="text-2xl font-bold text-white">
                  The Cocktail Lab
                </span>
              ) : (
                <div className="relative h-24 w-48 mt-10">
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
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center">
            <Link
              href="/signup"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform duration-300 hover:scale-105 group"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_2rem_-0.5rem_#E2CBFF]">
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

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 },
        }}
        className="md:hidden bg-[#0A0A0B]"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-gray-200 hover:text-white hover:bg-gray-800 rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/signup"
              className="relative inline-flex w-full h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform duration-300 hover:scale-105 group"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_2rem_-0.5rem_#E2CBFF]">
                Get Started
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
    
  );
};

export default Navbar; 