"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { CiLogin, CiShoppingCart } from "react-icons/ci";
import { BsChevronCompactUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";
import cn from "@/utils/cn";
import { signOut, useSession } from "next-auth/react";

type Props = {};

export default function NavbarDashboard({}: Props) {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const { data: session } = useSession();

  const onSignOutHandler = () => {};

  // const SignOut = () => {
  //   return (

  //   );
  // };
  return (
    <nav className="px-5 bg-white relative top-0 left-0  z-[100]">
      <div className=" flex items-center justify-between py-4 ">
        <div className="flex items-center gap-x-10 lg:gap-x-20">
          <div className=" font-semibold text-2xl ">
            <Link href={"/dashboard/filter"}>BeliAja</Link>
          </div>
          <div className="max-md:hidden">
            <ul className="flex items-center lg:gap-x-10 gap-x-7 opacity-70 text-[15px]">
              <li>
                <Link
                  href={"/dashboard/filter"}
                  className="py-3 inline-block w-full"
                >
                  Belanja
                </Link>
              </li>
              <li>
                <Link
                  href={"/dashboard/filter"}
                  className="py-3 inline-block w-full"
                >
                  Filter
                </Link>
              </li>
              {/* {session?.user && (
                <li>
                  <Link
                    href={"/dashboard/produk-saya"}
                    className="py-3 inline-block w-full"
                  >
                    Produk Saya
                  </Link>
                </li>
              )} */}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <SearchBar />
          {session?.user ? (
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
                  "-translate-x-10": session?.user,
                })}
              >
                <ul className="py-5 px-1 text-neutral-600 overflow-x-hidden">
                  <li className="whitespace-nowrap hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer">
                    {session?.user.name}
                  </li>
                  {/* <li className="whitespace-nowrap hover:text-neutral-900 hover:bg-gray-100 px-5 py-2 cursor-pointer">
                    <Link href={"/dashboard/tambah-produk"}>Tambah Produk</Link>
                  </li> */}
                  <li
                    onClick={() => signOut()}
                    className="whitespace-nowrap text-red-400 hover:text-red-600 px-5 py-2 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link href={"/masuk"}>
              <CiLogin className="text-3xl cursor-pointer" />
            </Link>
          )}
          <Link href={"/dashboard/keranjang"}>
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
            <Link
              href={"/dashboard/filter"}
              className="py-3 inline-block w-full"
            >
              Filter
            </Link>
          </li>
          {/* {session?.user && (
            <li>
              <Link
                href={"/dashboard/produk-saya"}
                className="py-3 inline-block w-full"
              >
                Produk Saya
              </Link>
            </li>
          )} */}
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
