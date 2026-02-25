"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoComponent({
  totalFrames,
  framePath,
  prevTimeline,
}) {
  const canvasRef = useRef(null);
  const imagesRef = useRef({});
  const currentFrameRef = useRef(0);

  const getFrameSrc = (i) =>
    `${framePath}/frame_${String(i).padStart(4, "0")}.png`;

  // Load single frame (lazy)
  const loadImage = (index) => {
    if (imagesRef.current[index]) return imagesRef.current[index];

    const img = new Image();
    img.src = getFrameSrc(index);
    imagesRef.current[index] = img;
    return img;
  };

  // Keep small cache window
  const preloadAround = (frame, range = 20) => {
    for (let i = frame - range; i <= frame + range; i++) {
      if (i > 0 && i < totalFrames) loadImage(i);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const renderFrame = (frame) => {
      const img = loadImage(frame);
      if (!img.complete) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const start = () => {
      ScrollTrigger.create({
        trigger: canvas,
        start: "top top",
        end: `+=${totalFrames * 15}`,
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const targetFrame = Math.floor(
            self.progress * (totalFrames - 1)
          );

          if (targetFrame !== currentFrameRef.current) {
            currentFrameRef.current = targetFrame;
            preloadAround(targetFrame);
            renderFrame(targetFrame);
          }
        },
      });

      // initial
      preloadAround(1);
      renderFrame(1);
    };

    if (prevTimeline instanceof gsap.core.Timeline) {
      prevTimeline.eventCallback("onComplete", start);
    } else {
      start();
    }

    return () => {
      window.removeEventListener("resize", resize);
      ScrollTrigger.killAll();
    };
  }, [totalFrames, framePath, prevTimeline]);

  return (
    <div className="relative w-full h-screen">
      <canvas ref={canvasRef} className="w-full h-screen" />
    </div>
  );
}
