'use client';

import barsContent from '@/content/bars.json';
import type { Bar, SizeSpec } from '@/types/bars';
import React, { useState } from 'react';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Badge from '@/components/common/Badge';
import Masonry from 'react-masonry-css';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import ArrowButton from '@/components/common/Button/ArrowButton';
import RelatedBars from '@/components/RelatedBars';


export default function BarDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  
  const bar: Bar | undefined = barsContent.bars.find((b) => b.slug === slug);

  // Size Section with cm/inch toggle
  const [unit, setUnit] = useState<'cm' | 'inch'>('cm');
  const [quantity, setQuantity] = useState<number>(1);

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
          <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg" style={{ fontFamily: 'Caviar Dreams' }}>
            {bar.name}
          </h1>
        </div>
      </section>

      {/* About + 이미지 슬라이더 좌우 배치 */}
      <section className="max-w-7xl mx-auto py-16 px-4 flex flex-col md:flex-row gap-12">
        {/* 왼쪽: 이미지 슬라이더 */}
        {bar.detail_images && bar.detail_images.length > 0 && (
          <div className="w-full md:w-1/2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="bar-detail-swiper"
            >
              {bar.detail_images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`Bar image ${idx + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        
        {/* 오른쪽: About */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Badge */}
          <Badge className="static relative inline-block my-2">
            {bar.inventory} Bars Available
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-white">{bar.name}</h2>
          <p className="text-lg mb-4 text-gray-200">{bar.desc}</p>

          {/* Size Section with cm/inch toggle */}
          <div className="mb-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-4 justify-center md:justify-start w-full">
              <span className="text-3xl font-bold text-white">Size</span>
              {/* Toggle */}
              <div className="flex items-center gap-2">
                <span className={unit === 'cm' ? 'font-bold text-white' : 'text-gray-400'}>cm</span>
                <button
                  type="button"
                  className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${unit === 'inch' ? 'bg-[#0f3923]' : 'bg-gray-200'}`}
                  onClick={() => setUnit(unit === 'cm' ? 'inch' : 'cm')}
                  aria-label="Toggle cm/inch"
                >
                  <span
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${unit === 'inch' ? 'translate-x-4' : ''}`}
                  />
                </button>
                <span className={unit === 'inch' ? 'font-bold text-white' : 'text-gray-400'}>inch</span>
              </div>
            </div>
            {/* 3칸 사이즈 표 */}
            <div className="flex gap-8 justify-center md:justify-start mb-2 w-full">
              {(['L', 'W', 'H'] as (keyof SizeSpec)[]).map((key) => (
                <div key={key} className="text-center min-w-[70px]">
                  <div className="text-2xl font-bold text-white">
                    {bar.spec?.[unit]?.[key]}
                    <span className="text-base text-gray-400 ml-1">{unit}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-8 justify-center md:justify-start w-full">
              {(['L', 'W', 'H'] as (keyof SizeSpec)[]).map((key) => (
                <div key={key} className="text-center min-w-[70px]">
                  <div className="text-sm text-gray-400 mt-1">{key === 'L' ? 'Length' : key === 'W' ? 'Width' : 'Height'}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Extend Your Bar Section */}
          {bar.inventory && bar.inventory > 1 && (
            <div className="mt-8 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-2xl font-bold text-white mb-4 block">Extend Your Bar</span>
              {/* Quantity 조절 UI 및 로직 */}
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start w-full">
                <span className="text-lg text-gray-200">Quantity:</span>
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  disabled={quantity <= 1}
                  className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                >
                  -
                </button>
                <span className="text-lg font-semibold text-white w-5 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => Math.min(bar.inventory || 1, prev + 1))}
                  disabled={quantity >= (bar.inventory || 1)}
                  className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                >
                  +
                </button>
              </div>
              <div className="flex gap-8 justify-center md:justify-start w-full mb-2">
                <div className="text-center min-w-[100px]">
                  <div className="text-2xl font-bold text-white">
                    {bar.spec?.[unit]?.L ? bar.spec[unit]!.L * quantity : 'N/A'}
                    <span className="text-base text-gray-400 ml-1">{unit}</span>
                  </div>
                </div>
                <div className="text-center min-w-[100px]">
                  <div className="text-2xl font-bold text-white">
                    {quantity} bar
                  </div>
                </div>
              </div>
              <div className="flex gap-8 justify-center md:justify-start w-full mb-0">
                <div className="text-center min-w-[100px]">
                  <div className="text-sm text-gray-400 mt-1">Total Length</div>
                </div>
                <div className="text-center min-w-[100px]">
                  <div className="text-sm text-gray-400 mt-1">Utilize</div>
                </div>
              </div>
            </div>
          )}

          {/* Color Section */}
          {bar.spec?.colour && (
            <div className="mt-8 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-2xl font-bold text-white mb-2 block">LED colour</span>
              <span className="text-lg text-gray-200">{bar.spec.colour}</span>
            </div>
          )}

          {/* Additional Fee Section */}
          {typeof bar.spec?.additional_fee === 'number' && (
            <div className="mt-8 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-2xl font-bold text-white mb-2 block">Additional Fee</span>
              <span className="text-lg text-gray-200">
                £{bar.spec.additional_fee}
                <span className="text-base text-gray-400 ml-1">per bar</span>
              </span>
              <span className="text-sm text-gray-400 mt-1">
                This bar requires special logistics and an extra person for setup.
              </span>
            </div>
          )}

          {/* Button */}
          <div className="mt-8">
            <ArrowButton 
              text="Get a Quote"
              href="/contact"
            />
          </div>
        </div>
      </section>

      {/* Action Images Masonry Grid with PhotoSwipe Gallery */}
      {bar.action_images && bar.action_images.length > 0 && (
        <section className="max-w-6xl mx-auto py-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center" style={{ fontFamily: 'Caviar Dreams' }}>
            See Our Bars In Action
          </h2>
          <Gallery>
            <Masonry
              breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {bar.action_images.map((img, idx) => (
                <div key={idx} className="mb-6">
                  <Item
                    original={img}
                    thumbnail={img}
                    width="1200"
                    height="900"
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref as unknown as React.MutableRefObject<HTMLImageElement>}
                        onClick={open}
                        src={img}
                        alt={`${bar.name} in action ${idx + 1}`}
                        className="rounded-lg shadow object-cover w-full cursor-pointer"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        width={1200}
                        height={900}
                        loading="lazy"
                      />
                    )}
                  </Item>
                </div>
              ))}
            </Masonry>
          </Gallery>
        </section>
      )}

      {/* How big */}
      {bar.inventory && bar.inventory >= 4 && (
        <section className="max-w-5xl mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Caviar Dreams' }}>How Big Is Your Event?</h2>
          <p className="mb-4 text-lg text-gray-100">
            We offer White Mobile Cocktail Bar Hire in four LED colours, 150cm-wide, perfect for{' '}
            <a href="#" className="underline">weddings</a>, <a href="#" className="underline">corporate events</a>, or <a href="#" className="underline">private parties</a>.
            Stylish and versatile, these bars are easy to set up and can be customised to match your event&apos;s theme.
            <a href="#" className="underline ml-1">Contact us</a> to secure these bars for your upcoming event!
          </p>
          <p className="mb-8 text-base text-gray-100">
            1 bar serves 100 people, 4 bars serve 400+. We can source more bars and set up separate areas for larger events, with a larger guest list.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {bar.how_big && (
              <Image
                src={bar.how_big}
                alt="How big is your event"
                width={900}
                height={280}
                className="rounded-lg shadow"
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            )}
          </div>
        </section>
      )}

      {/* Reviews */}
      <Reviews />

      {/* FAQ */}
      <FAQ />

      {/* Related Products */}
      <RelatedBars currentSlug={slug} />
    </main>
  );
}
