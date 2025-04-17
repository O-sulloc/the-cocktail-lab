'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Brands = () => {
  const brands = [
    { name: 'phoenix', logo: '/logo/brand-1.svg' },
    { name: 'ankara', logo: '/logo/brand-2.svg' },
    { name: 'leafe', logo: '/logo/brand-3.svg' },
    { name: 'rise', logo: '/logo/brand-4.svg' },
    { name: 'swiss', logo: '/logo/brand-5.svg' },
    { name: 'italic', logo: '/logo/brand-6.svg' },
    { name: 'greenish', logo: '/logo/brand-7.svg' },
    { name: 'bristol', logo: '/logo/brand-8.svg' },
    { name: 'phoenix', logo: '/logo/brand-9.svg' },
    { name: 'ankara', logo: '/logo/brand-10.svg' },
    { name: 'leafe', logo: '/logo/brand-11.svg' },
    { name: 'rise', logo: '/logo/brand-12.svg' },
    { name: 'swiss', logo: '/logo/brand-13.svg' },
    { name: 'italic', logo: '/logo/brand-14.png' },
    { name: 'greenish', logo: '/logo/brand-15.png' },
    { name: 'bristol', logo: '/logo/brand-16.png' },
    { name: 'phoenix', logo: '/logo/brand-17.svg' },
    { name: 'ankara', logo: '/logo/brand-18.svg' },
    { name: 'leafe', logo: '/logo/brand-19.svg' },
    { name: 'rise', logo: '/logo/brand-20.svg' },
    { name: 'swiss', logo: '/logo/brand-21.svg' },
    { name: 'italic', logo: '/logo/brand-22.svg' },
    { name: 'greenish', logo: '/logo/brand-23.svg' },
    { name: 'bristol', logo: '/logo/brand-24.svg' },
    { name: 'phoenix', logo: '/logo/brand-25.svg' },
    { name: 'ankara', logo: '/logo/brand-26.svg' },
    
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="bg-[#0A0A0B] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl text-center text-white mb-16" style={{ fontFamily: 'Caviar Dreams' }}>
          We Recently Worked With
        </h3>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* First Row */}
          <div className="flex space-x-32 mb-16">
            <motion.div
              className="flex space-x-32"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <div key={`${brand.name}-${index}`} className="flex-shrink-0">
                  <div className="relative w-48 h-34">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain filter grayscale brightness-0 invert hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands; 