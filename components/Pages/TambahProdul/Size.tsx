"use client";
import cn from "@/utils/cn";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  setFormData: Dispatch<SetStateAction<any>>;
};

export default function Size({ setFormData }: Props) {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

  const handleSizeButtonClick = (size: string) => {
    setSelectedSizes((prevSelectedSizes) => {
      if (prevSelectedSizes.includes(size)) {
        return prevSelectedSizes.filter((s) => s !== size);
      } else {
        return [...prevSelectedSizes, size];
      }
    });
  };

  const handleSubmit = () => {
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      size: selectedSizes.join(","),
    }));
  };
  return (
    <div>
      {sizes.map((size) => (
        <button
          type="button"
          key={size}
          className={cn(
            "border-[0.5px] rounded-lg text-center text-[14px] py-2 cursor-pointer px-3 mt-4 mb-5 mr-5",
            {
              "bg-gray-400 text-white": selectedSizes.includes(size),
            }
          )}
          onClick={() => handleSizeButtonClick(size)}
        >
          {size}
        </button>
      ))}
      <button onClick={handleSubmit}>Tambah Ukuran</button>
    </div>
  );
}
