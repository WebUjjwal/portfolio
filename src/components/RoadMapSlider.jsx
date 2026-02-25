"use client";

import { useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import Slider from "react-slick";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const ROADMAP = [
  {
    date: "Q3 2024",
    title: "CHR Vault Withdrawals",
    desc: "Native CHR withdrawals to EVM chains.",
  },
  {
    date: "Sept 18 / 2024",
    title: "TOKEN2049 Singapore",
    desc: "Unveiling the next phase of Chromia.",
  },
  {
    date: "Q3 2024",
    title: "Native Staking V1",
    desc: "Stake on Chromia, Ethereum & BSC.",
  },

  {
    date: "Q3 2024",
    title: "Native Staking V1",
    desc: "Stake on Chromia, Ethereum & BSC.",
  },
  {
    date: "Q3 2024",
    title: "CHR Vault Withdrawals",
    desc: "Native CHR withdrawals to EVM chains.",
  },
  {
    date: "Sept 18 / 2024",
    title: "TOKEN2049 Singapore",
    desc: "Unveiling the next phase of Chromia.",
  },
  {
    date: "Q3 2024",
    title: "Native Staking V1",
    desc: "Stake on Chromia, Ethereum & BSC.",
  },

  {
    date: "Q3 2024",
    title: "Native Staking V1",
    desc: "Stake on Chromia, Ethereum & BSC.",
  },
];

export default function Roadmap() {
  const [activeIndex, setActiveIndex] = useState(0);

  function NextArrow({ onClick }) {
    return (
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer 
                 bg-black text-white p-3 rounded-full"
        onClick={onClick}
      >
        <MdArrowForwardIos />
      </div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer 
                 bg-black text-white p-3 rounded-full"
        onClick={onClick}
      >
        <MdArrowBackIos />
      </div>
    );
  }

  const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: "40px",
  afterChange: (current) => setActiveIndex(current),
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  return (
    <section>
      <div className="mx-auto">
        <Slider {...settings}>
          <div className="max-[767px]:hidden!">
            <svg
              viewBox="0 0 710 122"
              fill="none"
              className={` w-180! absolute -top-9.25
             `}
            >
              <path
                d="M710 121H549.348c-58.067 0-68.583-12.928-85.772-38.71-17.218-25.824-34.436-38.728-51.654-38.71-17.194.019-34.387 12.922-51.581 38.71-17.324 25.984-33.584 38.708-58.746 38.708-29.034 0-47.159-20.272-73.641-59.998-53.331-80-106.662-80-159.992 0C41.642 100.483 15.32 120.479-11 120.99"
                stroke="#6B21A8"
                strokeWidth=".6"
                fill="none"
              />
            </svg>

            <div className="absolute -z-10 left-178.75 top-21.25 right-0 w-full h-px bg-purple-800"></div>
          </div>
          {ROADMAP.map((item, i) => (
            // eslint-disable-next-line react/jsx-key
            <div className={activeIndex === i ? `opacity-100` : `opacity-40`}>
              <div className="text-center">
                <div style={{fontFamily: "Barriecito"}} className="bg-[#4fcd4c] w-fit px-3 py-1 rounded-[50px] text-[16px] font-medium mx-auto">
                  Q1 / 2025
                </div>

                <i className="icon_cover bg-[#daead3] w-12 h-12 flex items-center justify-center rounded-full mx-auto my-7.5">
                  {activeIndex === i ? (
                    <GoCheckCircleFill className="text-[#4fcd4c] text-[24px]" />
                  ) : (
                    <FaRegCheckCircle className="text-[#4fcd4c] text-[24px]" />
                  )}
                </i>

                <h3
                  style={{fontFamily: "Barriecito"}}
                  className="text-[35px] mb-5"
                >
                  Chromia Asgard Upgrade
                </h3>
                <p className="text-[20px]">
                  Asgard adds support for ‘Extensions’, customized containers
                  that expand Chromia’s capabilities. Extensions will be piloted
                  with ecosystem partners before public release.
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
