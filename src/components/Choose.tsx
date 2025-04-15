'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const Choose = () => {
  const steps = [
    {
      number: "1",
      title: "Experience 20 years of cocktails",
      description: "Professional & Experienced With over 20 years’ experience across London’s leading hotels and restaurants we provide a professional service from start to finish."
    },
    {
      number: "2",
      title: "Reliable ★★★★★ Over 205 reviews",
      description: "Our attention to detail, bespoke service, and expertise combine to ensure we help create a smooth-running event, serving world class cocktails for you and your guests to enjoy."
    },
    {
      number: "3",
      title: "Our Promise",
      description: "We always aim to add the wow factor. Our talented and friendly mixologists will make sure your guests are still talking about your event long after the drinks have stopped pouring."
    },
    {
      number: "4",
      title: "The Extra Touch",
      description: "The only cocktail bar hire company in London to offer a complementary cocktail tasting session, at our specially designed bar, to help you make those all-important menu choices."
    }
  ];

  return (
    <section className="bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Sticky left section */}
          <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-8">
            <div className="max-w-lg">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold text-white mb-6"
              >
                Why Choose Us
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-400 text-xl"
              >
                Experience the perfect blend of expertise, creativity, and service excellence
              </motion.p>
              <div className="mt-8">
                <Image
                  src="/cocktail-making.webp"
                  alt="Cocktail making"
                  width={500}
                  height={300}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Scrolling right section */}
          <div className="lg:w-1/2 p-8">
            <div className="space-y-32 py-32">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true, margin: "-20%" }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600/10 flex items-center justify-center">
                      <span className="text-emerald-600 text-lg font-semibold">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-semibold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose; 