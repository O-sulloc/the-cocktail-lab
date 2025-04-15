'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Choose = () => {
  const steps = [
    {
      number: "1",
      title: "Experience 20 years of cocktails",
      description: "Professional & Experienced With over 20 years' experience across London's leading hotels and restaurants we provide a professional service from start to finish."
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
    <section className="bg-[#0A0A0B] max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sticky left section */}
        <motion.aside 
          className="lg:w-2/5 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] p-6 lg:p-8 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6" style={{ fontFamily: 'Caviar Dreams' }}>
            Why Choose Us
          </h2>
          <Image
            src="/cocktail-making.webp"
            alt="Cocktail making"
            width={400}
            height={240}
            className="rounded-2xl mt-6 lg:mt-8"
          />
          <Link 
            href="/experience"
            className="mt-6 lg:mt-8 px-4 lg:px-6 py-2.5 lg:py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors w-full max-w-md text-sm lg:text-base text-center"
          >
            The Cocktail Lab Experience
          </Link>
        </motion.aside>

        {/* Scrolling right section */}
        <div className="lg:w-3/5 p-6 lg:p-8">
          <div className="space-y-16 md:space-y-24 lg:space-y-32 py-16 md:py-24 lg:py-32">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                className="flex items-start gap-4 lg:gap-8 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-20%" }}
              >
                <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-emerald-600/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-600/20 blur-md" />
                  <span className="text-emerald-600 text-base lg:text-lg font-semibold relative z-10">{step.number}</span>
                </div>

                <div className="flex-1 bg-white/5 rounded-xl lg:rounded-2xl p-5 lg:p-8 backdrop-blur-sm border border-white/10 hover:border-emerald-600/50 transition-colors">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 lg:mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base lg:text-lg">{step.description}</p>
                  {step.number === "2" && (
                    <Link 
                      href="/testimonials"
                      className="group flex items-center mt-6 text-emerald-500 hover:text-emerald-400 transition-colors relative"
                    >
                      <span className="text-sm lg:text-base font-medium relative">
                        Read All Testimonials
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 group-hover:w-full transition-all duration-300" />
                      </span>
                      <svg 
                        className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13 7l5 5m0 0l-5 5m5-5H6" 
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose; 