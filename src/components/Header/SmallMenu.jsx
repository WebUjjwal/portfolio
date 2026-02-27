"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

export default function SmallMenu() {
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      gsap.to(menuRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.fromTo(
        linksRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [open]);

  return (
    <div className="md:hidden block  z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-black text-white rounded-md"
      >
        {open ? "Close" : "Menu"}
      </button>

      {/* Menu Panel */}
      <div
        ref={menuRef}
        className="overflow-hidden h-0 bg-neutral-900 text-white rounded-md"
      >
        <ul className="flex flex-col p-4 space-y-4">
          {["Home", "About", "Projects", "Contact"].map((item, i) => (
            <li
              key={i}
              ref={(el) => (linksRef.current[i] = el)}
              className="cursor-pointer hover:text-yellow-400 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}