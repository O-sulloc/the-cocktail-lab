'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import chooseContent from '../content/choose.json';
import { motion, useMotionValue, animate } from 'framer-motion';
import Button from '@/components/common/Button/Button'
import UnderlineButton from './common/Button/UnderlineButton';
import { useInView } from 'react-intersection-observer';

function AnimatedNumber({ value, duration = 1.2 }: { value: string | number, duration?: number }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const numericValue = typeof value === 'string' ? parseInt(value.replace(/[^\d]/g, '')) : value;
      const controls = animate(count, numericValue, {
        duration,
        onUpdate: v => setDisplay(Math.floor(v)),
      });
      return controls.stop;
    }
  }, [inView, value, count, duration]);

  return <span ref={ref}>{display.toLocaleString()}</span>;
}

const Choose = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const steps = chooseContent.steps;
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Best practice: scroll event로 중앙에 가장 가까운 섹션만 active
  useEffect(() => {
    const onScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let minDiff = Infinity;
      let newActive = 0;
      sectionRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const diff = Math.abs(viewportCenter - sectionCenter);
          if (diff < minDiff) {
            minDiff = diff;
            newActive = idx;
          }
        }
      });
      setActiveIdx(newActive);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative py-28 min-h-[80vh] bg-[#f9fffa] rounded-[80px]">
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-16 lg:mb-24 xl:mb-32 mt-8 md:mt-12 lg:mt-20 xl:mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Caviar Dreams' }}
        >
          Why Choose Us
        </motion.h2>
        
        {/* 필요하다면 부제목/설명 추가 가능 */}
        {/* <p className="text-lg text-[#075539] max-w-2xl mx-auto">
        </p> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 데스크탑/태블릿: scroll-telling */}
        <div className="hidden md:flex flex-row gap-16 min-h-[80vh]">
          {/* left: sticky image, always vertically centered */}
          <div className="md:w-1/2 flex justify-center items-start">
            <div className="sticky top-60 flex items-center justify-center h-[60vh] w-full max-w-[100%]">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={steps[activeIdx].image}
                  alt={steps[activeIdx].title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
          {/* right: text scroll area */}
          <div className="md:w-1/2 flex flex-col gap-32">
            {steps.map((step, idx) => (
              <div
                ref={el => { sectionRefs.current[idx] = el; }}
                key={step.title + (step.subtitle || '')}
                className="min-h-[60vh] flex flex-col justify-center"
              >
                {/* 숫자 카운터 + 서브타이틀 */}
                {step.subtitle ? (
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl md:text-6xl font-extrabold text-[#0B6B4D]" style={{ fontFamily: 'Caviar Dreams' }}>
                      <AnimatedNumber value={step.title} />
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-[#0B6B4D]" style={{ fontFamily: 'Caviar Dreams' }}>{step.subtitle}</span>
                  </div>
                ) : (
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0B6B4D] mb-4" style={{ fontFamily: 'Caviar Dreams' }}>{step.title}</h3>
                )}
                <p className="text-lg text-[#075539] mb-6">{step.description}</p>
                {/* 2번째(리뷰) 섹션에만 UnderlineButton 추가 */}
                {idx === 1 && (
                  <UnderlineButton href="/testimonials">Read All Testimonials</UnderlineButton>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 모바일: 세로 스택 */}
        <div className="flex flex-col gap-12 md:hidden">
          {steps.map((step, idx) => (
            <div key={step.title + (step.subtitle || '')} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              {step.subtitle ? (
                <div className="flex items-end gap-2 mt-4">
                  <span className="text-4xl font-extrabold text-[#0B6B4D]" style={{ fontFamily: 'Caviar Dreams' }}>
                    <AnimatedNumber value={step.title} />
                  </span>
                  <span className="text-lg font-bold text-[#0B6B4D]" style={{ fontFamily: 'Caviar Dreams' }}>{step.subtitle}</span>
                </div>
              ) : (
                <h3 className="text-xl font-bold text-[#0B6B4D] mt-4" style={{ fontFamily: 'Caviar Dreams' }}>{step.title}</h3>
              )}
              <p className="text-base text-[#075539] mt-4">{step.description}</p>
              {/* 2번째(리뷰) 섹션에만 UnderlineButton 추가*/}
              {idx === 1 && (
                <UnderlineButton href="/testimonials" className='mt-4'>
                  Read All Testimonials
                </UnderlineButton>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-20">
      <Button 
        text='Learn More'
        href=''
        variant='secondary'
        size='sm'
      />
      </div>
    </section>
  );
};

export default Choose;
