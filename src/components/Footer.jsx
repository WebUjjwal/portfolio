"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef(null);
  let firstTimeline = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    // Initial colors
    gsap.set(document.body, {
      backgroundColor: "#000000",
      color: "#ffffff",
    });

    // ---------- FIRST ANIMATION (fake example) ----------
    firstTimeline.current = gsap.timeline({
      onComplete: () => createSecondAnimation(), // 🔥 same as your logic
    });

    firstTimeline.current.to(section, {
      y: 0,
      duration: 1,
      ease: "power2.out",
    });

    // ---------- SECOND ANIMATION (color trigger) ----------
    function createSecondAnimation() {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom center",
        onEnter: () =>
          gsap.to(document.body, {
            backgroundColor: "#93f091",
            color: "#000000",
            duration: 0.6,
            ease: "power2.out",
          }),
        onLeaveBack: () =>
          gsap.to(document.body, {
            backgroundColor: "#f8efef",
            color: "#17111b",
            duration: 0.6,
            ease: "power2.out",
          }),
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="mt-60! container_cus">
      <div
        
        className="text-center h-90 bg-[#1f1a23] rounded-[30px] mb-2 p-8"
      >
        
        <div className="mx-auto flex justify-between items-center">
        <p style={{ fontFamily: "Barriecito" }} className="text-[30px] text-left font-medium text-white w-[60%]">
          Let’s build and ship something remarkable. Open to agency
          collaborations, freelance work, and fully remote full-time
          opportunities.
        </p>
        </div>


        <video className="w-[400px] h-[200px]" autoPlay loop muted src="footer-gif.mp4" />
      </div>

      
    </section>
  );
};

export default Footer;
