"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { BsSliders2Vertical, BsChevronUp, BsFilter } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import cn from "@/utils/cn";
import { axiosInstance } from "@/utils/axiosIntance";

type Props = {};

export default function Filter({}: Props) {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [hexValues, setHexValues] = useState<string[]>([]);
  const [selectedHexValues, setSelectedHexValues] = useState<string[]>([]);
  const [price, setPrice] = useState({
    min: 0,
    max: 1000000,
  });

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "min" ? parseInt(e.target.value) : e.target.value;
    setPrice({
      ...price,
      [e.target.name]: value,
    });
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "max" ? parseInt(e.target.value) : e.target.value;
    setPrice({
      ...price,
      [e.target.name]: value,
    });
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedHexValues((prevColor) =>
      prevColor.includes(color)
        ? prevColor.filter((c) => c !== color)
        : [...prevColor, color]
    );
  };

  useEffect(() => {
    const getAllColors = async () => {
      try {
        const { data } = await axiosInstance.get("/api/color");
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        toast.error("Terjadi kesalahan saat mengambil data");
      }
    };
    const setHexColorValue = async () => {
      const allColors = await getAllColors();
      if (allColors) {
        const hexSet = new Set<string>();
        allColors.map((item: any) => {
          const colors = item.color.split(",");
          colors.map((color: any) => {
            const hexValue = color.replace("#", "");
            hexSet.add(hexValue);
          });
        });
        const uniqueHexValues: string[] = Array.from(hexSet);
        setHexValues(uniqueHexValues);
      }
    };
    setHexColorValue();
  }, []);

  useEffect(() => {
    const filterProduct = async () => {
      try {
        const { data } = await axiosInstance.get("/api/filter-product", {
          params: {
            categories: selectedCategories,
            size: selectedSizes,
            price: {
              min: price.min,
              max: price.max,
            },
            colors: selectedHexValues,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    filterProduct();
  });

  return (
    <section className="relative">
      <div
        className={cn(
          "md:w-[250px] border-l-[0.5px] border-r-[0.5px] transition-all ",
          {
            "max-md:w-[250px] absolute md:static z-10 bg-white": showFilter,
            "w-0 max-md:invisible absolute md:static z-10": !showFilter,
          }
        )}
      >
        <div className=" flex items-center justify-between px-5 py-4 border-b-[0.5px]">
          <h1 className="text-neutral-800">Filter</h1>
          <BsSliders2Vertical size={20} className="text-neutral-600" />
        </div>
        <div className="flex flex-col py-3 pb-5 text-sm text-neutral-600 border-b-[0.5px]">
          <span
            className={`py-3 px-5 cursor-pointer  ${
              selectedCategories.includes("Jaket") ? "bg-purple-50 " : ""
            }`}
            onClick={() => toggleCategory("Jaket")}
          >
            Jaket
          </span>
          <span
            className={`py-3 px-5 cursor-pointer  ${
              selectedCategories.includes("Mantel") ? "bg-purple-50 " : ""
            }`}
            onClick={() => toggleCategory("Mantel")}
          >
            Mantel
          </span>
          <span
            className={`py-3 px-5 cursor-pointer  ${
              selectedCategories.includes("Hoodie") ? "bg-purple-50 " : ""
            }`}
            onClick={() => toggleCategory("Hoodie")}
          >
            Hoodie
          </span>
          <span
            className={`py-3 px-5 cursor-pointer  ${
              selectedCategories.includes("Kaos") ? "bg-purple-50 " : ""
            }`}
            onClick={() => toggleCategory("Kaos")}
          >
            Kaos
          </span>
          <span
            className={`py-3 px-5 cursor-pointer  ${
              selectedCategories.includes("Jeans") ? "bg-purple-50 " : ""
            }`}
            onClick={() => toggleCategory("Jeans")}
          >
            Jeans
          </span>
          <span
            className={`py-3 px-5 cursor-pointer  ${
              selectedCategories.includes("Polo") ? "bg-purple-50" : ""
            }`}
            onClick={() => toggleCategory("Polo")}
          >
            Polo
          </span>
          <span
            className={`py-3 px-5 cursor-pointer  ${
              selectedCategories.includes("Kemeja") ? "bg-purple-50 " : ""
            }`}
            onClick={() => toggleCategory("Kemeja")}
          >
            Kemeja
          </span>
        </div>
        <div className="border-b-[0.5px] pb-10">
          <div className="flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5">
            <h1 className=" text-neutral-800">Harga</h1>
            <BsChevronUp size={18} className="text-neutral-600" />
          </div>
          <div className=" grid grid-cols-1 gap-5 px-3 overflow-hidden">
            <div className=" flex flex-col justify-center items-center">
              <label htmlFor="" className="text-[15px] opacity-75">
                Min
              </label>
              <div className=" relative">
                <span className=" absolute left-3 top-1">Rp.</span>
                <input
                  type="number"
                  name="min"
                  value={price.min}
                  onChange={handleMinChange}
                  className="w-full outline-none border rounded-lg px-2 text-center py-0.5"
                />
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <label htmlFor="" className="text-[15px] opacity-75">
                Max
              </label>
              <div className=" relative flex items-center gap-3">
                <span className=" absolute left-3">Rp.</span>
                <input
                  type="number"
                  name="Max"
                  value={price.max}
                  onChange={handleMaxChange}
                  className="w-full outline-none border text-sm rounded-lg px-2 text-center py-0.5 pl-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-[0.5px] pb-4">
          <div className="flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5">
            <h1 className=" text-neutral-800">Warna</h1>
          </div>
          <ul className=" grid grid-cols-4 px-5 gap-5">
            {hexValues.map((hexValue, index) => (
              <li
                key={index}
                className={`w-10 h-10 rounded-2xl border-neutral-300 cursor-pointer ${
                  selectedHexValues.includes(`#${hexValue}`)
                    ? "shadow-2xl opacity-25"
                    : ""
                } `}
                style={{ backgroundColor: `#${hexValue}` }}
                onClick={() => toggleColor(`#${hexValue}`)}
              ></li>
            ))}
          </ul>
        </div>
        <div className="sizes pb-10">
          <div className="flex items-center justify-between px-5 py-4  border-b-[0.5px] mb-5">
            <h1 className=" text-neutral-800">Ukuran</h1>
          </div>
          <ul className="grid grid-cols-4 px-5 gap-5">
            <li
              className={cn(
                "border-[0.5px] rounded-lg text-center text-[14px] py-0.5 cursor-pointer",
                {
                  "bg-neutral-900 text-white": selectedSizes.includes("S"),
                }
              )}
              onClick={() => toggleSize("S")}
            >
              S
            </li>
            <li
              className={cn(
                "border-[0.5px] rounded-lg text-center text-[14px] py-0.5 cursor-pointer",
                {
                  "bg-neutral-900 text-white": selectedSizes.includes("M"),
                }
              )}
              onClick={() => toggleSize("M")}
            >
              M
            </li>
            <li
              className={cn(
                "border-[0.5px] rounded-lg text-center text-[14px] py-0.5 cursor-pointer",
                {
                  "bg-neutral-900 text-white": selectedSizes.includes("L"),
                }
              )}
              onClick={() => toggleSize("L")}
            >
              L
            </li>
            <li
              className={cn(
                "border-[0.5px] rounded-lg text-center text-[14px] py-0.5 cursor-pointer",
                {
                  "bg-neutral-900 text-white": selectedSizes.includes("XL"),
                }
              )}
              onClick={() => toggleSize("XL")}
            >
              XL
            </li>
            <li
              className={cn(
                "border-[0.5px] rounded-lg text-center text-[14px] py-0.5 cursor-pointer",
                {
                  "bg-neutral-900 text-white": selectedSizes.includes("2XL"),
                }
              )}
              onClick={() => toggleSize("2XL")}
            >
              2XL
            </li>
            <li
              className={cn(
                "border-[0.5px] rounded-lg text-center text-[14px] py-0.5 cursor-pointer",
                {
                  "bg-neutral-900 text-white": selectedSizes.includes("3XL"),
                }
              )}
              onClick={() => toggleSize("3XL")}
            >
              3XL
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={() => setShowFilter((prev) => !prev)}
        className="absolute z-10 md:hidden top-[17px] right-[-52px] bg-gray-100 px-2 rounded-t-sm cursor-pointer"
      >
        <BsFilter className=" text-3xl" />
      </button>
    </section>
  );
}
