"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const RelationalFunction = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: "chars" });

    gsap.fromTo(
      split.chars,
      { opacity: 0.1, y: 30, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        ease: "none",
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          end: "+=600",
          scrub: 1.5,
        },
      }
    );

    return () => split.revert();
  }, []);

  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center">
      {/* Big heading */}
      <div className="mb-20 md:mb-32">
        <h1
          ref={textRef}
          style={{fontFamily: "Barriecito"}}
          className="text-center text-[32px] sm:text-[44px] md:text-[72px] lg:text-[110px] leading-tight font-bold text-gray-900"
        >
          Relational Frontend Skill fix for every thing
        </h1>
      </div>

      {/* Section 1 */}
      <div className="max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1">
            <h3
              style={{fontFamily: "Barriecito"}}
              className="text-[26px] sm:text-[32px] md:text-[40px] mb-4"
            >
              Modern frontends deserve modern performance.
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              I am a frontend developer specializing in building modern,
              high-performance web applications using React, Next.js, and
              TypeScript. I create interactive, responsive, and user-friendly
              interfaces with smooth animations powered by GSAP and Tailwind
              CSS, turning designs into seamless digital experiences.
            </p>
          </div>

          <div className="flex-1">
            <Image
              src="/fron-1.webp"
              alt="Relational Frontend"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-6xl w-full mt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1">
            <Image
              src="/fro-2.webp"
              alt="Relational Frontend"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="flex-1">
            <h3
              style={{fontFamily: "Barriecito"}}
              className="text-[26px] sm:text-[32px] md:text-[40px] mb-4"
            >
              Where design meets performance.
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              I craft engaging and dynamic web experiences with React and
              Next.js. From pixel-perfect designs to smooth animations with
              GSAP, I focus on creating performant, interactive, and visually
              stunning frontends that users love.
            </p>

            <button className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-gray-900 font-bold border border-gray-900 hover:bg-[#cc91f0] transition-all duration-300">
              Learn More <MdOutlineArrowOutward className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelationalFunction;
