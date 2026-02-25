"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoadmapSlider from "./RoadMapSlider";

gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
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
        start: "top center",
        end: "bottom center",
        onEnter: () =>
          gsap.to(document.body, {
            backgroundColor: "#f8efef",
            color: "#000000",
            duration: 0.6,
            ease: "power2.out",
          }),
        onLeaveBack: () =>
          gsap.to(document.body, {
            backgroundColor: "#17111b",
            color: "#ffffff",
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
    <section
      ref={sectionRef}
      className="py-20">
      <div style={{fontFamily: "Barriecito"}} className="text-center mb-60">
        <h1 className="text-[210px] leading-60">Road map</h1>
      </div>

      <RoadmapSlider />
    </section>
  );
};

export default Roadmap;
