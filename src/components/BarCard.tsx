import React from 'react';
import Image from 'next/image';
import type { Bar } from '@/types/bars';
import InfoIcon from '@/components/common/Tooltip/InfoIcon';
import Button from '@/components/common/Button';

export interface BarCardProps {
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
      href={`/bars/${bar.slug}`}
      className="group relative bg-transparent transition-transform duration-300 hover:scale-[1.03] block"
    >
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

        {/* Button - Moved to bottom */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <Button
            text="Check Availability"
            href={`/bars/${bar.slug}`}
            className="z-20"
          />
        </div>
      </div>
    </a>
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