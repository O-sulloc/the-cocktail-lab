import React from 'react';
import WhiteCard from './WhiteCard';
import Lottie from 'react-lottie-player';
import { CardsProps } from '@/types/cards';

const MobileVerticalCards: React.FC<CardsProps> = ({
  items,
  className = '',
  withTitle = false,
  title,
  lottieMap,
}) => {
  return (
    <section className={`w-full block md:hidden ${className}`}>
      {withTitle && title && (
        <div className="w-full flex justify-center items-center mb-8">
          <h2 className="text-4xl font-extrabold text-center text-white" style={{ fontFamily: 'Caviar Dreams' }}>
            {title}
          </h2>
        </div>
      )}
      <div className="flex flex-col gap-6 px-4">
        {items.map((item) => (
          <div key={item.id} className="w-full">
            <WhiteCard
              title={item.title}
              description={item.description}
            >
              <Lottie animationData={lottieMap[item.animationKey]} loop play /> 
            </WhiteCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileVerticalCards; 