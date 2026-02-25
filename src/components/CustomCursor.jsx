"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;
    let rafId;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, { opacity: 1, duration: 0.15 });
    };

    const animate = () => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      gsap.set(cursor, {
        x: posX,
        y: posY,
      });

      rafId = requestAnimationFrame(animate);
    };

    // hide cursor when leaving window
    const handleMouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.15,
      });
    };

    // show cursor when entering window
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.15,
      });
    };

    animate();

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <svg
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[999999]"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      style={{
        transform: "translate(-50%, -50%)",
        opacity: 0,
      }}
    >
      <path
        fill="#FF9101"
        stroke="#000"
        strokeWidth="1.4"
        strokeLinejoin="round"
        d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
      />
    </svg>
  );
}