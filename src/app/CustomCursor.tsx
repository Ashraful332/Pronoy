'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]');

    if (!scrollContainer) return;

    const moveCursor = (e: MouseEvent) => {
      const bounds = scrollContainer.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      gsap.to(cursorRef.current, {
        x: x - 15,
        y: y - 15,
        duration: 0.2,
        ease: 'power3.out',
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .hover-target')) {
        gsap.to(cursorRef.current, {
          scale: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderColor: '#fff',
        });
      } else {
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderColor: '#fff',
        });
      }
    };

    scrollContainer.addEventListener('mousemove', moveCursor);
    scrollContainer.addEventListener('mouseover', handleHover);

    return () => {
      scrollContainer.removeEventListener('mousemove', moveCursor);
      scrollContainer.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="absolute top-0 left-0 z-50 w-8 h-8 rounded-full border border-white bg-white/10 pointer-events-none mix-blend-difference"
    ></div>
  );
}


