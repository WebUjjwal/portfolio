"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GSAPLoader({ finishLoading }) {
  const spriteRef = useRef();
  const counterRef = useRef();
  const progressRef = useRef();

  useEffect(() => {
    const frameWidth = 144;
    const frameHeight = 135;
    const columns = 6;
    const rows = 6;
    const totalFrames = columns * rows;

    let frame = { value: 0 };
    let progress = { value: 0 };

    // Sprite animation
    gsap.to(frame, {
      value: totalFrames - 1,
      duration: 3,
      repeat: -1,
      ease: `steps(${totalFrames})`,
      onUpdate: () => {
        const index = Math.floor(frame.value);

        const x = (index % columns) * frameWidth;
        const y = Math.floor(index / columns) * frameHeight;

        if (spriteRef.current) {
          spriteRef.current.style.backgroundPosition = `-${x}px -${y}px`;
        }
      },
    });

    // Progress animation
    gsap.to(progress, {
      value: 100,
      duration: 5,
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current)
          counterRef.current.innerText = `[${Math.floor(progress.value)}%]`;

        if (progressRef.current)
          progressRef.current.style.width = `${progress.value}%`;
      },
      onComplete: finishLoading,
    });

    gsap.to(spriteRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "none",
    });
  }, []);

  

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-999999">
      {/* Sprite */}
      <div ref={spriteRef} className="sprite" />

      {/* Counter */}
      <div
        style={{ fontFamily: "Barriecito" }}
        ref={counterRef}
        className="text-white mt-4 font-mono text-[22px]"
      >
        [0%]
      </div>

      {/* Progress line */}
      <div className="absolute bottom-2 left-2 right-2 w-full h-2 bg-[#17111b] z-50">
        <div ref={progressRef} className="h-full w-0 bg-[#ff9100]" />
      </div>

      {/* Styles */}
      <style jsx>{`
        .sprite {
          width: 144px;
          height: 135px;
          background-image: url("/sprite.png");
          background-repeat: no-repeat;
          background-size: 864px 810px;
        }
      `}</style>
    </div>
  );
}
