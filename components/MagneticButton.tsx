'use client';

import React, { useRef, useEffect, ReactNode } from 'react';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a' | 'div';
  href?: string;
  onClick?: () => void;
  [key: string]: unknown;
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  as: Component = 'div',
  href,
  onClick,
  ...props
}: MagneticProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check media query for fine pointer and no reduced motion
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || prefersReducedMotion) return;

    let rafId: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updatePosition = () => {
      currentX = lerp(currentX, targetX, 0.18);
      currentY = lerp(currentY, targetY, 0.18);

      el.style.setProperty('--dx', `${currentX.toFixed(2)}px`);
      el.style.setProperty('--dy', `${currentY.toFixed(2)}px`);

      if (isHovering || Math.abs(currentX) > 0.1 || Math.abs(currentY) > 0.1) {
        rafId = requestAnimationFrame(updatePosition);
      } else {
        el.style.setProperty('--dx', '0px');
        el.style.setProperty('--dy', '0px');
        rafId = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      targetX = (e.clientX - centerX) * strength;
      targetY = (e.clientY - centerY) * strength;

      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseEnter = () => {
      isHovering = true;
      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetX = 0;
      targetY = 0;
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [strength]);

  const Element = Component as unknown as React.ElementType;

  return (
    <Element
      ref={elementRef as unknown as React.Ref<HTMLElement>}
      className={`magnetic-btn ${className}`}
      href={href}
      onClick={onClick}
      {...props}
    >
      {children}
    </Element>
  );
}
