'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 650,
  className = '',
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (isVisible) {
      return {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
        transition: baseTransition,
        willChange: 'auto',
      };
    }

    switch (animation) {
      case 'fade-up':
        return {
          opacity: 0,
          transform: 'translate3d(0, 32px, 0)',
          transition: baseTransition,
          willChange: 'opacity, transform',
        };
      case 'fade-down':
        return {
          opacity: 0,
          transform: 'translate3d(0, -32px, 0)',
          transition: baseTransition,
          willChange: 'opacity, transform',
        };
      case 'fade-in':
        return {
          opacity: 0,
          transform: 'translate3d(0, 0, 0)',
          transition: baseTransition,
          willChange: 'opacity, transform',
        };
      case 'scale-up':
        return {
          opacity: 0,
          transform: 'translate3d(0, 20px, 0) scale(0.92)',
          transition: baseTransition,
          willChange: 'opacity, transform',
        };
      case 'slide-left':
        return {
          opacity: 0,
          transform: 'translate3d(36px, 0, 0)',
          transition: baseTransition,
          willChange: 'opacity, transform',
        };
      case 'slide-right':
        return {
          opacity: 0,
          transform: 'translate3d(-36px, 0, 0)',
          transition: baseTransition,
          willChange: 'opacity, transform',
        };
      default:
        return {
          opacity: 0,
          transform: 'translate3d(0, 32px, 0)',
          transition: baseTransition,
          willChange: 'opacity, transform',
        };
    }
  };

  return (
    <div
      ref={ref}
      style={getAnimationStyles()}
      className={className}
    >
      {children}
    </div>
  );
}
