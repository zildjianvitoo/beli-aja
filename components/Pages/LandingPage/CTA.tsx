import { cinzel } from "@/public/fonts";
import Image from "next/image";
import React from "react";

type Props = {};

export default function CTA({}: Props) {
  return (
    <section className="bg-[#fffbf7] py-14">
      <div className="container">
        <div className="flex flex-col">
          <h3
            className={`${cinzel.className} text-[40px] md:text-[50px] lg:text-[64px] leading-snug font-semibold lg:w-[70%] xl:w-1/2 `}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Gaya 90s Classic Ide Outfit Hariini
          </h3>
          <div className="mt-10 bg-primary-beliAja relative flex">
            <div className="flex lg:gap-8 p-12 lg:p-20 pb-24 lg:pb-32 xl:pb-40 ">
              {" "}
              <div className="flex flex-col ">
                <span className="w-[2px] h-[210px] bg-white "></span>
                <div className="border border-white rounded-full mt-3 p-1 -translate-x-3 w-fit">
                  <div className="bg-white w-4 h-4 rounded-full" />
                </div>
                <p className="text-white text-sm max-w-[100px] mt-1 -translate-x-3 font-light">
                  Koleksi Terbaru Kami
                </p>
              </div>
              <figure
                className="hidden sm:block"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  width={600}
                  height={300}
                  src={"/assets/images/landingpage-cta1.png"}
                  alt="90s classic outfit"
                />
              </figure>
            </div>
            <figure
              className="mt-6 pr-5 xl:absolute  xl:right-24 sm:hidden xl:block"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Image
                width={372}
                height={600}
                src={"/assets/images/landingpage-cta2.png"}
                alt="90s classic outfit"
                className="w-[200px] xl:w-[372px] xl:-translate-y-[220px] "
              />
            </figure>
          </div>
          <div
            className=" sm:p-10 sm:-mt-32 sm:relative "
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex xl:gap-20 text-center py-10 justify-center bg-white shadow-md">
              <div className="flex flex-col xs:px-5 sm:px-10 xl:px-20 border-r border-primary-beliAja ">
                <h3 className="text-[24px] xs:text-[30px] sm:text-[46px] md:text-[56px] lg:text-[71px] font-semibold">
                  20k+
                </h3>
                <p className="text-center">Kepercayaan Pengguna</p>
              </div>
              <div className="flex flex-col xs:px-5 sm:px-10 xl:pr-24 xl:px-20 border-r border-primary-beliAja  ">
                <h3 className="text-[24px] xs:text-[30px] sm:text-[46px] md:text-[56px] lg:text-[71px] font-semibold mx-auto">
                  70k+
                </h3>
                <p className="text-center">Penjualan Laris</p>
              </div>
              <div className="flex flex-col xs:px-5 sm:px-10 xl:px-20">
                <h3 className="text-[24px] xs:text-[30px] sm:text-[46px] md:text-[56px] lg:text-[71px] font-semibold">
                  12k+
                </h3>
                <p className="text-center">Produk Berkualitas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
