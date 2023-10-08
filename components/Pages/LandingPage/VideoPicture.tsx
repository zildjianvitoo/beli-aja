import { cinzel } from "@/public/fonts";
import Image from "next/image";
import React from "react";

type Props = {};

export default function VideoPicture({}: Props) {
  return (
    <section className="bg-[#fffbf7] py-14">
      <div className="container ">
        <div className=" flex flex-col gap-8">
          <h3
            className={`${cinzel.className} text-center text-[40px] md:text-[50px] lg:text-[64px] leading-snug font-semibold `}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Foto dan Video Produk Kami
          </h3>
          <figure className="w-full relative">
            <Image
              width={1200}
              height={600}
              src={"/assets/images/landingpage-videopicture.png"}
              alt="Foto dan video Produk"
              className="mx-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
