'use client';

import barsContent from '@/content/bars.json';
import type { Bar, SizeSpec } from '@/types/bars';
import React, { useMemo, useRef, useState } from 'react';
import BarCard from '@/components/BarCard';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import UnderlineButton from '@/components/common/UnderlineButton';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Badge from '@/components/common/Badge';


export default function BarDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  
  const bar: Bar | undefined = barsContent.bars.find((b) => b.slug === slug);

  // Helper functions for BarCard props
  const [activeTooltip, setActiveTooltip] = React.useState<string | null>(null);
  const isMounted = typeof window !== 'undefined';
  const isHoverDevice = () => {
    if (!isMounted) return true;
    return window.matchMedia('(hover: hover)').matches;
  };
  const getTooltipId = (barName: string) => `bar-${barName}`;

  // Related bars: pick 3 random bars (excluding current), but only once per slug
  const relatedBars = useMemo(() => {
    return barsContent.bars
      .filter((b) => b.slug !== slug)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }, [slug]);

  // Size Section with cm/inch toggle
  const [unit, setUnit] = useState<'cm' | 'inch'>('cm');

  if (!bar) return <div className="text-center py-20 text-2xl">Bar not found</div>;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bar.image}
            alt={bar.alt}
            fill
            className="object-cover object-center"
            style={{ maxHeight: '600px' }}
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          {/* 로고/아이콘 등 필요시 추가 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg" style={{ fontFamily: 'Caviar Dreams' }}>
            {bar.name}
          </h1>
        </div>
      </section>

      {/* About + 이미지 슬라이더 좌우 배치 */}
      <section className="max-w-7xl mx-auto py-16 px-4 flex flex-col md:flex-row gap-12 items-center">
        {/* 왼쪽: 이미지 슬라이더 */}
        {bar.images && bar.images.length > 0 && (
          <div className="w-full md:w-1/2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="bar-detail-swiper"
            >
              {bar.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`Bar image ${idx + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        
        {/* 오른쪽: About */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Badge */}
          <Badge className="static relative inline-block my-2">
            {bar.inventory} Bars Available
          </Badge>
          <h2 className="text-2xl font-bold mb-4 text-white">{bar.name}</h2>
          <p className="text-lg mb-4 text-gray-200">{bar.desc}</p>

          {/* Size Section with cm/inch toggle */}
          <div className="mb-4">
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-2xl font-bold text-white mr-4">Size</h3>
              {/* Toggle */}
              <div className="flex items-center gap-2">
                <span className={unit === 'cm' ? 'font-bold text-white' : 'text-gray-400'}>cm</span>
                <button
                  type="button"
                  className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${unit === 'inch' ? 'bg-[#0f3923]' : 'bg-gray-200'}`}
                  onClick={() => setUnit(unit === 'cm' ? 'inch' : 'cm')}
                  aria-label="Toggle cm/inch"
                >
                  <span
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${unit === 'inch' ? 'translate-x-4' : ''}`}
                  />
                </button>
                <span className={unit === 'inch' ? 'font-bold text-white' : 'text-gray-400'}>inch</span>
              </div>
            </div>
            {/* 3칸 사이즈 표 */}
            <div className="flex gap-8 justify-center mb-2">
              {(['L', 'W', 'H'] as (keyof SizeSpec)[]).map((key) => (
                <div key={key} className="text-center min-w-[70px]">
                  <div className="text-2xl font-bold text-white">{bar.spec?.[unit]?.[key]}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-8 justify-center">
              {(['L', 'W', 'H'] as (keyof SizeSpec)[]).map((key) => (
                <div key={key} className="text-center min-w-[70px]">
                  <div className="text-sm text-gray-400 mt-1">{key === 'L' ? 'Length' : key === 'W' ? 'Width' : 'Height'}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      {/* <section className="w-full py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {bar.spec && Object.entries(bar.spec).map(([key, value], idx) => {
            // Label formatting: snake_case → Title Case
            const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            // Value formatting for additional_fee
            const displayValue = key === 'additional_fee' ? `£${value}` : value;
            return (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-white">{displayValue}</div>
                <div className="text-sm text-gray-400 mt-1">{label}</div>
              </div>
            );
          })}
        </div>
      </section> */}

      {/* Reviews */}
      <Reviews />

      {/* FAQ */}
      <FAQ />

      {/* Related Products */}
      {relatedBars.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Related Products</h2>
            <UnderlineButton href="/bars">View All</UnderlineButton>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {relatedBars.map((relatedBar) => (
              <BarCard
                key={relatedBar.id}
                bar={relatedBar}
                isHoverDevice={isHoverDevice}
                activeTooltip={activeTooltip}
                setActiveTooltip={setActiveTooltip}
                getTooltipId={getTooltipId}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
