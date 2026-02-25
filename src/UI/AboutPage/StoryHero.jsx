"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StoryHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".fall-item");

    gsap.set(elements, {
      y: -300,
      opacity: 0,
      scale: 0.8,
    });

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.15,
    });
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-[#0e0a1f] relative overflow-hidden">
      <div ref={containerRef} className="relative w-[600px] h-[400px]">
        <div
          className="fall-item absolute top-[80px] left-[140px] px-3 py-2 border border-white rounded-full text-white"
          style={{
            transform:
              "matrix(0.670375, 0.742023, -0.742023, 0.670375, 140.518, 230.055)",
          }}
        >
          The
        </div>

        {/* Arrow */}
        <div
          className="fall-item absolute top-[70px] left-[260px]
        w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center"
        >
          ↗
        </div>

        {/* Flower */}
        <div
          className="fall-item absolute top-[70px] left-[360px]
        w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center"
        >
          ✿
        </div>

        {/* Fire */}
        <div
          className="fall-item absolute top-[140px] left-[180px]
        w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
        >
          🔥
        </div>

        {/* Story */}
        <div
          className="fall-item absolute top-[140px] left-[260px]
        px-10 py-3 bg-green-400 rounded-xl text-black text-3xl font-bold"
        >
          Story
        </div>

        {/* of */}
        <div
          className="fall-item absolute top-[160px] left-[420px]
        w-14 h-14 border border-white text-white rounded-full flex items-center justify-center"
        >
          of
        </div>

        {/* Chromia */}
        <div
          className="fall-item absolute top-[240px] left-[200px]
        px-14 py-4 bg-purple-400 rounded-full text-black text-3xl font-bold"
        >
          Chromia
        </div>
      </div>
    </section>
  );
}
