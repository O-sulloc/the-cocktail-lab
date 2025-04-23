'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from './common/Button';
import Button2 from './common/Button2';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Transform values for scaling and opacity based on scroll
  const scale = useTransform(scrollY, [0, 300], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const height = useTransform(scrollY, [0, 300], ['100vh', '80vh']);

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      {/* Video Background with scale animation */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale, opacity }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Caviar Dreams' }}
          >
            The Cocktail Lab
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-200 mb-8"
          >
            Cocktail Bar & Mixologist Hire
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-4"
          >
            <Button2
              href="/contact"
              text="Get a Quote Now"
            />

            <Button
              href="/contact"
              text="Get a Quote"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero; 