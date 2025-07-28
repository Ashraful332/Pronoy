'use client'
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function SmoothWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if (typeof window !== 'undefined' && document) {
            const scroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]') as HTMLElement,
                smooth: true,
                lerp: 0.05,
                multiplier: 2,
            });

            return () => {
                scroll.destroy();
            };
        }
    }, []);

    return (
        <div data-scroll-container>
            {children}
        </div>
    );
}
