"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MdOutlineArrowOutward } from "react-icons/md";

const CARD_DATA = [
  {
    _id: 76786,
    title: "Artificial Intelligence",
    descrip: "The Future is Transparent",
    video: "video-1.webm",
  },
  {
    _id: 878566,
    title: "data",
    descrip: "Structured Data Powered by Relational Blockchain",
    video: "video-2.webm",
  },
  {
    _id: 4345678,
    title: "gaming",
    descrip: "Join a Family of Game Changers",
    video: "video-3.mp4",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function StackCards() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      gsap.set(cards, { scale: 0.8 });

      const firstTimeline = gsap.timeline({
        onComplete: () => createSecondAnimation(),
      });

      firstTimeline.to(cards, {
        scale: .9,
        duration: 1,
        stagger: 0.1,
        ease: "none",
      });

      function createSecondAnimation() {
        cards.forEach((card, i) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "bottom 85%",
              scrub: true,
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
    <section ref={sectionRef} className="overflow-hidden">
      {/* Title */}
      <div style={{fontFamily: "Barriecito"}} className="text-center mb-20 md:mb-40">
        <h4 className="text-[36px] sm:text-[50px] md:text-[70px] font-semibold leading-tight">
          Use
        </h4>
        <h1 className="text-[80px] sm:text-[140px] md:text-[200px] leading-none">
          Cases
        </h1>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 sm:px-10 md:px-20 flex flex-col gap-16 md:gap-50 mb-60">
        {CARD_DATA.map(({ _id, title, descrip, video }, i) => {
          return (
            <div
              key={_id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="w-full md:h-[80vh] h-[60vh] relative rounded-3xl overflow-hidden"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                src={video}
              ></video>

              <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                <div className="text-center px-4">
                  <h3
                    style={{fontFamily: "Barriecito"}}
                    className="text-[28px] sm:text-[40px] md:text-[60px] font-semibold mb-4"
                  >
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-extralight mb-5">
                    {descrip}
                  </p>
                  <button className="font-semibold text-sm sm:text-base gap-2 px-5 sm:px-7 py-2.5 sm:py-3 flex items-center mx-auto rounded-full bg-white text-gray-900 hover:bg-[#cc91f0] transition-all duration-300">
                    Learn More <MdOutlineArrowOutward className="text-lg" />
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
