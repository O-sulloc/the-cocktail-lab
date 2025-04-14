'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Steps = () => {
  const steps = [
    {
      title: '1. Get a Free Quote',
      description: 'Book with The Cocktail Lab & take the first step to your perfect event.',
      image: '/contact-cocktail-labs-for-bar-hire-services-4.webp'
    },
    {
      title: '2. The Cocktail Lab Arrives',
      description: 'Our experienced team will provide the cocktails and service to impress your guests.',
      image: '/cocktail-bar-mixologist-hire-hiw-4.webp'
    },
    {
      title: '3. Relax',
      description: "You're in good hands, enjoy the party and make some memories to last a lifetime.",
      image: '/bespoke-cocktail-event-bar-hire-hiw-4.webp'
    }
  ];

  return (
    <section className="bg-[#0A0A0B] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title and Main Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Getting Started
          </motion.h2>
        </div>

        {/* Steps Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
              className="flex flex-col bg-[#12141D] rounded-2xl overflow-hidden group h-full"
            >
              {/* step Content */}
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Image Section */}
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141D] via-transparent to-transparent opacity-80" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;