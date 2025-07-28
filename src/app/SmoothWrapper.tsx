'use client';

import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function SmoothWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure it's client

    const scroll = new LocomotiveScroll({
      el: containerRef.current as HTMLElement,
      smooth: true,
      lerp: 0.05,
      multiplier: 1,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return <div ref={containerRef} data-scroll-container>{children}</div>;
}



// 'use client'
// import { useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// export default function SmoothWrapper({ children }: { children: React.ReactNode }) {
//     useEffect(() => {
//         const scroll = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]') as HTMLElement,
//         smooth: true,
//         lerp: 0.05,
//         multiplier: 2,
//         });

//         return () => {
//         scroll.destroy();
//         };
//     }, []);

//     return (
//         <div data-scroll-container>
//         {children}
//         </div>
//     );
// }
