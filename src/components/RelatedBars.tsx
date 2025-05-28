'use client';

import barsContent from '@/content/bars.json';
import React, { useMemo } from 'react';
import BarCard from '@/components/BarCard';
import UnderlineButton from '@/components/common/Button/UnderlineButton';

interface RelatedBarsProps {
  currentSlug?: string;
  title?: string;
  viewAllHref?: string;
}

export default function RelatedBars({ 
  currentSlug,
  title = "Related Products",
  viewAllHref = "/bars"
}: RelatedBarsProps) {
  const [activeTooltip, setActiveTooltip] = React.useState<string | null>(null);
  const isMounted = typeof window !== 'undefined';
  const isHoverDevice = () => {
    if (!isMounted) return true;
    return window.matchMedia('(hover: hover)').matches;
  };
  const getTooltipId = (barName: string) => `bar-${barName}`;

  const relatedBars = useMemo(() => {
    const filteredBars = currentSlug 
      ? barsContent.bars.filter((b) => b.slug !== currentSlug)
      : barsContent.bars;
      
    return filteredBars
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }, [currentSlug]);

  if (relatedBars.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Caviar Dreams' }}>{title}</h2>
        <UnderlineButton href={viewAllHref}>View All</UnderlineButton>
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
  );
} 