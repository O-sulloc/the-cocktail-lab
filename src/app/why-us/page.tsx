'use client'

import Hero from "@/components/layout/Hero";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import whyUs from "@/content/why-us.json";
import { motion, useScroll, useTransform } from "framer-motion";
import Reviews from "@/components/Reviews";
import RelatedBars from "@/components/RelatedBars";
import FAQ from "@/components/FAQ";
import ImageCard from "@/components/common/ImageCard";
import { useInView } from 'react-intersection-observer';
import { useMotionValue, animate } from 'framer-motion';
import { useState } from 'react';
import Brands from "@/components/Brands";

function AnimatedNumber({ value, duration = 1.2 }: { value: string | number, duration?: number }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const numericValue = typeof value === 'string' ? parseInt(value.replace(/[^\d]/g, '')) : value;
      const controls = animate(count, numericValue, {
        duration,
        onUpdate: v => setDisplay(Math.floor(v)),
      });
      return controls.stop;
    }
  }, [inView, value, count, duration]);

  // Preserve original suffix (e.g. K, M, +, %)
  let suffix = '';
  if (typeof value === 'string') {
    const match = value.match(/([\d,.]+)(.*)/);
    if (match) suffix = match[2];
  }

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

const WhyUs = () => {
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

  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: videoRef, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const height = useTransform(scrollYProgress, [0, 1], ["60vh", "100vh"]);

  return (
    <section>
      <Hero
        title="Why Us"
        backgroundImage="/why-us/why-us-hero-3.jpg"
      />

      {/* type animation section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-x-6 my-20 md:my-40">
        <p 
          className="split text-2xl md:text-3xl lg:text-5xl font-bold text-center text-white"
          style={{ lineHeight: '1.3' }}
        >
          Discover why over a thousand people have chosen The Cocktail Lab for their events. We&apos;re the company that allows you to experience your event, not just host it. Whatever the scale of your event we aim to deliver the best mobile cocktail bar experience.
        </p>
      </section>

      {/* stat section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:my-20">
        <div className="w-full flex justify-center rounded-3xl shadow-xl px-6 md:px-16 py-12 flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-4xl font-extrabold text-white mb-2">
                  <AnimatedNumber value={stat.title} />
                </span>
                <span className="text-lg font-semibold text-gray-200 mb-1">{stat.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-based scaling video section */}
      <section className="w-full flex justify-center items-center">
        <motion.div
          ref={videoRef}
          className="relative w-full aspect-video overflow-hidden rounded-3xl shadow-2xl"
          style={{ scale, height }}
        >
          <video
            src="/why-us/why-us-video.mp4"
            controls
            playsInline
            poster="/why-us/why-us-hero-4.jpeg"
            className="w-full h-full object-cover rounded-3xl bg-black"
            autoPlay
            muted
            loop
          />
        </motion.div>
      </section>

      {/* first section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-30">
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-[500px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1200px] rounded-[40px] shadow-xl p-4 sm:p-8 md:p-12 items-center">
            <img
              src="/why-us/why-us-hero-4.jpeg"
              alt="Seamless Customer Experience Background"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-80 z-0 rounded-xl"
            />
            <div className="absolute inset-0 bg-black/30" /> {/* dark bg overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {whyUs.customerExperience.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {whyUs.customerExperience.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ImageCard
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* second section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-30">
        <div className="w-full flex justify-center">
          <div className="relative w-full rounded-[40px] shadow-xl p-4 sm:p-8 md:p-12 items-center">
            <img
              src="/why-us/why-us-hero-4.jpeg"
              alt="Seamless Customer Experience Background"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-80 z-0 rounded-xl"
            />
            <div className="absolute inset-0 bg-black/30" /> {/* dark bg overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {whyUs.team.title}
              </h2>
            </div>
          </div>
        </div>

        {/* 2-column grid for ImageCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {whyUs.team.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ImageCard
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* third section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-30">
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-[500px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1200px] rounded-[40px] shadow-xl p-4 sm:p-8 md:p-12 items-center">
            <img
              src="/why-us/why-us-hero-4.jpeg"
              alt="Seamless Customer Experience Background"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-80 z-0 rounded-xl"
            />
            <div className="absolute inset-0 bg-black/30" /> {/* dark bg overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {whyUs.customExperience.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {whyUs.customExperience.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ImageCard
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Reviews />
      <Brands />
      <RelatedBars />
      <FAQ />
    </section>

  )
}


export default WhyUs;