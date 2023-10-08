import React from "react";
import Image from "next/image";
type Props = {};

export default function Intro({}: Props) {
  return (
    <section className="py-14 lg:py-28 bg-[#fffbf7] hidden lg:block">
      <div className="container ">
        <div className=" w-full h-[300px] bg-text-color-beliAja relative">
          <div
            className="bg-secondary-beliAja w-1/2
           lg:w-1/4 h-full "
          >
            <figure
              className="absolute left-8  -bottom-1 hidden lg:block"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {" "}
              <img
                src="/assets/images/landingpage-intro.png"
                alt="Gambar intro"
                className="w-[60%] xl:w-[70%]  "
              />
            </figure>
          </div>

          <div className=" flex absolute gap-5   top-[15%] left-[10%] lg:left-1/4">
            <h3
              className="text-black lg:text-white  lg:text-[56px] tracking-tight lg:w-[70%] my-auto text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Kami Selalu Update dengan Gaya Terbaru{"'"}
            </h3>
            <figure data-aos="zoom-in" data-aos-delay="200">
              <Image
                src="/assets/images/landingpage-introvideo.png"
                alt="Gambar intro"
                width={220}
                height={220}
                className="scale-75 lg:scale-100 lg:w-[220px] lg:h-[220px]"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
