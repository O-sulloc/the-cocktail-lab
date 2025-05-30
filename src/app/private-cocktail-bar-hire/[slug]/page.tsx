'use client';

import React, { useEffect } from 'react';
import gsap from "gsap";
import Hero from '@/components/layout/Hero';
import serviceContent from '@/content/private-services.json';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import 'photoswipe/dist/photoswipe.css';
import Reviews from '@/components/Reviews';
import RelatedBars from '@/components/RelatedBars';
import FAQ from '@/components/FAQ';
import SplitText from "gsap/SplitText";

const PrivateDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);
  const service = serviceContent.services.find((s) => s.slug === slug);

  useEffect(() => {
    gsap.registerPlugin(SplitText) 

    // split elements with the class "split" into words and characters
    const split = SplitText.create(".split", { type: "words" });

    // now animate the characters in a staggered fashion
    gsap.from(split.words, {
      duration: 1, 
      y: 100,       // animate from 100px below
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: 0.05 // 0.05 seconds between each
    });
  }, []);

  if (!service) return <div>Service not found</div>;

  return (
    <>
      <Hero
        title={service?.title}
        backgroundImage={service?.thumb}
      />

      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center text-white" style={{ fontFamily: 'Caviar Dreams' }}>
        {service.subtitle}
      </h2>

      {/* description */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-x-6 my-40">
        <p 
          className="split text-2xl md:text-3xl lg:text-5xl font-bold text-center text-white"
          style={{ lineHeight: '1.3' }}
        >
          {service.description}
        </p>
      </section>
      

      {/* Action Images Masonry Grid with PhotoSwipe Gallery */}
      {service.action_images && service.action_images.length > 0 && (
        <section className="max-w-6xl mx-auto py-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center" style={{ fontFamily: 'Caviar Dreams' }}>
            See Our {service.title} In Action
          </h2>
          <Gallery>
            <Masonry
              breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {service.action_images.map((img, idx) => (
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
                        alt={`${service.title} in action ${idx + 1}`}
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

      {/* Reviews */}
      <Reviews />

      {/* Related Bars */}
      <RelatedBars />

      {/* FAQ */}
      <FAQ />
    </>
  )
}

export default PrivateDetailPage;