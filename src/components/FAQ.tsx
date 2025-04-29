'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoAdd } from 'react-icons/io5';
import faqContent from '../content/faq.json';
import { FAQItem, FAQData } from '../types/faq';

interface FAQItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  onToggle: () => void;
}

const FAQItemComponent = ({ question, answer, isActive, onToggle }: FAQItemProps) => {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800 transition-colors duration-200"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isActive ? 45 : 0 }}
          transition={{
            type: "tween",
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1] // Material Design's standard easing
          }}
          className="flex-shrink-0 ml-4 text-white"
        >
          <IoAdd className="w-6 h-6" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key={`content-${question}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                  mass: 1
                },
                opacity: { 
                  duration: 0.2,
                  ease: "easeOut" 
                }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                  mass: 1
                },
                opacity: { 
                  duration: 0.2, 
                  ease: "easeIn" 
                }
              }
            }}
          >
            <div className="px-6 pb-4 text-zinc-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [activeItems, setActiveItems] = useState<Record<string, boolean>>({});
  const { items } = faqContent as FAQData;

  const toggleAccordion = (key: string) => {
    setActiveItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const leftColumnItems = items.slice(0, Math.ceil(items.length / 2));
  const rightColumnItems = items.slice(Math.ceil(items.length / 2));

  const FAQColumn = ({ items, columnIndex }: { items: FAQItem[], columnIndex: number }) => (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const itemKey = `${columnIndex}-${idx}`;
        return (
          <FAQItemComponent
            key={itemKey}
            question={item.question}
            answer={item.answer}
            isActive={!!activeItems[itemKey]}
            onToggle={() => toggleAccordion(itemKey)}
          />
        );
      })}
    </div>
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Caviar Dreams' }}
        >
          FAQ
        </motion.h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FAQColumn items={leftColumnItems} columnIndex={0} />
        <FAQColumn items={rightColumnItems} columnIndex={1} />
      </div>
    </section>
  );
};

export default FAQ; 