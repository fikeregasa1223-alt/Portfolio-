import React from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  scale?: number;
  once?: boolean;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  direction = 'up',
  distance = 30,
  scale = 0.97,
  once = true,
  threshold = 0.08,
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    freezeOnceVisible: once,
  });

  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
      default:
        return { y: distance, x: 0 };
    }
  };

  const offset = getInitialOffset();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale, ...offset }}
      animate={isVisible ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale, ...offset }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
  threshold?: number;
}> = ({ children, className = '', staggerDelay = 0.1, delay = 0, threshold = 0.1 }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    freezeOnceVisible: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  scale?: number;
}> = ({ children, className = '', direction = 'up', distance = 20, scale = 0.96 }) => {
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale, ...getOffset() },
        show: {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
