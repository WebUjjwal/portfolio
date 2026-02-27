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
      className=" w-full h-screen overflow-hidden flex items-center"
    >
      <div className="relative">
        <h1 ref={textRef}>
          <span
            style={{ fontFamily: "Barriecito" }}
            className="whitespace-nowrap text-[170px] text-[#f8efef] font-medium "
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
            className="group absolute -top-10 left-20 rounded-[20px] overflow-hidden max-w-87.5 bg-[#93f091] cursor-pointer hover:animate-none"
          >
            <div className=" text-[20px] text-gray-900 flex items-center justify-between font-medium px-4 py-3">
              <p>Relational, Not Just a Ledger</p>
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
              <p className="text-gray-900 mb-6">
                Inspired by the databases that power our world, Chromia stores
                information in a relational format. This allows it to read,
                write, and query data far more efficiently than other
                blockchains.
              </p>

              <button className="font-bold gap-2 px-4 py-2 rounded-full w-full bg-white text-gray-900 cursor-pointer hover:bg-[#cc91f0] transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div
            ref={card2Ref}
            className="group absolute -bottom-10 left-200 rounded-[20px] overflow-hidden max-w-87.5 bg-[#ffb0c2] cursor-pointer hover:animate-none"
          >
            <div className=" text-[20px] text-gray-900 flex items-center justify-between font-medium px-4 py-3">
              <p>Modular, not monolithic</p>
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
              <p className="text-wrap  text-gray-900 mb-6">
                By placing each dapp and system process on its own chain and
                grouping them into clusters, our network offers parallel
                scaling, near-instant finality, and consistent transaction
                costs.
              </p>

              <button className="font-bold gap-2 px-4 py-2 rounded-full w-full bg-[white] text-gray-900! cursor-pointer hover:bg-[#cc91f0] transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div
            ref={card3Ref}
            className="group absolute -top-10 left-600 rounded-[20px] overflow-hidden max-w-87.5 bg-[#cb91f0] cursor-pointer hover:animate-none"
          >
            <div className=" text-[20px] text-gray-900 flex items-center justify-between font-medium px-4 py-3">
              <p>Connected, Not Isolated</p>
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
              <p className="text-wrap  text-gray-900 mb-6">
                Chromia is built from scratch, but remains connected to the
                cryptoverse through EVM bridging.
              </p>

              <button className="font-bold gap-2 px-4 py-2 rounded-full w-full bg-[white] text-gray-900! cursor-pointer hover:bg-[#cc91f0] transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div
            ref={card4Ref}
            className="group absolute -bottom-13 left-700 rounded-[20px] overflow-hidden max-w-87.5 bg-[#ff9101] cursor-pointer hover:animate-none"
          >
            <div className=" text-[20px] text-gray-900 flex items-center justify-between font-medium px-4 py-3">
              <p>One Chain Per Dapp</p>
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
              <p className="text-wrap  text-gray-900 mb-6">
                Dapps run on dedicated chains, making them highly responsive and
                customizable.
              </p>

              <button className="font-bold gap-2 px-4 py-2 rounded-full w-full bg-[white] text-gray-900! cursor-pointer hover:bg-[#cc91f0] transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div
            ref={card5Ref}
            className="group absolute -top-13 left-1200 rounded-[20px] overflow-hidden max-w-87.5 bg-[#ffb502] cursor-pointer hover:animate-none"
          >
            <div className=" text-[20px] text-gray-900 flex items-center justify-between font-medium px-4 py-3">
              <p>Fees? Nah, Don't Think So</p>
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
              <p className="text-wrap  text-gray-900 mb-6">
                Dapps pay for hosting in CHR and design their own fee models,
                enabling gas free transactions for end users.
              </p>

              <button className="font-bold gap-2 px-4 py-2 rounded-full w-full bg-[white] text-gray-900! cursor-pointer hover:bg-[#cc91f0] transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div
            ref={card6Ref}
            className="w-70 h-70 rounded-full overflow-hidden absolute right-700 -top-49"
          >
            <video autoPlay muted loop src="/gif-2.mp4" />
          </div>

          <div className="rounded-full overflow-hidden absolute right-10 -top-70">
            <video autoPlay muted loop src="/gif-1.mp4" />
          </div>
        </h1>
      </div>
    </div>
  );
}
