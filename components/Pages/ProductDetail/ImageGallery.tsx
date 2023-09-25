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
    <div className="images grid grid-cols-7">
      <div className="all images flex flex-col col-span-2 justify-center">
        {urlArray.map((url, index) => (
          <div key={index} className=" image relative rounded-lg">
            <Image
              width={70}
              height={70}
              src={url}
              alt={`Gambar ${index}`}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "w-[70px] h-[70px] rounded-lg mb-3 p-1 object-cover border border-purple-200 object-top",
                {
                  "border border-purple-500": selectedImage === index,
                }
              )}
            />
          </div>
        ))}
      </div>
      <div className="selected-image col-span-5">
        <Image
          src={urlArray[selectedImage]}
          alt={"Gambar yg dipilih"}
          width={600}
          height={600}
          className="w-auto h-[600px] object-cover object-top rounded-lg"
        />
      </div>
    </div>
  );
}
