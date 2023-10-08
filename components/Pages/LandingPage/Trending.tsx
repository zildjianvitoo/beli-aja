import { cinzel } from "@/public/fonts";
import Image from "next/image";
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
          <div className="flex flex-wrap mx-auto gap-8 mt-10">
            <Link href={"/dashboard/6"} className=" flex flex-col gap-4">
              <figure data-aos="fade-up" data-aos-delay="100">
                <Image
                  src="/assets/images/landingpage-intro1.png"
                  alt="Trending 1"
                  width={375}
                  height={375}
                  className="cursor-pointer transition-all hover:scale-105"
                />
              </figure>
              <div
                className="flex justify-between items-center"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <p className="lg:max-w-[250px]">
                  Jaket Korduroi Hangat Tebal Pakaian Luar Pria Mantel
                </p>
                <p className="text-primary-beliAja">Rp. 149.000</p>
              </div>
            </Link>
            <Link href={"/dashboard/7"} className=" flex flex-col gap-4">
              <figure data-aos="fade-up" data-aos-delay="200">
                <Image
                  src="/assets/images/landingpage-intro2.png"
                  alt="Trending 2"
                  width={375}
                  height={375}
                  className="cursor-pointer transition-all hover:scale-105"
                />
              </figure>
              <div
                className="flex justify-between items-center"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <p className="lg:max-w-[250px]">
                  Jaket Vintage 90s Luaran Jaket Pria Berbulu
                </p>
                <p className="text-primary-beliAja">Rp. 249.000</p>
              </div>
            </Link>
            <Link href={"/dashboard/8"} className=" flex flex-col gap-4">
              <figure data-aos="fade-up" data-aos-delay="300">
                <Image
                  src="/assets/images/landingpage-intro3.png"
                  alt="Trending 3"
                  width={375}
                  height={375}
                  className="cursor-pointer transition-all hover:scale-105"
                />
              </figure>
              <div
                className="flex justify-between items-center"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <p className="lg:max-w-[250px]">
                  Hoodie Putih Lengan Pendek Slim Fit
                </p>
                <p className="text-primary-beliAja">Rp. 129.000</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
