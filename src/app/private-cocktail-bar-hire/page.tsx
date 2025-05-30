'use client';

import Hero from '@/components/layout/Hero';
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import privateServices from '@/content/private-services.json';
import Reviews from '@/components/Reviews';
import RelatedBars from '@/components/RelatedBars';
import FAQ from '@/components/FAQ';

const Private = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText) 

    // split elements with the class "split" into words and characters
    const split = SplitText.create(".split", { type: "words" });

    // now animate the characters in a staggered fashion
    gsap.from(split.words, {
      duration: 1, 
      y: 100,       // animate from 100px below
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: 0.05 // 0.05 seconds between each
    });

  }, []);

  return (
    <section>
      <Hero 
        title="Private Cocktail Bar Hire"
        backgroundImage="/choose-the-cocktail-lab-3.jpg"
      />

      {/* type animation section */}
      <section className="flex items-center justify-center mt-20 md:mt-40">
        <TypeAnimation 
          sequence={[
            'Perfect for wedding',
            1000,
            'Perfect for birthday party',
            1000,
            'Perfect for baby shower',
            1000,
            'Perfect for house party',
            1000,
            'Perfect for christmas party',
            1000,
            'Perfect for halloween party',
            1000,
            'Perfect for 40th birthday party',
            1000,
            'Perfect for 50th birthday party',
            1000,
            'Perfect for science experiment',
            1000,
            'Perfect for every occasion',
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl md:text-4xl lg:text-6xl font-bold text-white"
          repeat={Infinity}
          style={{ fontFamily: 'Caviar Dreams' }}
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-x-6 my-30 md:my-60">
        <p 
          className="split text-2xl md:text-3xl lg:text-5xl font-bold text-center text-white"
          style={{ lineHeight: '1.3' }}
        >
          What better way to step up your party than with a cocktail bar. The Cocktail Lab provides exemplary private cocktail bar hire to every client. Whatever the occasion we&apos;d love to help you celebrate in style, from weddings and birthday parties, to house and garden parties and everything else in between.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {privateServices.services.map((service, index) => (
            <Link href={`/private-cocktail-bar-hire/${service.slug}`} key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
                  <Image
                    src={service.thumb}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 group">
                    <h3 className="relative text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-emerald-600 transition-colors duration-300">
                      <span className="relative">
                        {service.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
                      </span>
                    </h3>
                    <div className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="text-white group-hover:text-emerald-600 transition-colors duration-300 sm:w-6 sm:h-6"
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
      </section>

      <Reviews />

      <RelatedBars />

      <FAQ />
    </section>
  )
}

export default Private;
