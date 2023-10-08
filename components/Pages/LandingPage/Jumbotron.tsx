"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
// import Button from "../Button/Button";
import AOS from "aos";
import { cinzel, cinzelDecorative } from "@/public/fonts";

export default function Jumbotron() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className=" bg-[#fffbf7]">
      <div className="container ">
        <div className="flex flex-col items-center gap-y-12 gap-x-16 lg:gap-x-24 md:flex-row">
          <div className="flex flex-col">
            <h1
              className={`text-[40px] lg:text-[62px] xl:text-[80px] font-bold leading-normal sm:leading-relaxed text-text-color-beliAja ${cinzel.className}`}
              data-aos="fade-right"
            >
              Pakaian <span className={`${cinzelDecorative.className}`}>T</span>
              rend <br /> Untuk Pria.
            </h1>
            <p
              className="mt-4 text-text-color-beliAja font-medium"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Pakaian Terbaru dan Terkini untuk Pria yang Tampil Trendi <br />{" "}
              dan Stylish. Temukan Gaya Anda di Sini
            </p>
            <div className=" flex gap-4 mt-10">
              <Link
                href={"/dashboard/filter"}
                className="w-fit lg:w-fit"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <button className="px-5 py-3 font-medium bg-text-color-beliAja text-white jumbotron-button-shadow rounded-lg">
                  Lihat Semua
                </button>
              </Link>
              <Link
                href={"/dashboard/filter"}
                className=" w-fit lg:w-fit"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <button className="px-7 py-3 bg-transparent text-black hover:bg-black hover:text-white border-[2px] border- font-medium hover:border-none border-text-color-beliAja hover:jumbotron-button-shadow rounded-lg">
                  Belanjang
                </button>
              </Link>
            </div>
          </div>

          <div className="relative mt-4 sm:mt-0">
            <figure data-aos="zoom-in">
              <Image
                src={"/assets/images/landingpage-jumbotron.jpg"}
                alt="Jumbotron Image"
                width={530}
                height={610}
                priority={true}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
