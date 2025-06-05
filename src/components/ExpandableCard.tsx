import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ExpandableCardProps {
  title: string;
  desc: string;
  image: string;
  children?: React.ReactNode;
}

export default function ExpandableCard({ title, desc, image, children }: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg cursor-pointer w-full max-w-xl mx-auto mb-6"
      layout
      onClick={() => setExpanded((prev) => !prev)}
      initial={false}
      transition={{ layout: { duration: 0.3, type: "spring" } }}
    >
      <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-tr-2xl rounded-tl-2xl"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141D] via-transparent to-transparent opacity-60" />
      </div>
      <div className="p-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <span className="text-gray-400">{expanded ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="px-6 pb-6"
          >
            {/* description */}
            <div className="flex flex-col gap-2 my-4">
              <p className="text-gray-800 text-base lg:text-lg">{desc}</p>
            </div>

            {/* check list */}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 