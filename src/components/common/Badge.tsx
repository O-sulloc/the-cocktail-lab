import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => (
  <span
    className={
      `absolute top-4 left-4 z-10 px-4 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white ${className}`
    }
  >
    {children}
  </span>
);

export default Badge; 