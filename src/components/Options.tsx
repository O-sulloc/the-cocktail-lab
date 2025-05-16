'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import InfoIcon from '@/components/common/Tooltip/InfoIcon';

const Options = () => {
  // State to track which tooltip is currently active (for mobile)
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // Set isMounted to true when component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Helper function to check if device supports hover
  const isHoverDevice = () => {
    if (!isMounted) return true; // Default to hover device during SSR
    return window.matchMedia('(hover: hover)').matches;
  };
  
  // Helper function to create unique tooltip ID
  const getTooltipId = (planName: string, feature: string) => `${planName}-${feature}`;
  
  // Handle clicking outside of tooltip (for mobile)
  useEffect(() => {
    if (!isMounted) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element)?.closest('.info-icon')) {
        setActiveTooltip(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMounted]);

  const getFeatureInfo = (feature: string) => {
    switch (feature) {
      case 'Mixologist':
        return "Professional, experienced bartenders trained in crafting perfect cocktails and providing excellent service";
      case 'Bar':
        return "Fully equipped mobile bar setup with professional-grade equipment and elegant design";
      case 'Cocktail Equipment':
        return "Complete set of professional tools including shakers, strainers, jiggers, and bar spoons";
      case 'Glassware':
        return "High-quality glassware suited for different types of cocktails, from martini to highball glasses";
      case 'Transport & Collection':
        return "We handle all logistics including delivery, setup, and collection after the event";
      case 'Spirits & Ingredients':
        return "Premium spirits, fresh ingredients, garnishes, and ice - everything needed for your chosen cocktails";
      case 'Shopping List':
        return "Detailed list of required ingredients, quantities, and recommended brands for your selected cocktails";
      case 'Staff Travel':
        return "Our staff will travel to your venue with all necessary equipment";
      default:
        return "";
    }
  };

  const getIconForFeature = (feature: string) => {
    switch (feature) {
      case 'Mixologist':
        return (
          <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        );
      case 'Bar':
        return (
          <div className="w-6 h-6">
            <Image
              src="/bar-hire-icon.svg"
              alt="Bar icon"
              width={24}
              height={24}
              className="w-full h-full text-emerald-600"
              style={{ 
                filter: 'invert(47%) sepia(82%) saturate(1643%) hue-rotate(129deg) brightness(96%) contrast(101%)',
                transform: 'scale(1.5)',  // Make the icon slightly larger
                fontWeight: 'bold'  // This might help if the SVG uses text
              }}
            />
          </div>
        );
      case 'Cocktail Equipment':
        return (
          <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 14c0 1.3.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3v8zm2-6h2v3H5V8zm17 1l-3-1.01V2h-5v6l-3 1.01V22h11V9zm-6-5h1v1h-1V4zm-3 6.44l3-1.01V5h1v4.43l3 1.01V20h-7v-9.56z"/>
          </svg>
        );
      case 'Glassware':
        return (
          <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/>
          </svg>
        );
      case 'Transport & Collection':
        return (
          <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        );
      case 'Spirits & Ingredients':
        return (
          <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        );
      case 'Shopping List':
        return (
          <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
          </svg>
        );
      case 'Staff Travel':
        return (
          <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 1c-2.4 0-4.52 1.21-5.78 3.05.01-.01.01-.02.02-.03C9.84 4 9.42 4 9 4c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V22c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22v-3.08c3.39-.49 6-3.39 6-6.92 0-3.87-3.13-7-7-7zM4.5 19c-.83 0-1.5-.67-1.5-1.5S3.67 16 4.5 16s1.5.67 1.5 1.5S5.33 19 4.5 19zM3 13V8h6c0 1.96.81 3.73 2.11 5H3zm10.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2.5-6c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        );
    }
  };

  const plans = [
    {
      name: 'Full Package',
      description: "Our recommended stress-free option! EVERYTHING you need for the perfect party provided, the mixologists, spirits, ingredients, glassware, and bar. All that's left for you to do is choose your cocktails and enjoy yourself. Not sure which cocktails to choose? Let us help you decide with a free cocktail tasting session.",
      features: [
        'Mixologist',
        'Bar',
        'Cocktail Equipment',
        'Glassware',
        'Transport & Collection',
        'Spirits & Ingredients'
      ],
      isRecommended: true
    },
    {
      name: 'Dry Hire',
      description: "Happy to do a bit of shopping? Dry hire is the answer. We'll provide an outstanding mixologist, bar, glassware, and a shopping list of ingredients based on your cocktail choices. The client will need to provide spirits, ingredients and ice.",
      features: [
        'Mixologist',
        'Bar',
        'Cocktail Equipment',
        'Glassware',
        'Transport & Collection',
        'Shopping List'
      ],
      isRecommended: false
    },
    {
      name: 'Mixologist & Shopping List',
      description: "Working to a tight budget? Let us provide a detailed shopping list of ingredients based on your cocktail choices, our professional mixologists will arrive prepared at your event with cocktail equipment (shakers, jiggers & pourers).",
      features: [
        'Mixologist',
        'Cocktail Equipment',
        'Staff Travel',
        'Shopping List'
      ],
      isRecommended: false
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Caviar Dreams' }}
          >
            Our Cocktail & Mocktail Packages
          </motion.h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative bg-[#12141D] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 ${
                plan.isRecommended ? 'ring-1 ring-emerald-600' : ''
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <span className="bg-emerald-600 text-white px-3 py-0.5 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                    Recommended
                  </span>
                </div>
              )}
              
              <h3 className="text-xl sm:text-2xl font-semibold text-emerald-600 mb-3 md:mb-4">
                {plan.name}
              </h3>
              
              <div className="text-sm sm:text-base text-white mb-6 md:mb-8 min-h-[120px] md:min-h-[200px]">
                {plan.description}
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 md:mb-8">
                {plan.features.map((feature) => (
                  <div key={getTooltipId(plan.name, feature)} className="flex items-center text-white text-sm sm:text-base">
                    <div className="mr-3 sm:mr-4 flex-shrink-0">
                      {getIconForFeature(feature)}
                    </div>
                    <span>{feature}</span>
                    {/* Info icon with tooltip */}
                    <div className="relative ml-2 group">
                      <InfoIcon
                        id={getTooltipId(plan.name, feature)}
                        isHoverDevice={isHoverDevice}
                        activeTooltip={activeTooltip}
                        setActiveTooltip={setActiveTooltip}
                        message={getFeatureInfo(feature)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Options; 