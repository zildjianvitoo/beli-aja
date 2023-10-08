import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall, FiMail } from "react-icons/fi";

import Head from "next/head";
import { cinzel } from "@/public/fonts";

export default function Kontak() {
  return (
    <>
      <Head>
        <title>Kontak Kami | BeliAja</title>
      </Head>
      <main className="overflow-x-hidden">
        <section className="bg-[#fffbf7] py-14 lg:pb-24 relative">
          <div className="container">
            <div className="flex flex-col text-center ">
              <h3
                className={`text-3xl font-semibold text-textColor lg:text-4xl ${cinzel.className}`}
              >
                Hubungi Kami
              </h3>

              <hr className="bg-primary-beliAja w-1/4 sm:w-[10%] mx-auto h-[3px] mt-3" />
              <p className=" text-lg lg:text-xl  text-text-color-beliAja max-w-lg md:mt-3 mt-10 mx-auto">
                Kami siap membantu Anda. Silakan hubungi kami untuk pertanyaan,
                saran, atau informasi lebih lanjut.
              </p>

              <div className="relative grid grid-cols-1 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-14">
                <div className="flex items-center justify-center gap-5 px-12 bg-white shadow-md py-9 rounded-xl">
                  <SlLocationPin className="text-3xl lg:text-4xl text-primary-beliAja" />
                  <div className="flex flex-col ">
                    <p className="text-lg lg:text-xl  text-[#4f4f4f] max-w-lg font-medium mx-auto">
                      123 - Jakabaring
                    </p>
                    <p className="text-lg lg:text-xl  text-[#4f4f4f] max-w-lg font-medium  mx-auto">
                      BGRN 329 - PLG
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-5 px-12 bg-white shadow-md py-9 rounded-xl">
                  <FiPhoneCall className="text-3xl lg:text-4xl text-primary-beliAja" />
                  <div className="flex flex-col ">
                    <p className="text-lg lg:text-xl  text-[#4f4f4f] max-w-lg font-medium mx-auto">
                      +628123456789
                    </p>
                    <p className="text-lg lg:text-xl  text-[#4f4f4f] max-w-lg font-medium  mx-auto">
                      0711-1234-6789
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-5 px-12 bg-white shadow-md py-9 rounded-xl">
                  <FiMail className="text-3xl lg:text-4xl text-primary-beliAja" />
                  <p className="text-lg lg:text-xl  text-[#4f4f4f] max-w-lg font-medium  mx-auto">
                    BELIAJA.com
                  </p>
                </div>
              </div>
              <div className="relative z-10 flex flex-col gap-12 px-6 mt-16 bg-white shadow-sm py-9 lg:px-12 xl:px-16 rounded-xl">
                <h3
                  className={`text-3xl font-semibold text-textColor lg:text-4xl ${cinzel.className}`}
                >
                  Ada Masukan?
                </h3>
                <div className="flex flex-col w-full gap-6 lg:flex-row ">
                  <div className="flex flex-col lg:w-1/4 gap-[28px] ">
                    <input
                      className="rounded-xl p-4 bg-[#FFf7F8] focus:outline-none focus:border-primary-beliAja focus:border"
                      placeholder="Nama"
                    />
                    <input
                      className="rounded-xl p-4 bg-[#FFf7F8] focus:outline-none focus:border-primary-beliAja focus:border"
                      placeholder="Email"
                    />
                    <input
                      className="rounded-xl p-4   bg-[#FFf7F8] focus:outline-none focus:border-primary-beliAja focus:border"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="flex flex-col h-full lg:w-3/4 ">
                    <textarea
                      className="rounded-xl p-4 px-6 bg-[#FFf7F8] focus:outline-none focus:border-primary-beliAja focus:border "
                      placeholder="Tuliskan saran dan masukanmu disini"
                      rows={8}
                    />
                  </div>
                </div>
                <a className="mx-auto w-fit">
                  <button
                    className={
                      "opacity-90 hover:opacity-100 px-7 py-3 bg-primary-beliAja text-white rounded-lg"
                    }
                  >
                    Beri Masukan
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
