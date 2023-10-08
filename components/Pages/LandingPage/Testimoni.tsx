"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { testimoniList } from "@/utils/testimoniList";
import TestimonialCard from "@/components/TestimonialCard";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { cinzel } from "@/public/fonts";

export default function Testimoni() {
  const [testiIndex, setTestiIndex] = useState(0);
  // const breakPoint = useBreakpoint();

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0",
    class: "flex justify-center",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: any, next: any) => setTestiIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <section className="bg-[#fffbf7] py-14">
      <div className="container ">
        <div className="max-w-[66rem] flex flex-col justify-center gap-12  mx-auto">
          <h3
            className={`${cinzel.className} text-center text-[40px] md:text-[50px] lg:text-[64px] leading-snug font-semibold `}
          >
            {" "}
            Cerita dari Klien Kami
          </h3>
          <Slider className="flex justify-center gap-4" {...settings}>
            {testimoniList.map((testi, index) => (
              <TestimonialCard
                key={index}
                testi={testi}
                index={index}
                testiIndex={testiIndex}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <MdOutlineNavigateNext
      className="absolute right-0 z-10 text-3xl duration-300 cursor-pointer  active:scale-75 top-1/2"
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <MdOutlineNavigateBefore
      className="absolute left-0 z-10 text-3xl duration-300 cursor-pointer text-primary-beliAja text-secondary-color active:scale-75 top-1/2"
      onClick={onClick}
    />
  );
};
