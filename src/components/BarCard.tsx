import React from 'react';
import Image from 'next/image';
import type { Bar } from '@/types/bars';
import InfoIcon from '@/components/common/Tooltip/InfoIcon';
import ArrowButton from './common/Button/ArrowButton';
import Link from 'next/link';

export interface BarCardProps {
  bar: Bar;
  isHoverDevice: () => boolean;
  activeTooltip: string | null;
  setActiveTooltip: (id: string | null) => void;
  getTooltipId: (name: string) => string;
}

const BarCard = ({ bar, isHoverDevice, activeTooltip, setActiveTooltip, getTooltipId }: BarCardProps) => (
  <div className="w-full relative group">
    {/* Image Container with rounded corners */}
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl mb-6">
      <Image
        src={bar.thumb}
        alt={bar.alt}
        fill
        className="object-contain transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />

      {/* ArrowButton - z-20으로 위에 오도록 */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
        <ArrowButton
          text="Check Availability"
          href={`/bars/${bar.slug}`}
          className="z-20"
        />
      </div>

      {/* 카드 전체를 덮는 투명 오버레이 링크 */}
      <Link
        href={`/bars/${bar.slug}`}
        className="absolute inset-0 z-10"
        aria-label={bar.name}
      />
    </div>
    {/* Title and InfoIcon in the same row, outside the <a> */}
    <div className="flex items-center gap-2 mt-2 justify-center">
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

export default BarCard; 