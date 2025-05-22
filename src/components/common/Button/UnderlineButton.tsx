import React from 'react';
import Link from 'next/link';

interface UnderlineButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const UnderlineButton: React.FC<UnderlineButtonProps> = ({ children, href, className = '' }) => (
  <Link href={href} className={`group inline-flex items-center gap-1 text-emerald-500 font-semibold relative ${className}`}>
    <span className="relative">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 group-hover:w-full transition-all duration-300" />
    </span>
    {/* 화살표 아이콘 */}
    <svg
      className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </Link>
);

export default UnderlineButton; 