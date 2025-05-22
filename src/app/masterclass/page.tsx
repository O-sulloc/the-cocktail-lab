'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import masterclassData from '@/content/masterclass.json'
import carAnimation from '@/lottie/car.json'
import mixAnimation from '@/lottie/mix.json'
import cocktailAnimation from '@/lottie/cocktail.json'
import cartAnimation from '@/lottie/cart.json'
import teamAnimation from '@/lottie/team.json'
import sessionAnimation from '@/lottie/session.json'
import Masonry from 'react-masonry-css';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import masterclassImages from '@/content/masterclassImages'
import Button from '@/components/common/Button/Button'
import ArrowButton from '@/components/common/Button/ArrowButton'
import Lottie from 'react-lottie-player'

const cocktails = [
  { name: 'Mojito', image: '/masterclass/masterclass-cocktail-1.jpg', desc: 'A refreshing blend of rum, mint, lime, and soda.' },
  { name: 'Pina Colada', image: '/masterclass/masterclass-cocktail-2.jpg', desc: 'A tropical mix of rum, coconut, and pineapple.' },
  { name: 'Negroni', image: '/masterclass/masterclass-cocktail-3.jpg', desc: 'A classic Italian cocktail with gin, Campari, and vermouth.' },
  { name: 'Espresso Martini', image: '/masterclass/masterclass-cocktail-6.jpg', desc: 'A modern favorite with vodka, coffee liqueur, and espresso.' },
];


// Types
interface CardStep {
  id: number
  title: string
  description: string
  color: string
}

// Data
const cocktailSteps: CardStep[] = [
  {
    id: 1,
    title: "Cocktail Origins",
    description: "A brief history on the cocktails of your choice",
    color: "#FE4A49"
  },
  {
    id: 2,
    title: "Behind the Bar Basics",
    description: "Introduction to bar tools + tips and manners behind the bar",
    color: "#2AB7CA"
  },
  {
    id: 3,
    title: "Live Demo by the Pros",
    description: "Watch our mixologists create each cocktail step-by-step so you&apos;re ready to shake it yourself.",
    color: "#F86624"
  },
  {
    id: 4,
    title: "Your Turn to Shake",
    description: "Now it&apos;s your time to shine — every guest will create their own cocktail using premium ingredients and equipment.",
    color: "#7E6B8F"
  },
  {
    id: 5,
    title: "Let the Games Begin!",
    description: "Competition time! It&apos;s optional, but did we mention there&apos;s a prize at stake?",
    color: "#4CB944"
  }
]

// Card Component
const Card = ({ step }: { step: CardStep }) => (
  <div 
    className="card min-w-full sm:min-w-[350px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[400px] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between relative transform transition-transform hover:scale-[1.02] mb-6 last:mb-0 md:mb-0 md:mx-8"
    style={{ 
      backgroundColor: step.color
    }}
    role="article"
    aria-label={`Step ${step.id}: ${step.title}`}
  >
    <div className="card-content relative z-10">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">{step.title}</h3>
      <p className="text-base sm:text-lg md:text-xl text-white/90">{step.description}</p>
    </div>
    <div className="step-number absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white/20">
      {String(step.id).padStart(2, '0')}
    </div>
  </div>
)

const lottieMap: { [key: string]: any } = {
  car: carAnimation,
  mix: mixAnimation,
  cocktail: cocktailAnimation,
  cart: cartAnimation,
  team: teamAnimation,
  session: sessionAnimation,
}
export default function Masterclass() {
  const INITIAL_COUNT = 9;
  const LOAD_COUNT = 9;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_COUNT, masterclassImages.length));
  };

  return(
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center mt-24 md:mt-48">
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
          {masterclassData.introduce.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 flex flex-col items-center justify-start min-h-[220px] md:min-h-[260px] lg:min-h-[300px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-24 h-24 mb-6">
                <Lottie
                  key={item.title} // 또는 key={i}
                  animationData={lottieMap[item.image]}
                  loop={true}
                  play
                />
              </div>
              <h4 className="text-xl md:text-2xl font-extrabold text-[#184C36] text-center mb-3">{item.title}</h4>
              <p className="text-black text-center text-base md:text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}

      {/* See in action */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center" style={{ fontFamily: 'Caviar Dreams' }}>
          See Our Masterclass In Action
        </h2>
        <Gallery>
          <Masonry
            breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {masterclassImages.slice(0, visibleCount).map((img, idx) => (
              <div key={idx} className="mb-6">
                <Item
                  original={img.original}
                  thumbnail={img.original}
                  width="1920"
                  height="1280"
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref as unknown as React.MutableRefObject<HTMLImageElement>}
                      onClick={open}
                      src={img.original}
                      alt={img.alt}
                      className="rounded-lg shadow object-cover w-full cursor-pointer"
                      style={{ maxWidth: '100%', height: 'auto' }}
                      loading="lazy"
                    />
                  )}
                </Item>
              </div>
            ))}
          </Masonry>
        </Gallery>
        {visibleCount < masterclassImages.length && (
          <div className="flex justify-center mt-8">
            <Button 
              text='See More'
              onClick={handleSeeMore}
              variant='secondary'
              size='sm'
            />
          </div>
        )}
      </section>

      {/* Clients Favorite Section */}
      <section className="w-full flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white" style={{ fontFamily: 'Caviar Dreams' }}>
          Client Favorites
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-300">
          text
        </h3>
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
