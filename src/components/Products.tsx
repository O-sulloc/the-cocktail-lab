'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import productsContent from '../content/products.json';

const Products = () => {
  return (
    <section className="bg-[#0A0A0B] py-24">
      {/* Top section with main heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {/* Large showcase section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#12141D] rounded-3xl p-12">
          {/* Left content */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              {productsContent.hero.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 mb-8"
            >
              {productsContent.hero.description}
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="#discover"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600/10 text-blue-500 hover:bg-blue-600/20 transition-colors duration-200"
            >
              Discover
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>

          {/* Right content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full h-[400px] lg:h-[450px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/cocktail-making.jpeg"
              alt="Cocktail making experience"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#12141D] via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products; 