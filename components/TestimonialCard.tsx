"use client";
import React from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

type Props = {
  testi: any;
  index: number;
  testiIndex: number;
};

export default function TestimonialCard({ testi, index, testiIndex }: Props) {
  const rating = [];

  for (let i = 0; i < testi.rating; i++) {
    rating.push(
      <AiFillStar key={i} className="text-2xl text-primary-beliAja" />
    );
  }

  return (
    <div
      className={`min-h-[400px] w-full xs:min-h-[300px] md:min-h-[308px] lg:min-h-[364px] flex flex-col justify-between bg-[#ffffff] rounded-[30px] border border-primary-beliAja py-8 px-5 duration-300 ${
        index === testiIndex
          ? "scale-100 opacity-100"
          : "scale-75 lg:scale-[0.8] opacity-50"
      }`}
    >
      <div className="relative p-2">
        <BiSolidQuoteAltLeft className="absolute top-0 left-0 text-2xl text-primary-beliAja" />
        <BiSolidQuoteAltRight className="absolute bottom-0 right-0 text-2xl text-primary-beliAja" />
        <p className="mt-6 mb-3 lg:m-6 ">{testi.review}</p>
      </div>
      <div className="flex gap-3 mt-5">
        <div className="relative rounded-full w-[20%] xs:w-[10%]">
          <img
            className="rounded-full"
            src={testi.profilePic}
            alt={`Profile Picture ${testi.name}`}
          />
        </div>
        <div>
          <h4 className="text-lg font-bold">{testi.name}</h4>
          <p className="text-sm">{testi.job}</p>
          <span className="flex mt-1">{rating}</span>
        </div>
      </div>
    </div>
  );
}
