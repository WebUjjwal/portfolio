"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

const CARD_DATA = [
  {
    _id: 76786,
    title: "Join the Community",
    descrip: "The Future is Transparent",
    video: "/bg-1.webp",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Community() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // 1️⃣ initial scale
      gsap.set(cards, { scaleX: 0.8 });

      // 2️⃣ intro animation (sab ek saath thoda pop)
      const firstTimeline = gsap.timeline({
        onComplete: () => createSecondAnimation(),
      });

      firstTimeline.to(cards, {
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "none",
      });

      // 3️⃣ scroll based one by one
      function createSecondAnimation() {
        cards.forEach((card, i) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "bottom 10%",
              scrub: true,
              // markers: i === 0,
            },
          });

          tl.to(card, { scale: 1.4, ease: "none" }).to(card, {
            scale: 1,
            ease: "none",
          });
        });
      }

      createSecondAnimation();
    }, [sectionRef, cardsRef]);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden mt-60">
      <div style={{fontFamily: "Barriecito"}} className="text-center mb-60">
        <h1 className="text-[160px] leading-42.5">
          Build<span className="text-[#cc91f0] animate-pulse">.</span> Stake
          <span className="text-[#cc91f0] animate-pulse">.</span>
          <br />
          Innovate
          <span className="text-[#cc91f0] animate-pulse">.</span>
        </h1>
      </div>

      <div className="container mx-auto px-20 flex flex-col gap-40 h-screen">
        {CARD_DATA.map(({ _id, title, descrip, video }, i) => {
          return (
            <div
              key={_id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="w-full  relative text-5xl font-bold mb-17 rounded-[40px] overflow-hidden"
            >
              <Image
                className="w-full h-full"
                src={video}
                width={800}
                height={600}
                alt=""
              />

              <div className="absolute flex items-center justify-center bg-black/60 w-full h-full top-0">
                <div className="text-center">
                  <h3
                    style={{fontFamily: "Barriecito"}}
                    className="text-[70px] capitalize! font-semibold mb-5 text-white"
                  >
                    {title}
                  </h3>
                  <p className="text-[22px] font-extralight mb-7 text-white">
                    {descrip}
                  </p>
                  <button
                    className="font-semibold text-[18px] gap-2 px-8 py-3 flex items-center mx-auto rounded-full 
                        bg-[white] text-white-900! cursor-pointer hover:bg-[#cc91f0] transition-all duration-300"
                  >
                    Learn More <MdOutlineArrowOutward className="text-[20px]" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
