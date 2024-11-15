'use client';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/lib/utils';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious()!;
      setVisible(scrollYProgress.get() < 0.05 || direction < 0);
    }
  });

  // Function to handle smooth scroll
  const handleScroll = (event: React.MouseEvent, link: string) => {
    event.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.3 }}
        className={cn(
          'flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/[0.1] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4',
          className
        )}
        style={{
          backdropFilter: 'blur(16px) saturate(180%)',
          backgroundColor: 'rgba(17, 25, 40, 0.75)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.125)',
        }}
      >
        {navItems.map((navItem, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <a
              href={navItem.link}
              onClick={(e) => handleScroll(e, navItem.link)}
              className="relative flex items-center space-x-1 text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500 !cursor-pointer"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm">{navItem.name}</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
