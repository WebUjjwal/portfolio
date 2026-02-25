"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const assets = [
  { type: "html", label: "Frontend Developer", color: "#61dafb" },
  { type: "gif", src: "/gif-1.mp4" },
  { type: "gif", src: "/gif-3.mp4" },
  { type: "gif", src: "/gif-4.mp4" },
  { type: "html", label: "Next.js Expert", color: "#88ce02" },
  { type: "gif", src: "/gif-2.mp4" },
  { type: "html", label: "React Specialist", color: "#000000" },
];

export default function DragTrail({ children }) {
  const wrapperRef = useRef(null);
  const last = useRef(0);

  // ✅ NEW: last position store
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (window.innerWidth < 768) return;

    const MIN_DISTANCE = 80; // ✅ minimum spacing

    const createItem = (x, y) => {
      const asset = assets[Math.floor(Math.random() * assets.length)];
      let el;

      if (asset.type === "img") {
        el = document.createElement("img");
        el.src = asset.src;
        el.style.width = "120px";
      }

      if (asset.type === "gif") {
        el = document.createElement("video");
        el.src = asset.src;
        el.autoplay = true;
        el.loop = true;
        el.muted = true;
        el.playsInline = true;
        el.style.width = "120px";
        el.style.borderRadius = "14px";
      }

      if (asset.type === "html") {
        el = document.createElement("div");
        el.innerText = asset.label;
        Object.assign(el.style, {
          padding: "10px 18px",
          background: asset.color,
          color: "#fff",
          fontWeight: "600",
          borderRadius: "999px",
          fontFamily: "Inter, sans-serif",
        });
      }

      // ✅ NEW: random spread offset
      const offsetX = (Math.random() - 0.5) * 100;
      const offsetY = (Math.random() - 0.5) * 100;

      Object.assign(el.style, {
        position: "absolute",
        left: `${x - 60 + offsetX}px`,
        top: `${y - 40 + offsetY}px`,
        pointerEvents: "none",
        zIndex: 50,
        boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        transform: `rotate(${Math.random() * 30 - 15}deg)`,
        willChange: "transform, opacity",
      });

      wrapper.appendChild(el);

      gsap.fromTo(
        el,
        { scale: 0.7, opacity: 1 },
        {
          scale: 1,
          y: -120,
          duration: 1.9,
          ease: "power3.out",
          onComplete: () => el.remove(),
        }
      );
    };

    const onMove = (e) => {
      const now = Date.now();
      if (now - last.current < 100) return;

      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // ✅ NEW: distance calculation
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MIN_DISTANCE) return;

      last.current = now;
      lastPos.current = { x, y };

      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        createItem(x, y);
      }
    };

    wrapper.addEventListener("mousemove", onMove);
    return () => wrapper.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={wrapperRef} className="relative overflow-hidden">
      {children}
    </div>
  );
}