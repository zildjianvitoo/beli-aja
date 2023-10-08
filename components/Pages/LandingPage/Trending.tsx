import { cinzel } from "@/public/fonts";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Trending({}: Props) {
  return (
    <section className="bg-[#fffbf7] py-14 lg:py-4">
      <div className="container">
        <div className=" flex flex-col">
          <div className=" flex flex-col lg:flex-row  justify-between">
            <h3
              className={`${cinzel.className} text-[40px] md:text-[50px] lg:text-[64px] leading-snug font-semibold lg:w-1/2 `}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Trending Outift Minggu Ini
            </h3>
            <div className=" flex flex-col gap-8">
              <p
                className="mt-4 text-text-color-beliAja font-medium"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Temukan gaya paling trendy untuk minggu ini, outfit{" "}
                <br className="hidden sm:block" />
                terbaru yang akan membuat Anda tampil luar biasa
              </p>
              <Link
                href={"/dashboard/filter"}
                className="w-fit lg:w-fit"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <button className="px-7 py-4 font-medium bg-text-color-beliAja text-white jumbotron-button-shadow rounded-lg">
                  Lihat Semua
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
