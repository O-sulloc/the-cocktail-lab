'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Reviews.css';
import Image from 'next/image';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import reviewsData from '../content/reviews.json';
import { ReviewsData } from '../types/reviews';

const Reviews = () => {
  const { reviews } = reviewsData as ReviewsData;
  
  return (
    <section className="reviews-section">
      <h2 className="text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Caviar Dreams' }}>Our Clients Say</h2>
      <div className="reviews-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="review-card">
                <div className="review-content">
                  <blockquote className="review-description">{review.description}</blockquote>
                  <p className="review-author">{review.name}</p>
                </div>
                <div className="review-image">
                  <Image
                    src={review.picture}
                    alt={review.name}
                    width={500}
                    height={400}
                    className="review-img"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;