'use client';

import barsContent from '@/content/bars.json';
import type { Bar } from '@/types/bars';
import React, { useMemo } from 'react';
import BarCard from '@/components/BarCard';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import UnderlineButton from '@/components/common/UnderlineButton';
import Image from 'next/image';


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
          <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">{bar.name}</h1>
          <p className="mb-4 text-lg opacity-90">
            {bar.inventory} Bars Available
          </p>
          {bar.spec && bar.spec.additional_fee && (
            <p className="mb-4 text-lg opacity-90 text-rose-400">
              Additional Fee: £{bar.spec.additional_fee}
            </p>
          )}
          <a
            href="#contact" // 필요시 실제 예약/문의 링크로 변경
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-emerald-700 transition-colors"
          >
            Check Availability
          </a>
        </div>
      </section>

      {/* Specs Section */}
      <section className="w-full bg-black/80 py-8">
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
      </section>

      {/* 상세 설명, 기타 정보 등은 아래에 추가 가능 */}
      <section className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">About this Bar</h2>
        <p className="text-lg text-gray-200">{bar.desc}</p>
      </section>

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
