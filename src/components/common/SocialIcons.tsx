'use client';

import { useState } from 'react';
import Link from 'next/link';
import { socialLinks } from '@/constants/social';

interface SocialIconsProps {
  className?: string;  // For container styling
  iconClassName?: string; // For individual icon styling
}

const SocialIcons = ({ 
  className = 'flex space-x-6',
  iconClassName = 'w-6 h-6'
}: SocialIconsProps) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <div className={className}>
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          className="text-gray-400 hover:text-emerald-600 transition-colors duration-200"
          onMouseEnter={() => setHoveredIcon(social.name)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {hoveredIcon === social.name ? (
            <social.FilledIcon className={iconClassName} />
          ) : (
            <social.OutlinedIcon className={iconClassName} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
