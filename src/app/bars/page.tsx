'use client';

import React, { useState, useEffect } from 'react';
import barsContent from '@/content/bars.json';
import ArrowButton from '@/components/common/Button/ArrowButton';
import BarCard from '@/components/BarCard';

const { bars } = barsContent;

export default function BarsPage() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const isHoverDevice = () => {
    if (!isMounted) return true;
    return window.matchMedia('(hover: hover)').matches;
  };
  
  const getTooltipId = (barName: string) => `bar-${barName}`;
  
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

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center py-20 mt-24 md:mt-48">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 text-white" style={{ fontFamily: 'Caviar Dreams' }}>
          Explore Our Bars
        </h1>
        <p className="text-lg md:text-xl text-gray-400 text-center px-4 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
          Explore our premium mobile bars, designed to elevate every event with expert mixology and timeless style.
        </p>
        <ArrowButton
          text="Get a Quote"
          href="/contact"
          className="mt-8"
        />
      </section>

      {/* Product Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {bars.map((bar) => (
              <BarCard
                key={bar.id}
                bar={bar}
                isHoverDevice={isHoverDevice}
                activeTooltip={activeTooltip}
                setActiveTooltip={setActiveTooltip}
                getTooltipId={getTooltipId}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}