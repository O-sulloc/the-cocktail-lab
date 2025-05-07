'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import barsContent from '@/content/bars.json';
import type { Bar } from '@/types/bars';
import InfoIcon from '@/components/common/Tooltip/InfoIcon';
import Button from '@/components/common/Button';

const { bars } = barsContent;

// Bar Card Component
interface BarCardProps {
  bar: Bar;
  isHoverDevice: () => boolean;
  activeTooltip: string | null;
  setActiveTooltip: (id: string | null) => void;
  getTooltipId: (name: string) => string;
}

const BarCard = ({ bar, isHoverDevice, activeTooltip, setActiveTooltip, getTooltipId }: BarCardProps) => (
  <div className="w-full">
    <a
      key={bar.id}
      href={bar.link}
      className="group relative bg-transparent transition-transform duration-300 hover:scale-[1.03] block"
    >
      {/* Image Container with rounded corners */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl mb-6">
        {/* Badge */}
        <span className="absolute top-4 left-4 z-10 px-4 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
          {bar.inventory} Bars Available
        </span>
        {/* Arrow Icon (top-right, on hover) */}
        <span className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-white group-hover:text-emerald-600 transition-colors duration-300"
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path 
              d="M5 12H19M19 12L12 5M19 12L12 19" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <Image
          src={bar.image}
          alt={bar.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />
      </div>
    </a>
    {/* Title and InfoIcon in the same row, outside the <a> */}
    <div className="flex items-center gap-2 mt-2">
      <h3 className="relative text-2xl font-bold text-white group-hover:text-emerald-600 transition-colors duration-300">
        <span className="relative">
          {bar.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
        </span>
      </h3>
      {bar.info && (
        <InfoIcon
          id={getTooltipId(bar.name)}
          isHoverDevice={isHoverDevice}
          activeTooltip={activeTooltip}
          setActiveTooltip={setActiveTooltip}
          message="Extra charge as they require a special logistic and extra person"
        />
      )}
    </div>
  </div>
);

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
      <section className="w-full flex flex-col items-center justify-center py-20 mt-24 md:mt-32">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 text-white" style={{ fontFamily: 'Caviar Dreams' }}>
          Our Bars
        </h1>
        <p className="text-lg md:text-xl text-gray-400 text-center px-4 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
          Explore our premium mobile bars, designed to elevate every event with expert mixology and timeless style.
        </p>
        <Button
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

