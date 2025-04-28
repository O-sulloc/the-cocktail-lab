'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './common/Button';
import productsContent from '../content/products.json';
import { ProductsContent } from '../types/products';
import { ButtonProps } from '../types/index';

const Products = () => {
  const { hero } = productsContent as ProductsContent;

  return (
    <section className="py-24">
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
              {hero.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 mb-8"
            >
              {hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                href="contact"
                text="Get a Quote"
              />
            </motion.div>
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