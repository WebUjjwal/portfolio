"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const content = track.children[0];

    const contentWidth = content.offsetWidth;
    const screenWidth = container.offsetWidth;

    const repeatCount = Math.ceil(screenWidth / contentWidth) + 2;

    for (let i = 0; i < repeatCount; i++) {
      track.appendChild(content.cloneNode(true));
    }

    const totalWidth = contentWidth * repeatCount;

    gsap.set(track, { x: 0 });

    gsap.to(track, {
      x: `-=${contentWidth}`,
      duration: 80, // bada = slow
      ease: "none", // real smooth marquee
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % contentWidth}px`,
      },
    });
  }, []);

  const Mono = (props) => {
    return (
      <>
        <div className="relative w-35 h-35 rounded-full bg-[#1f1a23]/70 backdrop-blur-xl flex items-center justify-center border-8 border-[#1f1a23] overflow-hidden"> 
          <video autoPlay loop muted src={props.src} className="w-35 h-35 bg-cover -z-10" />
        </div>
      </>
    );
  };

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full text-[#1f1a23] py-6"
    >
      <div ref={trackRef} className="flex whitespace-nowrap">
        <h1 className="flex gap-16 text-[160px] px-8 font-extrabold items-center">
          <span style={{fontFamily: "Barriecito"}}>
            Building Interactive Experiences
          </span>
          <Mono src='gif-1.mp4' />
          <span style={{fontFamily: "Barriecito"}}>Scroll Animations</span>

          <Mono src='gif-2.mp4' />
          <span style={{fontFamily: "Barriecito"}}>Creative Developer</span>

          <Mono src='gif-3.mp4' />
          <span style={{fontFamily: "Barriecito"}}>Motion Design</span>

          <Mono src='gif-4.mp4' />
          <span style={{fontFamily: "Barriecito"}}>Webgl</span>

          <Mono src='gif-1.mp4' />
          <span style={{fontFamily: "Barriecito"}}>Gsap</span>

         <Mono src='gif-2.mp4' />
        </h1>
      </div>
    </div>
  );
}
