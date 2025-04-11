'use client';

import { motion } from 'framer-motion';

const Options = () => {
  const getIconForFeature = (feature: string) => {
    switch (feature) {
      case 'Mixologist':
        return (
          <svg className="w-6 h-6 text-[#E2CBFF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/>
          </svg>
        );
      case 'Bar':
        return (
          <svg className="w-6 h-6 text-[#E2CBFF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/>
          </svg>
        );
      case 'Cocktail Equipment':
        return (
          <svg className="w-6 h-6 text-[#E2CBFF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"/>
          </svg>
        );
      case 'Glassware':
        return (
          <svg className="w-6 h-6 text-[#E2CBFF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/>
          </svg>
        );
      case 'Transport & Collection':
        return (
          <svg className="w-6 h-6 text-[#E2CBFF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        );
      case 'Spirits & Ingredients':
        return (
          <svg className="w-6 h-6 text-[#E2CBFF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"/>
          </svg>
        );
      case 'Shopping List':
        return (
          <svg className="w-6 h-6 text-[#E2CBFF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
          </svg>
        );
      case 'Staff Travel':
        return (
          <svg className="w-6 h-6 text-[#E2CBFF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 1c-2.4 0-4.52 1.21-5.78 3.05.01-.01.01-.02.02-.03C9.84 4 9.42 4 9 4c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V22c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22v-3.08c3.39-.49 6-3.39 6-6.92 0-3.87-3.13-7-7-7zM4.5 19c-.83 0-1.5-.67-1.5-1.5S3.67 16 4.5 16s1.5.67 1.5 1.5S5.33 19 4.5 19zM3 13V8h6c0 1.96.81 3.73 2.11 5H3zm10.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2.5-6c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-[#E2CBFF]" fill="currentColor" viewBox="0 0 24 24">
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
    <section className="bg-[#0A0A0B] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Cocktail & Mocktail Packages
          </motion.h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative bg-[#12141D] rounded-2xl p-8 ${
                plan.isRecommended ? 'ring-1 ring-[#E2CBFF]' : ''
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <span className="bg-[#393BB2] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-semibold text-violet-500 mb-4">
                {plan.name}
              </h3>
              
              <div className="text-base text-white mb-8">
                {plan.description}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center text-white text-base">
                    <div className="mr-4 flex-shrink-0">
                      {getIconForFeature(feature)}
                    </div>
                    {feature}
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