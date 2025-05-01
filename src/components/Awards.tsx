'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Awards = () => {
  return (
    <section className="py-20 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          {/* Winner Banner - Larger */}
          <div className="w-full md:w-[60%]">
            <Image
              src="/winner.png"
              alt="Winner Award"
              width={600}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Rating - Smaller */}
          <div className="w-full md:w-[40%]">
            <Image
              src="/rating.svg"
              alt="Hygiene Rating"
              width={400}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;