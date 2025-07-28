"use client"

import "./ani.css"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export default function Animation(){
  useEffect(() => {
    const vw = () => (window.innerWidth < window.innerHeight ? "100vh" : "100vw");
    const widthStart = () => (window.innerWidth < 600 ? 70 : 200);

    // SVG 1
    const svg1TL = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip1 .clip__inner",
        scrub: 2,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      },
    });

    svg1TL.fromTo("#svg1 video, #svg1 img", { y: "30%" }, { y: 0 }, 0);
    svg1TL.to(
      "#svg__star",
      { morphSVG: { shape: "#svg__rec", origin: "50% 50%" }, ease: "none" },
      0
    );
    svg1TL.fromTo(
      "#svg1",
      { width: widthStart },
      { width: vw, ease: "none" },
      0
    );

    // SVG 2
    gsap.set("#svg2", { y: "100vh" });
    gsap.to("#svg2", {
      y: 0,
      x: 0,
      scrollTrigger: {
        trigger: "body",
        scrub: true,
        start: () => window.innerHeight * 2 + " bottom",
        end: () => window.innerHeight * 3 + " bottom",
      },
      ease: "none",
    });

    const svg2TL = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        scrub: 2,
        start: () => window.innerHeight * 3 + " bottom",
        end: () => window.innerHeight * 4 + " bottom",
        invalidateOnRefresh: true,
      },
    });

    svg2TL.fromTo("#svg2 video, #svg2 img", { y: "30%" }, { y: 0 }, 0);
    svg2TL.to("#svg__star2", { morphSVG: { shape: "#svg__rec2", origin: "50% 50%" } }, 0);
    svg2TL.fromTo("#svg2", { width: widthStart }, { width: vw, ease: "none" }, 0);

    // SVG 3
    gsap.set("#svg3", { y: "100vh" });
    gsap.to("#svg3", {
      y: 0,
      x: 0,
      scrollTrigger: {
        trigger: "body",
        scrub: true,
        start: () => window.innerHeight * 4 + " bottom",
        end: () => window.innerHeight * 5 + " bottom",
        invalidateOnRefresh: true,
      },
      ease: "none",
    });

    const svg3TL = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        scrub: 2,
        start: () => window.innerHeight * 5 + " bottom",
        end: () => window.innerHeight * 6 + " bottom",
        invalidateOnRefresh: true,
      },
    });

    svg3TL.fromTo("#svg3 video, #svg3 img", { y: "30%" }, { y: 0 }, 0);
    svg3TL.to("#svg__star3", { morphSVG: { shape: "#svg__rec3", origin: "50% 50%" } }, 0);
    svg3TL.fromTo("#svg3", { width: widthStart }, { width: vw, ease: "none" }, 0);

    // SVG 4
    gsap.set("#svg4", { y: () => window.innerHeight });
    gsap.to("#svg4", {
      y: 0,
      x: 0,
      scrollTrigger: {
        trigger: "body",
        scrub: true,
        start: () => window.innerHeight * 6 + " bottom",
        end: () => window.innerHeight * 7 + " bottom",
      },
      ease: "none",
    });

    const svg4TL = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        scrub: 2,
        start: () => window.innerHeight * 7 + " bottom",
        end: () => window.innerHeight * 8 + " bottom",
      },
    });

    svg4TL.fromTo("#svg4 video, #svg4 img", { y: "30%" }, { y: 0 }, 0);
    svg4TL.to("#svg__star4", { morphSVG: { shape: "#svg__rec4", origin: "50% 50%" } }, 0);
    svg4TL.fromTo("#svg4", { width: widthStart }, { width: vw, ease: "none" }, 0);
  }, []);

        return (
        <main className="flex__col">
        <nav className="menu flex">
            <a href="#" className="menu__left">
            Lorem ipsum
            </a>
            <ul className="menu__right flex">
            <li><a href="#">Work</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <section className="clip" id="clip1">
            <div className="clip__inner flex__col">
            <h1 className="flex">Find your star</h1>
            <div className="clip__cols flex">
                <p>
                SOTD Challenge : Inspired by <a href="https://2authenticators.co/">2 Authenticators</a> website animation (SOTD, Apr 11, 2023)
                <br /><br />
                First time exploring Morph SVG.
                </p>
                <p>
                Nulla hendrerit metus lacinia magna rhoncus suscipit. Sed faucibus posuere tempor. Ut suscipit et urna a gravida.
                <br />
                Nulla hendrerit metus lacinia magna rhoncus suscipit. Sed faucibus posuere tempor. Ut suscipit et urna a gravida.
                </p>
            </div>
            </div>
        </section>

        {["clip1__scroll", "clip2__scroll", "clip3__scroll", "clip4__scroll"].map((id, index) => {
            const titles = ["Le glacier", "Le lac", "La montagne", "L'océan"];
            return (
            <section className="clip__scroll flex__col" id={id} key={id}>
                <h2>{titles[index]}</h2>
                <div className="clip__cols flex">
                <p>
                    SOTD Challenge : Inspired by <a href="https://2authenticators.co/">2 Authenticators</a> website animation (SOTD, Apr 11, 2023)
                    <br /><br />
                    First time exploring Morph SVG.
                </p>
                <p>
                    Nulla hendrerit metus lacinia magna rhoncus suscipit. Sed faucibus posuere tempor. Ut suscipit et urna a gravida.
                    <br />
                    Nulla hendrerit metus lacinia magna rhoncus suscipit. Sed faucibus posuere tempor. Ut suscipit et urna a gravida.
                </p>
                </div>
            </section>
            );
        })}

        {["svg1", "svg2", "svg3", "svg4"].map((id, index) => {
            const pathId = `svg__path${index + 1}`;
            const recId = `svg__rec${index + 1}`;
            const starId = `svg__star${index + 1}`;
            const videoSrc = [
            "http://thenewcode.com/assets/videos/glacier.mp4",
            "http://thenewcode.com/assets/videos/lake.mp4",
            "http://thenewcode.com/assets/videos/mountain.mp4",
            "http://thenewcode.com/assets/videos/ocean-small.mp4"
            ];
            const posterImg = [
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1740&q=80",
            "https://images.unsplash.com/photo-1494253188410-ff0cdea5499e?auto=format&fit=crop&w=1740&q=80",
            "https://images.unsplash.com/photo-1487715433499-93acdc0bd7c3?auto=format&fit=crop&w=1844&q=80",
            "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1740&q=80"
            ];

            return (
            <figure className="starSvg" id={id} key={id}>
                <svg height="0" width="0">
                <defs>
                    <clipPath id={pathId} clipPathUnits="objectBoundingBox">
                    <path id={recId} data-name={recId} d="M0,0H1V1H0Z" />
                    <path
                        id={starId}
                        data-name={starId}
                        d="M 0.5 0.0390625 C 0.472656 0.214844 0.449219 0.320312 0.382812 0.382812 C 0.320312 0.449219 0.214844 0.472656 0.0390625 0.5 C 0.214844 0.527344 0.320312 0.550781 0.382812 0.617188 C 0.449219 0.679688 0.472656 0.785156 0.5 0.960938 C 0.527344 0.785156 0.550781 0.679688 0.617188 0.617188 C 0.679688 0.550781 0.785156 0.527344 0.960938 0.5 C 0.785156 0.472656 0.679688 0.449219 0.617188 0.382812 C 0.550781 0.320312 0.527344 0.214844 0.5 0.0390625 Z M 0.828125 0.171875 C 0.738281 0.238281 0.667969 0.285156 0.605469 0.3125 C 0.617188 0.328125 0.628906 0.34375 0.640625 0.359375 C 0.65625 0.371094 0.671875 0.382812 0.6875 0.394531 C 0.714844 0.332031 0.761719 0.261719 0.828125 0.171875 Z M 0.175781 0.175781 C 0.238281 0.261719 0.285156 0.332031 0.3125 0.394531 C 0.328125 0.382812 0.34375 0.371094 0.359375 0.359375 C 0.371094 0.34375 0.382812 0.328125 0.394531 0.3125 C 0.332031 0.285156 0.261719 0.238281 0.175781 0.175781 Z M 0.6875 0.605469 C 0.671875 0.617188 0.65625 0.628906 0.640625 0.640625 C 0.628906 0.65625 0.617188 0.671875 0.605469 0.6875 C 0.667969 0.714844 0.738281 0.761719 0.828125 0.828125 C 0.761719 0.738281 0.714844 0.667969 0.6875 0.605469 Z M 0.3125 0.605469 C 0.285156 0.667969 0.238281 0.738281 0.171875 0.828125 C 0.261719 0.761719 0.332031 0.714844 0.394531 0.6875 C 0.382812 0.671875 0.371094 0.65625 0.359375 0.640625 C 0.34375 0.628906 0.328125 0.617188 0.3125 0.605469 Z"
                    />
                    </clipPath>
                </defs>
                </svg>
                <video
                loop
                autoPlay
                muted
                poster={posterImg[index]}
                >
                <source src={videoSrc[index]} type="video/mp4" />
                </video>
            </figure>
            );
        })}
        </main>
    );
    };
