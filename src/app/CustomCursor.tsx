// components/CustomCursor.tsx
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
        gsap.to(cursorRef.current, {
            x: e.pageX - 15, // pageX যোগ করলে scroll এর পরিসরে ঠিক থাকে
            y: e.pageY - 15,
            duration: 0.1,
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

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleHover);

        return () => {
        document.removeEventListener('mousemove', moveCursor);
        document.removeEventListener('mouseover', handleHover);
        };
    }, []);

    return (
        <div
        ref={cursorRef}
        style={{ position: 'absolute', top: 0, left: 0 }} // position absolute important
        className="w-8 h-8 rounded-full border border-white bg-white/10 pointer-events-none mix-blend-difference z-[9999]"
        />
    );
}
