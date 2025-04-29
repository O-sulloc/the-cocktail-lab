'use client';

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Reviews.css';
import Image from 'next/image';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import reviews data
import reviewsData from '../data/reviews.json';
import { ReviewsData } from '../types/reviews';

const Reviews = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  
  const { reviews } = reviewsData as ReviewsData;
  
  return (
    <section className="w-full py-16 bg-[#0A0A0B]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Caviar Dreams' }}>Our Clients Say</h2>
        
        <div className="reviews-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="reviews-swiper"
            onInit={(swiper) => {
              // @ts-expect-error - Swiper types don't properly handle dynamic navigation elements
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error - Swiper types don't properly handle dynamic navigation elements
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="reviews-slide">
                <div className="review-card">
                  <div className="flex flex-col md:flex-row">
                    {/* Image div - will be first on mobile (top) */}
                    <div className="review-image md:order-last md:w-1/2">
                      <Image 
                        src={review.picture} 
                        alt={`Review by ${review.name}`}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content div - will be second on mobile (bottom) */}
                    <div className="review-content p-8 md:order-first md:w-1/2">
                      <blockquote className="review-description">
                        {review.description}
                      </blockquote>
                      <p className="review-author mt-4">{review.name}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation arrows with refs */}
          <div ref={prevRef} className="swiper-button-prev"></div>
          <div ref={nextRef} className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;