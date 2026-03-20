"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const card6Ref = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    if (!section || !text) return;

    // Initial body color
    gsap.set(document.body, { backgroundColor: "#f8efef", color: "#17111b" });

    // Background color trigger
    const bgST = ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () =>
        gsap.to(document.body, {
          backgroundColor: "#17111b",
          color: "#ffffff",
          duration: 0.5,
        }),
      onLeaveBack: () =>
        gsap.to(document.body, {
          backgroundColor: "#f8efef",
          color: "#000000",
          duration: 0.5,
        }),
    });

    const totalScroll = text.scrollWidth - section.offsetWidth;

    // Horizontal animation
    const tween = gsap.to(text, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        id: "horizontal",
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll + window.innerHeight}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // ✅ PARALLAX EFFECT FOR CARDS
    // card 1 → slightly fast
    gsap.to(card1Ref.current, {
      x: -350, // increase distance
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 1.5, // faster response
      },
    });

    // card 2 → medium fast
    gsap.to(card2Ref.current, {
      x: -600,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 2,
      },
    });

    // card 3 → fastest
    gsap.to(card3Ref.current, {
      x: -900,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 2.5,
      },
    });

    // card 3 → fastest
    gsap.to(card4Ref.current, {
      x: -900,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 2.5,
      },
    });

    gsap.to(card5Ref.current, {
      x: -900,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 2.5,
      },
    });

    gsap.to(card6Ref.current, {
      x: -900,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 2.5,
      },
    });

    // Expose for next section
    window.horizontalST = tween.scrollTrigger;

    // Force recalculation (important when pins exist)
    ScrollTrigger.refresh();

    return () => {
      if (bgST) bgST.kill();

      if (tween?.scrollTrigger) {
        tween.scrollTrigger.kill();
      }

      if (tween) tween.kill();
    };
  }, []);

  // <h1 ref={addToRefs}  w-fit mx-auto">
  //           Creative
  //         </h1>

  //         <div className="flex items-center justify-center gap-3">
  //           <h1 ref={addToRefs} className="bg-[#cb91f0]">Frontend</h1>
  //           <h1 ref={addToRefs} className="bg-[#93f091]">Developer</h1>
  //         </div>

  return (
    <div
      ref={sectionRef}
      className=" w-full h-screen overflow-hidden flex items-center max-[991px]:hidden"
    >
      <div className="relative">
        <h1 ref={textRef}>
          <span
            style={{ fontFamily: "Barriecito" }}
            className="whitespace-nowrap 2xl:text-[170px] xl:text-[130px] text-[100px] text-[#f8efef] font-medium "
          >
            Turning designs into living web experiences — fast, interactive, and
            responsive. Expert in <span className="bg-[#FF9100] text-gray-900">React</span>,{" "}
            <span className="bg-[#cb91f0] text-gray-900">Next.js</span>,{" "}
            <span className="bg-[#93f091] text-gray-900">Tailwind</span>,{" "}
            and {" "}
            <span className="bg-[#ffb502] text-gray-900">GSAP</span>.
          </span>

          <div
            ref={card1Ref}
            className="group absolute -top-10 left-20 rounded-[20px] overflow-hidden xl:max-w-87.5 min-w-74.5 bg-[#93f091] cursor-pointer hover:animate-none"
          >
            <div className="xl:text-[20px] text-[16px] text-gray-900 flex items-center justify-between font-medium px-4 py-3">
              <p>Frontend Development</p>
              <div className="xl:w-8 xl:h-8 w-6 h-6 bg-gray-900 text-white flex items-center justify-center rounded-full">
                <MdOutlineKeyboardArrowDown className="text-[22px] group-hover:rotate-180 transition-transform duration-800" />
              </div>
            </div>

            <div
              className="
                max-h-0 opacity-0 translate-y-6
                group-hover:max-h-60 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 ease-out
                overflow-hidden px-4 pb-0 group-hover:pb-3
              "
            >
              <p className="text-gray-900 mb-6 xl:text-[16px] text-[13px]">
                I specialize in building modern, scalable interfaces using React.js and Next.js. My focus is creating clean component architecture and reusable UI systems.
              </p>

              <button className="font-bold gap-2 px-4 py-2 rounded-full w-full bg-white text-gray-900 cursor-pointer hover:bg-[#cc91f0] transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div
            ref={card2Ref}
            className="group absolute -bottom-10 left-200 rounded-[20px] overflow-hidden xl:max-w-87.5 max-w-74.5 bg-[#ffb0c2] cursor-pointer hover:animate-none"
          >
            <div className="xl:text-[20px] text-[16px] text-gray-900 flex items-center justify-between font-medium px-4 py-3">
              <p>High Performance Websites</p>
              <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded-full">
                <MdOutlineKeyboardArrowDown className="text-[22px] group-hover:rotate-180 transition-transform duration-800" />
              </div>
            </div>

            <div
              className="
                max-h-0 opacity-0 translate-y-6
                group-hover:max-h-60 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 ease-out
                overflow-hidden px-4 pb-0 group-hover:pb-3
              "
            >
              <p className="text-wrap  text-gray-900 mb-6 xl:text-[16px] text-[13px]">
                I optimize applications for speed using techniques like lazy loading, code splitting, and server-side rendering to ensure fast and smooth user experiences.
              </p>

              <button className="font-bold gap-2 px-4 py-2 rounded-full w-full bg-[white] text-gray-900! cursor-pointer hover:bg-[#cc91f0] transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div
            ref={card3Ref}
            className="group absolute -top-10 left-600 rounded-[20px] overflow-hidden xl:max-w-87.5 max-w-74.5 bg-[#93f091] cursor-pointer hover:animate-none"
          >
            <div className="xl:text-[20px] text-[16px] text-gray-900 flex items-center justify-between font-medium px-4 py-3">
              <p>Creative UI & Animations</p>
              <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded-full">
                <MdOutlineKeyboardArrowDown className="text-[22px] group-hover:rotate-180 transition-transform duration-800" />
              </div>
            </div>

            <div
              className="
                max-h-0 opacity-0 translate-y-6
                group-hover:max-h-60 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 ease-out
                overflow-hidden px-4 pb-0 group-hover:pb-3
              "
            >
              <p className="text-wrap  text-gray-900 mb-6 xl:text-[16px] text-[13px]">
                I design engaging user experiences with modern UI patterns and smooth animations using GSAP, Framer Motion, and Tailwind CSS.
              </p>

              <button className="font-bold gap-2 px-4 py-2 rounded-full w-full bg-[white] text-gray-900! cursor-pointer hover:bg-[#cc91f0] transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div
            ref={card4Ref}
            className="group absolute -bottom-13 left-700 rounded-[20px] overflow-hidden xl:max-w-87.5 max-w-74.5 bg-[#ff9101] cursor-pointer hover:animate-none"
          >
            <div className="xl:text-[20px] text-[16px] text-gray-900 flex items-center justify-between font-medium px-4 py-3">
              <p>Responsive & Mobile First</p>
              <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded-full">
                <MdOutlineKeyboardArrowDown className="text-[22px] group-hover:rotate-180 transition-transform duration-800" />
              </div>
            </div>

            <div
              className="
                max-h-0 opacity-0 translate-y-6
                group-hover:max-h-60 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 ease-out
                overflow-hidden px-4 pb-0 group-hover:pb-3
              "
            >
              <p className="text-wrap  text-gray-900 mb-6 xl:text-[16px] text-[13px]">
                All interfaces I build are fully responsive and optimized for different screen sizes, ensuring seamless experiences across devices.
              </p>

              <button className="font-bold gap-2 px-4 py-2 rounded-full w-full bg-[white] text-gray-900! cursor-pointer hover:bg-[#cc91f0] transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div
            ref={card5Ref}
            className="group absolute -top-13 left-1200 rounded-[20px] overflow-hidden xl:max-w-87.5 max-w-74.5 bg-[#ffb502] cursor-pointer hover:animate-none"
          >
            <div className="xl:text-[20px] text-[16px] text-gray-900 flex items-center justify-between font-medium px-4 py-3">
              <p>API Integration & Backend</p>
              <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded-full">
                <MdOutlineKeyboardArrowDown className="text-[22px] group-hover:rotate-180 transition-transform duration-800" />
              </div>
            </div>

            <div
              className="
                max-h-0 opacity-0 translate-y-6
                group-hover:max-h-60 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 ease-out
                overflow-hidden px-4 pb-0 group-hover:pb-3
              "
            >
              <p className="text-wrap  text-gray-900 mb-6 xl:text-[16px] text-[13px]">
                I integrate REST and GraphQL APIs and work with modern backend services like PostgreSQL, Node.js, and server actions in Next.js.
              </p>

              <button className="font-bold gap-2 px-4 py-2 rounded-full w-full bg-[white] text-gray-900! cursor-pointer hover:bg-[#cc91f0] transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div
            ref={card6Ref}
            className="w-70 h-70 rounded-full overflow-hidden absolute right-700 -top-49 xl:block hidden"
          >
            <video autoPlay muted loop src="/gif-2.mp4" />
          </div>

          <div className="rounded-full overflow-hidden absolute right-10 -top-70 xl:block hidden">
            <video autoPlay muted loop src="/gif-1.mp4" />
          </div>
        </h1>
      </div>
    </div>
  );
}
