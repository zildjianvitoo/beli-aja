"use client";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  MouseEvent,
} from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

type Props = {
  info: any;
  updateInfo: Dispatch<SetStateAction<any>>;
  imgUrls: string[];
  setImgUrls: Dispatch<SetStateAction<string[]>>;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function ImageUpload({
  info,
  updateInfo,
  imgUrls,
  setImgUrls,
  handleImageChange,
}: Props) {
  const onUpload = (result: any) => {
    updateInfo(result.info.secure_url);
    const newImageUrl = result.info.secure_url;
    setImgUrls((prevImgUrls) => [...prevImgUrls, newImageUrl]);
    handleImageChange(result);
  };
  const handleDeleteImage = (index: number) => {
    setImgUrls((prevImgUrls) => {
      const updateImageUrls = [...prevImgUrls];
      updateImageUrls.splice(index, 1);
      return updateImageUrls;
    });
  };

  return (
    <div>
      <div className="mb-10">
        <CldUploadWidget uploadPreset="zidn9ahm" onUpload={onUpload}>
          {({ open }: any) => {
            function handleOnClick(e: MouseEvent<HTMLButtonElement>) {
              e.preventDefault();
              open();
            }
            return (
              <button
                type="button"
                className="border rounded-lg py-2 px-5 hover:border-pink-500"
                onClick={handleOnClick}
              >
                Unggah
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3">
        {imgUrls?.map((image, index) => (
          <div key={index} className="flex flex-col justify-center">
            <Image
              src={image}
              alt="Foto produk"
              width={250}
              height={300}
              className="object-cover object-top w-[250px] h-[300px]"
            />
            <button
              type="button"
              className="border rounded-lg p-1 px-2 mt-5 text-red-500"
              onClick={() => handleDeleteImage(index)}
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
