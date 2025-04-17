'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Bars = () => {
  const bars = [
    { 
      id: 1, 
      name: "Barcycle",
      image: '/bar-1.webp', 
      alt: 'Luxury Bar Setup 1', 
      link: '/bars/luxury-bar-1' 
    },
    { 
      id: 2, 
      name: "Italian Marble",
      image: '/bar-2.webp', 
      alt: 'Luxury Bar Setup 2', 
      link: '/bars/luxury-bar-2' 
    },
    { 
      id: 3, 
      name: "LED Bar",
      image: '/bar-3.webp', 
      alt: 'Luxury Bar Setup 3', 
      link: '/bars/luxury-bar-3' 
    },
    { 
      id: 4, 
      name: "Classic Wood",
      image: '/bar-4.webp', 
      alt: 'Luxury Bar Setup 4', 
      link: '/bars/luxury-bar-4' 
    },
    { 
      id: 5, 
      name: "Modern Glass",
      image: '/bar-5.webp', 
      alt: 'Luxury Bar Setup 5', 
      link: '/bars/luxury-bar-5' 
    },
    { 
      id: 6, 
      name: "Rustic Oak",
      image: '/bar-6.webp', 
      alt: 'Luxury Bar Setup 6', 
      link: '/bars/luxury-bar-6' 
    },
    { 
      id: 7, 
      name: "Rustic Oak",
      image: '/bar-7.webp', 
      alt: 'Luxury Bar Setup 7', 
      link: '/bars/luxury-bar-7' 
    },
    { 
      id: 8, 
      name: "Rustic Oak",
      image: '/bar-8.webp', 
      alt: 'Luxury Bar Setup 8', 
      link: '/bars/luxury-bar-8' 
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isSetup, setIsSetup] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add event listeners using event delegation
    const handleMouseEvents = (e: Event) => {
      const target = e.target as HTMLElement;
      const isCarouselItem = target.closest('.carousel-item');
      if (isCarouselItem) {
        setIsPaused(e.type === 'mouseenter');
      }
    };

    container.addEventListener('mouseenter', handleMouseEvents, true);
    container.addEventListener('mouseleave', handleMouseEvents, true);
    
    const items = Array.from(container.querySelectorAll<HTMLDivElement>('.carousel-item'));
    if (items.length === 0) return;
    
    const cloneItems = () => {
      const containerWidth = container.offsetWidth;
      let widthSum = 0;
      const itemsToClone: HTMLDivElement[] = [];
      
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        widthSum += item.offsetWidth + parseInt(window.getComputedStyle(item).marginRight);
        itemsToClone.push(item);
        if (widthSum > containerWidth) break;
      }
      
      itemsToClone.forEach(item => {
        const clone = item.cloneNode(true) as HTMLDivElement;
        container.appendChild(clone);
      });
      
      setIsSetup(true);
    };
    
    cloneItems();
    
    const speed = 1.5;
    
    const animate = () => {
      if (isPaused) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      positionRef.current -= speed;
      
      if (-positionRef.current >= items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight)) {
        positionRef.current += items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight);
        const firstItem = container.children[0] as HTMLDivElement;
        container.appendChild(firstItem);
      }
      
      container.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    if (isSetup) {
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mouseenter', handleMouseEvents, true);
      container.removeEventListener('mouseleave', handleMouseEvents, true);
    };
  }, [isSetup, isPaused]);

  return (
    <section className="bg-[#0A0A0B] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12" style={{ fontFamily: 'Caviar Dreams' }}>
          Our Mobile Bars
        </h2>
        
        <div className="relative overflow-visible py-4">
          <div 
            ref={containerRef}
            className="flex transition-none" 
            style={{ willChange: 'transform' }}
          >
            {bars.map((bar, index) => (
              <Link 
                href={bar.link} 
                key={`${bar.id}-${index}`}
                className="relative w-[200px] h-[280px] md:w-[300px] md:h-[400px] flex-shrink-0 mr-4 md:mr-8 carousel-item group pt-4"
              >
                <div className="absolute inset-0 top-4 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 ease-out transform group-hover:-translate-y-8 group-hover:scale-110 group-hover:z-20 group-hover:shadow-[0_35px_35px_-15px_rgba(0,0,0,0.7)]">
                  <Image
                    src={bar.image}
                    alt={bar.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 200px, 300px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <p className="text-white text-center font-semibold text-xl mb-2">{bar.name}</p>
                      <p className="text-white/80 text-center text-sm">View Details</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bars;