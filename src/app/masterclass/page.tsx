'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import masterclassData from '@/content/masterclass.json'
import stepData from '@/content/masterclass-step.json'
import carAnimation from '@/lottie/car.json'
import mixAnimation from '@/lottie/mix.json'
import cocktailAnimation from '@/lottie/cocktail.json'
import cartAnimation from '@/lottie/cart.json'
import teamAnimation from '@/lottie/team.json'
import sessionAnimation from '@/lottie/session.json'
import 'photoswipe/dist/photoswipe.css';
import masterclassImages from '@/content/masterclassImages'
import Button from '@/components/common/Button/Button'
import ArrowButton from '@/components/common/Button/ArrowButton'
import HorizontalScrollCards from '@/components/HorizontalScrollCards';
import WhiteCard from '@/components/WhiteCard';
import Lottie from 'react-lottie-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cocktails = [
  { name: 'Mojito', image: '/masterclass/masterclass-cocktail-1.jpg', desc: 'A refreshing blend of rum, mint, lime, and soda.' },
  { name: 'Pina Colada', image: '/masterclass/masterclass-cocktail-2.jpg', desc: 'A tropical mix of rum, coconut, and pineapple.' },
  { name: 'Negroni', image: '/masterclass/masterclass-cocktail-3.jpg', desc: 'A classic Italian cocktail with gin, Campari, and vermouth.' },
  { name: 'Espresso Martini', image: '/masterclass/masterclass-cocktail-6.jpg', desc: 'A modern favorite with vodka, coffee liqueur, and espresso.' },
];

const lottieMap: { [key: string]: object } = {
  car: carAnimation,
  mix: mixAnimation,
  cocktail: cocktailAnimation,
  cart: cartAnimation,
  team: teamAnimation,
  session: sessionAnimation,
}

export default function Masterclass() {

  return(
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center">
        {/* 배경 이미지 */}
        <Image
          src="/masterclass/the-cocktail-lab-masterclass-in-action-5.jpg"
          alt="Cocktail Lab Masterclass Hero"
          fill
          className="object-cover"
          priority
        />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/60" />
        {/* 텍스트 컨텐츠 */}
        <div className="relative z-10 text-center w-full px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4" style={{ fontFamily: 'Caviar Dreams' }}>
            Cocktail Making Classes
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
            Group Mixologist Masterclass Hire. We Come to You
          </p>
        </div>
      </section>

      {/* Masterclass Introduction Section */}
      <section className="w-full flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white" style={{ fontFamily: 'Caviar Dreams' }}>
          Shake, Stir, and Sip!
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-300">
          Learn to Shake It like a Pro!
        </h3>
        <p className="text-lg text-gray-400 text-center px-4 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mb-12">
          Whether you&apos;re planning a team-building activity, a unique celebration, or just a fun get-together with friends, The Cocktail Lab brings the bar to you — turning any occasion into a hands-on, creative, and unforgettable cocktail-making experience that&apos;s perfect for bonding, celebrating, or simply shaking things up.
        </p>
        {/* Responsive 6-card grid with Lottie animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          {masterclassData.introduce.map((item) => (
            <WhiteCard
              key={item.title}
              title={item.title}
              description={item.desc}
            >
              {lottieMap[item.image] && (
                <Lottie animationData={lottieMap[item.image]} loop play />
              )}
            </WhiteCard>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full flex flex-col items-center justify-center py-20">
        <div className="w-full max-w-6xl mt-12">
          <HorizontalScrollCards 
            items={stepData.step.map((item, idx) => ({
              ...item,
              animationKey: ['car','mix','cocktail','cart','team','session'][idx % 6],
            }))}
            withTitle={true}
            title="How It Works"
          />
        </div>
      </section>

      {/* See in action */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center" style={{ fontFamily: 'Caviar Dreams' }}>
          See Our Masterclass In Action
        </h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {masterclassImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={img.original}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Clients Favorite Section */}
      <section className="w-full flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white" style={{ fontFamily: 'Caviar Dreams' }}>
          Client Favorites
        </h2>
        <p className="text-lg text-gray-400 text-center px-4 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mb-8">
          At The Cocktail Lab, we believe that the best cocktails are the ones you enjoy the most. Our expert mixologists are here to guide you through the creation of your favorite drinks, from classic concoctions like the Mojito and Pina Coladas to modern marvels like the Espresso Martini and Bramble Cocktails.
        </p>

        {/* Cards - 2 columns, big, with animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-4xl md:max-w-6xl mx-auto px-4 sm:px-0">
          {cocktails.map((cocktail, idx) => (
            <motion.div
              key={cocktail.name}
              className={`bg-white rounded-3xl shadow-xl flex items-center p-8 md:p-10 ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
            >
              <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 mr-8 bg-gray-200 flex items-center justify-center">
                <Image 
                  src={cocktail.image} 
                  alt={cocktail.name} 
                  width={128}
                  height={128}
                  className="object-cover w-full h-full" 
                />
              </div>
              <div>
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + 0.1 * idx }}
                >
                  {cocktail.name}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + 0.1 * idx }}
                >
                  {cocktail.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-20">
          <ArrowButton
            text='Book Masterclass'
            href=''
          />
          <Button 
            text='Find more recipes'
            href=''
            variant='secondary'
          />
        </div>
      </section>
    </>
  )
}
