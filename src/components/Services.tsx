'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      title: 'Private Bar Hire',
      image: '/private-hire-cocktails-img-3.jpeg',
      href: '/services/corporate'
    },
    {
      title: 'Corporate Bar Hire',
      image: '/corporate-bar-hire-cocktails-img-1.jpeg',
      href: '/services/private'
    },
    {
      title: 'Exhibition cocktail Bar Hire',
      image: '/exhibition-the-cocktail-lab-img-2-1.jpeg',
      href: '/services/wedding'
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-16" style={{ fontFamily: 'Caviar Dreams' }}
          >
            We Cater For
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.href} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 group">
                    <h3 className="relative text-2xl font-bold text-white group-hover:text-emerald-600 transition-colors duration-300">
                      <span className="relative">
                        {service.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
                      </span>
                    </h3>
                    <div className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="text-white group-hover:text-emerald-600 transition-colors duration-300"
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path 
                          d="M5 12H19M19 12L12 5M19 12L12 19" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 