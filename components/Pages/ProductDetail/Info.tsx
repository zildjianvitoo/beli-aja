"use client";
import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { CiShoppingCart, CiCreditCard1 } from "react-icons/ci";
import { SlTag } from "react-icons/sl";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiCubeFocusThin } from "react-icons/pi";
import { AiTwotoneEdit } from "react-icons/ai";
import ReactStars from "react-rating-star-with-type";
import Size from "../TambahProduk/Size";
import Link from "next/link";
import { useSession } from "next-auth/react";
import cn from "@/utils/cn";
import AddCart from "./AddCart";

type Props = {
  id: number;
  title: string;
  description: string;
  category: string;
  style: string;
  store: string;
  size: string;
  inventory: number;
  color: string;
  price: number;
  images: string;
  userId: number;
  // rating: number;
  // numberComments: number;
};

export default function Info({
  id,
  title,
  description,
  category,
  style,
  size,
  store,
  color,
  price,
  inventory,
  images,
  userId,
}: Props) {
  const colors = color.split(",");
  const sizes = size.split(",");
  const { data: session } = useSession();
  const currentUserId = session?.user.id;
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleSelectedSize = (size: string) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes((prevSizes: string[]) =>
        prevSizes.filter((item) => item !== size)
      );
    } else {
      setSelectedSizes((prevSizes: string[]) => [...prevSizes, size]);
    }
  };

  return (
    <div className="relative info flex flex-col ">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <h3 className="text-sm text-neutral-500">{store}</h3>
      <div className=" flex items-center space-x-12 mt-4">
        <ReactStars value={2} size={20} />
        <span className="flex items-start space-x-3">
          <FaRegCommentDots size={22} />
          <span className=" opacity-70 text-sm">154 Komen</span>
        </span>
      </div>
      <div className="font-medium mt-8 mb-3 text-[14px]">Pilih Ukuran</div>
      <ul className=" flex space-x-5">
        {sizes.map((size, index) => (
          <li
            key={index}
            className={cn(
              "py-1 px-2 border cursor-pointer text-black bg-white rounded-lg inline-block text-center ",
              {
                "bg-black text-white": selectedSizes.includes(size),
              }
            )}
            onClick={() => handleSelectedSize(size)}
          >
            {size}
          </li>
        ))}
      </ul>
      <h3 className=" font-medium mt-8 mb-3 text-[14px]">
        Warna yang tersedia
      </h3>
      {colors.map((color, index) => (
        <div
          key={index}
          className=" relative w-9 h-9 border border-neutral-400 m-1 inline-block  rounded-full"
          style={{ borderRadius: "100%", backgroundColor: color }}
        >
          <span
            className="absolute border w-[30px] h-[30px] rounded-full flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ backgroundColor: color }}
          ></span>
        </div>
      ))}
      <div className=" flex items-center space-x-10 mt-7">
        <AddCart productId={id} />
      </div>
      <hr className="w-9/12 mt-10" />
      <div className="grid grid-cols-2 gap-10 opacity-70 mt-5">
        <span className="text-sm flex items-center space-x-4">
          <span className="p-2 bg-gray-100 inline-block rounded-full">
            <CiCreditCard1 size={24} />
          </span>
          <p>Pembayaran Aman</p>
        </span>
        <span className="text-sm flex items-center space-x-4">
          <span className="p-2 bg-gray-100 inline-block rounded-full">
            <SlTag size={24} />
          </span>
          <p>Ukuran Pas</p>
        </span>
        <span className="text-sm flex items-center space-x-4">
          <span className="p-2 bg-gray-100 inline-block rounded-full">
            <LiaShippingFastSolid size={24} />
          </span>
          <p>Gratis Ongkir</p>
        </span>
        <span className="text-sm flex items-center space-x-4">
          <span className="p-2 bg-gray-100 inline-block rounded-full">
            <PiCubeFocusThin size={24} />
          </span>
          <p>Pengiriman & Pengembalian Gratis</p>
        </span>
      </div>
      {currentUserId === userId && (
        <Link href={`/edit/${id}`}>
          <span className=" absolute top-0 right-0 opacity-75 hover:opacity-100 p-2 bg-green-600 rounded-full text-white cursor-pointer">
            <AiTwotoneEdit size={24} />
          </span>
        </Link>
      )}
    </div>
  );
}
