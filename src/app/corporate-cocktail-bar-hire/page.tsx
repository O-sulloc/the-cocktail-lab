'use client';

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "lenis";
import Brands from "@/components/Brands";
import FAQ from "@/components/FAQ";
import RelatedBars from "@/components/RelatedBars";
import Lottie from "react-lottie-player";
import WhiteCard from "@/components/WhiteCard";
import cocktail from "@/lottie/cocktail.json";
import mix from "@/lottie/mix.json";
import booking from "@/lottie/booking.json";
import reply from "@/lottie/reply.json";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import UnderlineButton from "@/components/common/Button/UnderlineButton";

const Corporate = () => {
  const features = [
    {
      title: "Delicious Cocktails",
      lottie: cocktail,
    },
    {
      title: "Energetic Bar Staff",
      lottie: mix,
    },
    {
      title: "Easy Booking Process",
      lottie: booking,
    },
    {
      title: "Fast Replies",
      lottie: reply,
    },
  ];

  const services = [
    {
      title: "Cocktail Bar Hire",
      desc: "Whether it's a product launch, staff party, client evening or team building you want to organise, a mobile cocktail bar from The Cocktail Lab is the perfect addition. Pick your cocktails, choose a bar, and let us provide a unique event, professionally and seamlessly run.",
      image: "/choose-the-cocktail-lab-3.jpg",
      href: "/bars"
    },
    {
      title: "Masterclasses",
      desc: "Need a corporate event or team building activity with a difference? Get The Cocktail Lab and our fun, dynamic mixologists to join you at a venue of your choice. All you need do is choose your cocktails, we'll bring the ingredients, tools and know how to provide a creative and entertaining evening including a bit of healthy competition!",
      image: "/masterclass/the-cocktail-lab-masterclass-in-action-5.jpg",
      href: "/masterclass"
    },
    {
      title: "Mocktail Bar Hire",
      desc: "With all the flair and flavour of our cocktails less the alcohol our mocktail bars promise to add the wow factor to any occasion whilst catering to all requirements and ages. Create your theme and tailor your drinks accordingly, choose from our extensive list of delicious mocktails.",
      image: "/choose-the-cocktail-lab-3.jpg",
      href: "#"
    }
  ];

  const loyalty = [
    {
      img: "/masterclass/masterclass-cocktail-1.jpg",
      percent: "10% OFF",
      desc: "when book 6 packages",
    },
    {
      img: "/masterclass/masterclass-cocktail-2.jpg",
      percent: "15% OFF",
      desc: "when book 12 packages",
    },
    {
      img: "/masterclass/masterclass-cocktail-3.jpg",
      percent: "20% OFF",
      desc: "when book 18 packages",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Text reveal animation
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((char) => {
      const bg = char.getAttribute('data-bg-color') || '#cccccc';
      const fg = char.getAttribute('data-fg-color') || '#000000';

      const text = new SplitType(char as HTMLElement, { types: 'words' });

      gsap.fromTo(
        text.words,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: 'top 20%',
            end: 'top 00%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse',
            pin: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative w-full min-h-[50vh] flex items-center justify-center">
        <Image
          src="/exhibition-the-cocktail-lab-img-2-1.jpeg"
          alt="Cocktail Lab Masterclass Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center w-full px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4" style={{ fontFamily: 'Caviar Dreams' }}>
            Corporate Events
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
            Corporate Bar Hire & Mixologist Hire
          </p>
        </div>
      </section>

      {/* type animation section */}
      <section className="flex items-center justify-center my-20 md:my-40">
        <TypeAnimation 
          sequence={[
            'Perfect for team building',
            1000,
            'Perfect for product launches',
            1000,
            'Perfect for staff parties',
            1000,
            'Perfect for client evening',
            1000,
            'Perfect for exhibitions',
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl md:text-4xl lg:text-6xl font-bold text-white"
          repeat={Infinity}
          style={{ fontFamily: 'Caviar Dreams' }}
        />
      </section>
      
      {/* features card section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {features.map((item) => (
              <WhiteCard
                key={item.title}
                title={item.title}
              >
                <Lottie animationData={item.lottie} loop play />
              </WhiteCard>
            ))}
          </div>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-6 min-h-screen">
        <p 
          className="reveal-type text-2xl md:text-3xl lg:text-5xl font-bold text-center"
          data-bg-color="#000000"
          data-fg-color="#cccccc"
        >
          Bring something different to your next corporate event. Whether you want to create an evening to relax and socialise amongst colleagues with our corporate bar hire as our talented mixologists engage and entertain or you want to add some dynamite with a flair mixologist, we&apos;ll see to it all whilst mixing and muddling your chosen cocktails to perfection.
        </p>
      </section>

      {/* services card section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-30">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white" style={{ fontFamily: 'Caviar Dreams' }}>
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-[40px] shadow-lg flex-1 max-w-md flex flex-col overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              style={{ minWidth: 0 }}
            >
              {/* 이미지 */}
              <div className="w-full h-56 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover w-full h-full rounded-t-[40px]"
                  style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                />
              </div>
              {/* 텍스트 */}
              <div className="flex flex-col flex-1 p-8">
                <h3 className="font-bold text-2xl md:text-3xl mb-4 text-black">{service.title}</h3>
                <p className="text-gray-700 text-lg mb-4 flex-1">{service.desc}</p>
                <UnderlineButton href={service.href}>Read more</UnderlineButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* loyalty section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-50">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white" style={{ fontFamily: 'Caviar Dreams' }}>
          Loyalty Programme
        </h2>
        <p className="text-lg text-gray-300 text-center px-4 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mb-8">
          Keep the fun going on a regular basis, join our new loyalty programme and receive fantastic discounts against block bookings. <br /> Make the most of your time and money!
        </p>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-8 gap-6">
          {loyalty.map((c, idx) => (
            <div
              key={c.percent}
              className="relative bg-white rounded-2xl shadow-xl flex flex-row items-center p-8 md:p-10 w-full md:w-[31%]"
            >
              {/* 왼쪽 오목 효과 */}
              {/* 오른쪽 오목 효과 */}
              {/* <div className="w-12 h-12 bg-black rounded-full absolute top-1/2 -translate-y-1/2 left-0 -ml-6 z-10"></div>
              <div className="w-12 h-12 bg-black rounded-full absolute top-1/2 -translate-y-1/2 right-0 -mr-6 z-10"></div> */}

              {/* 위/아래 오목 효과 */}
              <div className="w-12 h-12 bg-black rounded-full absolute left-1/2 -translate-x-1/3 top-0 -mt-6 z-10"></div>
              <div className="w-12 h-12 bg-black rounded-full absolute left-1/2 -translate-x-1/3 bottom-0 -mb-6 z-10"></div>

              {/* 왼쪽 이미지 */}
              <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-200 flex items-center justify-center mr-6">
                <Image 
                  src={c.img} 
                  alt={c.percent} 
                  width={128}
                  height={128}
                  className="object-cover w-full h-full" 
                />
              </div>
              {/* 오른쪽 텍스트 */}
              <div className="flex-1 flex flex-col justify-center items-start text-left">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + 0.1 * idx }}
                >
                  {c.percent}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + 0.1 * idx }}
                >
                  {c.desc}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Brands />

      {/* corporate reviews */}

      <RelatedBars />

      <FAQ />
    </div>
  );
};

export default Corporate;