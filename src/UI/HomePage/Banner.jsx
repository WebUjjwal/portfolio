"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoNorthStar } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { FaCodeBranch, FaDatabase } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import DragTrail from "@/components/DragTrail";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const containerRef = useRef(null);
  const textRef = useRef([]);
  const svgRef = useRef(null);

  const addToRefs = (el) => {
    if (el && !textRef.current.includes(el)) {
      textRef.current.push(el);
    }
  };

  // ✅ split letters function
  const splitLetters = (element) => {
  // prevent double split
  if (element.dataset.split === "true") {
    return element.querySelectorAll("span");
  }

  element.dataset.split = "true";

  const text = element.innerText;
  element.dataset.originalText = text; // store original text

  element.innerHTML = "";

  const letters = text.split("").map((char) => {
    const span = document.createElement("span");

    span.innerText = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    span.style.transformStyle = "preserve-3d";
    span.style.willChange = "transform";

    element.appendChild(span);

    return span;
  });

  return letters;
};

useEffect(() => {
  const ctx = gsap.context(() => {

    // existing intro animation
    gsap.from(textRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.2,
    });

    // infinite letter flip animation
    textRef.current.forEach((el) => {
      if (el.tagName === "H1") {
        const letters = splitLetters(el);

        gsap.set(letters, {
          transformOrigin: "50% 50%",
        });

        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 1,
        });

        tl.to(letters, {
          rotationY: 180,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.inOut",
        }).to(letters, {
          rotationY: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.inOut",
        });
      }
    });

    // slow idle rotation
    gsap.to(svgRef.current, {
      rotation: "+=360",
      duration: 30,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });

    // scroll speed rotation
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        const speed = Math.min(Math.abs(velocity) / 40, 30);

        gsap.to(svgRef.current, {
          rotation: `+=${speed}`,
          duration: 0.4,
          ease: "power2.out",
          transformOrigin: "50% 50%",
        });
      },
    });

  }, containerRef); // ✅ scope fix

  return () => ctx.revert(); // ✅ proper cleanup fix

}, []);

  return (
    <DragTrail>
      <div
        ref={containerRef}
        className="relative container mx-auto w-full h-screen flex flex-col justify-center items-center px-4"
      >
        {/* Heading */}
        <div
          style={{ fontFamily: "Barriecito" }}
          className="flex flex-col items-center justify-center gap-3 text-center font-bold text-[42px] sm:text-[56px] md:text-[96px] xl:text-[160px] text-[#17111b] leading-tight select-none"
        >
          <div className="fixed right-2 bottom-2 z-[99999]">
            <svg
              ref={svgRef}
              className="w-14 h-14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
            >
              <path
                d="M240 0c-132.6 0 0 240 0 240s240 132.6 240 0S372.6 0 240 0ZM240 480c132.6 0 0-240 0-240S0 107.4 0 240s107.5 240 240 240Z"
                fill="#FF9100"
              />
            </svg>
          </div>

          <h1 ref={addToRefs} className="bg-[#FF9100] w-fit mx-auto">
            Creative
          </h1>

          <div className="flex items-center justify-center gap-3">
            <h1 ref={addToRefs} className="bg-[#cb91f0]">Frontend</h1>
            <h1 ref={addToRefs} className="bg-[#93f091]">Developer</h1>
          </div>
        </div>

        {/* Subtitle */}
        <div
          ref={addToRefs}
          className="max-w-2xl text-center text-sm sm:text-base md:text-lg lg:text-xl mt-4"
        >
          <p>Chromia combines blockchain with relational databases.</p>
          <p>
            For dapps with smarter features, fairer fees, and richer worlds.
          </p>
        </div>

        {/* Buttons */}
        <ul
          ref={addToRefs}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6"
        >
          {[
            { icon: <GoNorthStar />, label: "Chromia Vault" },
            { icon: <IoSearch />, label: "Chromia Explore" },
            { icon: <FaCodeBranch />, label: "Get $CHR" },
            { icon: <FaDatabase />, label: "Start Building" },
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-center gap-2 min-w-[160px] sm:min-w-[180px] px-4 py-2.5 sm:py-3 rounded-full bg-[#17111b] text-sm sm:text-base font-medium text-white cursor-pointer hover:bg-[#cc91f0] transition-all duration-300"
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>

        {/* Scroll Arrow */}
        <div className="absolute bottom-6 sm:bottom-10">
          <MdKeyboardArrowDown className="text-3xl sm:text-5xl text-gray-900 animate-bounce" />
        </div>
      </div>
    </DragTrail>
  );
};

export default Banner;