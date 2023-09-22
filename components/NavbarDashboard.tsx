"use client";

import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { BsChevronCompactUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import cn from "@/utils/cn";

type Props = {};

export default function NavbarDashboard({}: Props) {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  return (
    <nav>
      <div className=" flex items-center justify-between py-4 relative">
        <div className="flex items-center gap-x-10 lg:gap-x-20">
          <div className=" font-semibold text-2xl ">
            <Link href={"/dashboard"}>BeliAja</Link>
          </div>
          <div className="max-md:hidden">
            <ul className="flex items-center lg:gap-x-10 gap-x-7 opacity-70 text-[15px]">
              <li>
                <Link href={"/dashboard"} className="py-3 inline-block w-full">
                  Belanja
                </Link>
              </li>
              <li>
                <Link href={"/filter"} className="py-3 inline-block w-full">
                  Filter
                </Link>
              </li>
              <li>
                <Link
                  href={"/produk-saya"}
                  className="py-3 inline-block w-full"
                >
                  Produk Saya
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <SearchBar />
          <div
            className="relative cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            <Image
              src="/vito.png"
              alt="Foto Profil"
              width={35}
              height={35}
              className="rounded-full object-cover"
            />
            <div
              className={cn("absolute bg-white z-[2] rounded-lg shadow-lg", {
                "hidden ": !showProfile,
              })}
            >
              <Link href={"/login"}>Masuk</Link>
            </div>
          </div>
          <Link href={"/keranjang"}>
            <div className=" p-2 bg-gray-100 rounded-full">
              <CiShoppingCart size={20} />
            </div>
          </Link>
          <span
            className="p-[9px] bg-gray-100 rounded-full md:hidden "
            onClick={() => setShowNavbar((prev) => !prev)}
          >
            <BsChevronCompactUp
              className={cn("transition ease-in duration-150", {
                "transform rotate-180": showNavbar,
              })}
            />
          </span>
        </div>
      </div>
      <div
        className={cn("md:hidden", {
          "pb-4 px-5": showNavbar,
          " h-0 invisible opacity-0": !showNavbar,
        })}
      >
        <ul className=" flex flex-col text-[15px] opacity-75 px-2">
          <li>
            <Link href={"/dashboard"} className="py-3 inline-block w-full">
              Belanja
            </Link>
          </li>
          <li>
            <Link href={"/filter"} className="py-3 inline-block w-full">
              Filter
            </Link>
          </li>
          <li>
            <Link href={"/produk-saya"} className="py-3 inline-block w-full">
              Produk Saya
            </Link>
          </li>
        </ul>
        <div className="flex  items-center bg-gray-100 p-2 rounded-lg my-4 py-3 ">
          <input
            type="text"
            className="outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 w-full"
            placeholder="Cari"
            autoComplete="off"
          />
          <button>
            <BiSearch size={20} className="opacity-50" />
          </button>
        </div>
      </div>
    </nav>
  );
}
