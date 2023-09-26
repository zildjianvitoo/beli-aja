"use client";
import React, { useState, useEffect } from "react";
import { BsSliders2Vertical, BsChevronUp, BsFilter } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import cn from "@/utils/cn";

type Props = {
  selectedCategories: any;
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSize: string[];
  setSelectedSize: React.Dispatch<React.SetStateAction<string[]>>;
  hexValues: string[];
  setHexValues: React.Dispatch<React.SetStateAction<string[]>>;
  selectedHexValues: string[];
  setSelectedHexValues: React.Dispatch<React.SetStateAction<string[]>>;
  price: { min: number; max: number };
  setPrice: React.Dispatch<React.SetStateAction<{ min: number; max: number }>>;
};

const Filter = (props: Props) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handelMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "min" ? parseInt(e.target.value) : e.target.value;
    props.setPrice({
      ...props.price,
      [e.target.name]: value,
    });
  };

  const handlMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "max" ? parseInt(e.target.value) : e.target.value;
    props.setPrice({
      ...props.price,
      [e.target.name]: value,
    });
  };

  const toggleCategory = (category: string) => {
    props.setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const togglesize = (size: string) => {
    props.setSelectedSize((prevSize) =>
      prevSize.includes(size)
        ? prevSize.filter((c) => c !== size)
        : [...prevSize, size]
    );
  };

  const toggleColor = (color: string) => {
    props.setSelectedHexValues((prevColor) =>
      prevColor.includes(color)
        ? prevColor.filter((c) => c !== color)
        : [...prevColor, color]
    );
  };

  useEffect(() => {
    const getAllColors = async () => {
      try {
        const { data } = await axios.get("/api/color");
        return data;
      } catch (error) {
        console.error("Error", error);
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
        props.setHexValues(uniqueHexValues);
      }
    };
    setHexColorValue();

    // return () => setHexColorValue();
  }, []);

  const allHexValue = props.hexValues;

  return (
    <div className="relative">
      <div
        className={cn(
          " z-[5] fixed top-0 left-0 sm:hidden bg-[#00000084] min-h-screen w-full",
          {
            "hidden ": !showFilter,
          }
        )}
        onClick={() => setShowFilter(false)}
      />
      <div
        className={`md:w-[250px] border-l-[0.5px] border-r-[0.5px] transition-all ${
          showFilter
            ? "max-md:w-[250px] absolute md:static z-10 bg-white "
            : "w-0 max-md:invisible absolute md:static z-10"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b-[0.5px]">
          <h1 className="text-neutral-800">Filter</h1>
          <BsSliders2Vertical
            size={20}
            className="text-neutral-600"
            onClick={() => setShowFilter(false)}
          />
        </div>
        <div className="flex flex-col py-3 pb-5 text-sm text-neutral-600 border-b-[0.5px] ">
          <span
            className={`py-3 px-5 cursor-pointer hover:bg-purple-50 ${
              props.selectedCategories.includes("Jaket") ? "bg-purple-50" : ""
            }`}
            onClick={() => toggleCategory("Jaket")}
          >
            Jaket
          </span>
          <span
            className={`py-3 px-5 cursor-pointer hover:bg-purple-50 ${
              props.selectedCategories.includes("Mantel") ? "bg-purple-50" : ""
            }`}
            onClick={() => toggleCategory("Mantel")}
          >
            Mantel
          </span>
          <span
            className={`py-3 px-5 cursor-pointer hover:bg-purple-50 ${
              props.selectedCategories.includes("Hoodie") ? "bg-purple-50" : ""
            }`}
            onClick={() => toggleCategory("Hoodie")}
          >
            Hoodie
          </span>
          <span
            className={`py-3 px-5 cursor-pointer hover:bg-purple-50 ${
              props.selectedCategories.includes("Kaos") ? "bg-purple-50" : ""
            }`}
            onClick={() => toggleCategory("Kaos")}
          >
            Kaos
          </span>
          <span
            className={`py-3 px-5 cursor-pointer hover:bg-purple-50 ${
              props.selectedCategories.includes("Jeans") ? "bg-purple-50" : ""
            }`}
            onClick={() => toggleCategory("Jeans")}
          >
            Jeans
          </span>
          <span
            className={`py-3 px-5 cursor-pointer hover:bg-purple-50 ${
              props.selectedCategories.includes("Polo") ? "bg-purple-50" : ""
            }`}
            onClick={() => toggleCategory("Polo")}
          >
            Polo
          </span>
          <span
            className={`py-3 px-5 cursor-pointer hover:bg-purple-50 ${
              props.selectedCategories.includes("Kemeja") ? "bg-purple-50" : ""
            }`}
            onClick={() => toggleCategory("Kemeja")}
          >
            Kemeja
          </span>
        </div>
        <div className="border-b-[0.5px] pb-10">
          <div className="flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5">
            <h1 className="text-neutral-800">Harga</h1>
            <BsChevronUp size={18} className="text-neutral-600" />
          </div>
          <div className="grid grid-cols-1 gap-5 px-5 overflow-hidden">
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="" className="text-[15px] opacity-75">
                Min
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1">Rp.</span>
                <input
                  className="w-full outline-none border-[1px] rounded-lg px-2 text-center py-[2px]"
                  type="number"
                  name="min"
                  onChange={handelMinChange}
                  value={props.price.min}
                  id=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="" className="text-[15px] opacity-75">
                Max
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1">Rp.</span>
                <input
                  className="w-full outline-none border-[1px] rounded-lg px-2 text-center py-[2px]"
                  type="number"
                  name="max"
                  onChange={handlMaxChange}
                  value={props.price.max}
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-[0.5px]">
          <div className="flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5">
            <h1 className="text-neutral-800">Colors</h1>
          </div>
          <ul className="grid grid-cols-4 px-5 gap-5 mb-4">
            {allHexValue.map((hexvalue, index) => (
              <li
                key={index}
                className={`w-[40px] h-[40px] rounded-2xl border-[0.5px] border-neutral-300 cursor-pointer ${
                  props.selectedHexValues.includes(`#${hexvalue}`)
                    ? "shadow-2xl opacity-25"
                    : ""
                }`}
                style={{ backgroundColor: `#${hexvalue}` }}
                onClick={() => toggleColor(`#${hexvalue}`)}
              ></li>
            ))}
          </ul>
        </div>
        <div className="sizes pb-10">
          <div className="flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5">
            <h1 className="text-neutral-800">sizes</h1>
          </div>
          <ul className="grid grid-cols-4 px-5 gap-5">
            <li
              className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
                props.selectedSize.includes("S")
                  ? "bg-neutral-900 text-white"
                  : ""
              }`}
              onClick={() => togglesize("S")}
            >
              S
            </li>
            <li
              className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
                props.selectedSize.includes("M")
                  ? "bg-neutral-900 text-white"
                  : ""
              }`}
              onClick={() => togglesize("M")}
            >
              M
            </li>
            <li
              className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
                props.selectedSize.includes("L")
                  ? "bg-neutral-900 text-white"
                  : ""
              }`}
              onClick={() => togglesize("L")}
            >
              L
            </li>
            <li
              className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
                props.selectedSize.includes("XL")
                  ? "bg-neutral-900 text-white"
                  : ""
              }`}
              onClick={() => togglesize("XL")}
            >
              XL
            </li>
            <li
              className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
                props.selectedSize.includes("2XL")
                  ? "bg-neutral-900 text-white"
                  : ""
              }`}
              onClick={() => togglesize("2XL")}
            >
              2XL
            </li>
            <li
              className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${
                props.selectedSize.includes("3XL")
                  ? "bg-neutral-900 text-white"
                  : ""
              }`}
              onClick={() => togglesize("3XL")}
            >
              3XL
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={() => setShowFilter(!showFilter)}
        className="absolute md:hidden top-[17px] right-[-52px] bg-gray-100 px-2 rounded-t-sm cursor-pointer"
      >
        <BsFilter className=" text-3xl" />
      </div>
    </div>
  );
};

export default Filter;
