"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import { PiStethoscopeDuotone } from "react-icons/pi";
import { GrClose } from "react-icons/gr";
import { outfit } from "@/public/fonts";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/dashboard/filter",
    name: "Produk",
  },
  {
    path: "/tentang-kami",
    name: "Tentang Kami",
  },
  {
    path: "/kontak",
    name: "Kontak",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const headerRef = useRef<HTMLHeadingElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList?.add("sticky-navbar");
      } else {
        headerRef.current?.classList?.remove("sticky-navbar");
      }
    });
  };

  useEffect(() => {
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const toggleMenu = () => {
    menuRef?.current?.classList.toggle("show-menu");
  };

  return (
    <header className={`flex items-center header`} ref={headerRef}>
      <div className="container ">
        <div className="flex items-center justify-between  relative lg:border-b  lg:border-primary-beliAja">
          <div className="flex ">
            <h3 className={`font-semibold text-[24px] ${outfit.className} `}>
              BeliAja.
            </h3>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center menu gap-[2.7rem]">
              <GrClose className="absolute block text-2xl top-9 right-7 lg:hidden" />

              {navLinks.map((link, index) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`font-medium ${
                      pathname === link.path
                        ? "text-primary-beliAja "
                        : "text-[#787878]    hover:text-primary-beliaja  "
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link href={"/"}>
                <figure className="w-[35px] h-[35px] relative rounded-full">
                  <Image
                    src={"/assets/images/avatar-icon.png"}
                    alt="foto profil pengguna"
                    fill
                    className="rounded-full"
                  />
                </figure>
              </Link>
            </div>
            <div className=" flex gap-3">
              <Link
                href={"/masuk"}
                className="border rounded-full border-text-color-beliAja p-2 cursor-pointer"
              >
                <AiOutlineUser size={20} className="text-[#5f5f5f]" />
              </Link>
              <Link
                href={"/dashboard/filter"}
                className="border rounded-full border-text-color-beliAja p-2 cursor-pointer"
              >
                <AiOutlineShoppingCart size={20} className="text-[#5f5f5f]" />
              </Link>
            </div>
            <span className="lg:hidden" onClick={toggleMenu}>
              <BiMenu className="w-8 h-8 cursor-pointer " />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
