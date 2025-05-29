import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WhiteCard from './WhiteCard';
import Lottie from 'react-lottie-player';
import { DesktopCardsProps } from '@/types/cards';

gsap.registerPlugin(ScrollTrigger);

const DesktopHorizontalScrollCards: React.FC<DesktopCardsProps> = ({
  items,
  className = '',
  cardWidth = 340,
  height = '500px',
  withTitle = false,
  title,
  lottieMap,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR-safe: do nothing on server
    if (!wrapRef.current || !trackRef.current) return;
    const sections = trackRef.current.querySelectorAll('.horizontal-scroll-card');
    if (!sections.length) return;

    // 가로 스크롤 효과 적용
    const ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: () => `top ${window.innerHeight * 0.35}px`,
          end: () => `+=${trackRef.current!.scrollWidth}`,
          scrub: 1,
          pin: true,
          snap: 1 / (sections.length - 1),
          markers: false,
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <section
      ref={wrapRef}
      className={`horizontal-scroll-wrap w-full overflow-hidden hidden md:block ${className}`}
      style={{ height }}
    >
      {withTitle && title && (
        <div className="w-full flex justify-center items-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white" style={{ fontFamily: 'Caviar Dreams' }}>
            {title}
          </h2>
        </div>
      )}
      <div
        ref={trackRef}
        className="horizontal-scroll-track flex h-full gap-8 px-8"
        style={{ width: `calc(${items.length} * ${typeof cardWidth === 'number' ? cardWidth + 'px' : cardWidth})` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="horizontal-scroll-card flex-shrink-0"
            style={{ width: cardWidth, minWidth: cardWidth, maxWidth: cardWidth }}
          >
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

export default DesktopHorizontalScrollCards; 