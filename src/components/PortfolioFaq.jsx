"use client";

import { useState } from "react";
import { FaCode, FaRocket, FaPalette, FaMobileAlt, FaServer } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const faqs = [
  {
    icon: <FaCode />,
    question: "Modern Frontend Development",
    answer:
      "I specialize in building modern, scalable interfaces using React.js and Next.js. My focus is creating clean component architecture and reusable UI systems.",
    color: "bg-green-400 text-black",
  },
  {
    icon: <FaRocket />,
    question: "High Performance Websites",
    answer:
      "I optimize applications for speed using techniques like lazy loading, code splitting, and server-side rendering to ensure fast and smooth user experiences.",
    color: "bg-blue-400 text-black",
  },
  {
    icon: <FaPalette />,
    question: "Creative UI & Animations",
    answer:
      "I design engaging user experiences with modern UI patterns and smooth animations using GSAP, Framer Motion, and Tailwind CSS.",
    color: "bg-pink-400 text-black",
  },
  {
    icon: <FaMobileAlt />,
    question: "Responsive & Mobile First",
    answer:
      "All interfaces I build are fully responsive and optimized for different screen sizes, ensuring seamless experiences across devices.",
    color: "bg-yellow-400 text-black",
  },
  {
    icon: <FaServer />,
    question: "API Integration & Backend",
    answer:
      "I integrate REST and GraphQL APIs and work with modern backend services like PostgreSQL, Node.js, and server actions in Next.js.",
    color: "bg-purple-400 text-black",
  },
];

export default function PortfolioFaq() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="container px-4 mx-auto space-y-4 text-white hidden max-[991px]:block">

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`rounded-2xl transition-all duration-300 overflow-hidden
          ${active === index ? faq.color : "bg-[#120b1f]"}`}
        >

          {/* Question */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-5"
          >
            <div className="flex items-center gap-3 text-left">

              <span className="text-xl">
                {faq.icon}
              </span>

              <span className="font-semibold">
                {faq.question}
              </span>

            </div>

            <IoChevronDown
              className={`text-xl transition-transform duration-300
              ${active === index ? "rotate-180" : ""}`}
            />
          </button>

          {/* Answer */}
          <div
            className={`grid transition-all duration-300
            ${active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          >
            <div className="overflow-hidden px-5 pb-6 text-sm leading-relaxed">

              <p>{faq.answer}</p>

              <button className="mt-5 w-full bg-black text-white py-3 rounded-full">
                View Projects →
              </button>

            </div>
          </div>

        </div>
      ))}
    </div>
  );
}