"use client";
import cn from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";

type Props = {
  imageUrls: string;
};

export default function ImageGallery({ imageUrls }: Props) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const urlArray = imageUrls.split(",");

  return (
    <div className="images grid grid-cols-1 place-items-center md:grid-cols-7 ">
      <div className="all images order-last mt-5 md:order-first flex gap-4 md:gap-0  md:flex-col md:col-span-2 justify-center ">
        {urlArray.map((url, index) => (
          <div key={index} className=" image relative rounded-lg ">
            <Image
              width={70}
              height={70}
              src={url}
              alt={`Gambar ${index}`}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "w-[70px] h-[70px] rounded-lg mb-3 p-1 object-cover border border-purple-200 object-top cursor-pointer",
                {
                  "border border-purple-500": selectedImage === index,
                }
              )}
            />
          </div>
        ))}
      </div>
      <div className="selected-image md:col-span-5">
        <Image
          src={urlArray[selectedImage]}
          alt={"Gambar yg dipilih"}
          width={600}
          height={600}
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-auto md:h-[450px] lg:h-[500px] object-cover object-top rounded-lg"
        />
      </div>
    </div>
  );
}
