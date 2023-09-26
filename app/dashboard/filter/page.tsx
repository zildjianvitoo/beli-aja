"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Filter from "@/components/Pages/Filter/Filter";
import Image from "next/image";

type Props = {};

const Page = (props: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [hexValues, setHexValues] = useState<string[]>([]);
  const [selectedHexValues, setSelectedHexValues] = useState<string[]>([]);
  const [price, setPrice] = useState({
    min: 0,
    max: 1000000,
  });

  const [response, setResponse] = useState<any[]>([]);

  useEffect(() => {
    const filterProduct = async () => {
      console.log(selectedSizes);
      try {
        const { data } = await axios.get("/api/filterproduct", {
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
        setResponse(data);
      } catch (error) {
        console.log(error);
      }
    };
    filterProduct();
  }, [selectedCategories, selectedSizes, selectedHexValues, price]);

  return (
    <div>
      <hr />
      <div className="flex">
        <div className="">
          <Filter
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedSize={selectedSizes}
            setSelectedSize={setSelectedSizes}
            hexValues={hexValues}
            setHexValues={setHexValues}
            selectedHexValues={selectedHexValues}
            setSelectedHexValues={setSelectedHexValues}
            price={price}
            setPrice={setPrice}
          />
        </div>
        <div className="pl-16 md:pl-10 lg:px-6 xl:px-12">
          <h1 className="py-3 text-2xl font-medium">Pakaian yang difilter</h1>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 lg:gap-14 gap-12 mt-5">
            {response.map((product: any) => (
              <div key={product.id}>
                <Link href={`/dashboard/${product.id}`}>
                  <div className="relative rounded-lg">
                    <Image
                      src={product.images.split(",")[0]}
                      width={250}
                      height={300}
                      className="w-[250px] h-[300px] object-cover object-top rounded-lg"
                      alt="Foto produk"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <h1 className="text-[14px] font-medium max-w-[150px] whitespace-nowrap overflow-hidden">
                        {product.title}
                      </h1>
                      <p className="text-[13px] opacity-60">{product.store}</p>
                    </div>
                    <span className="px-2 font-medium bg-gray-100 rounded-lg">
                      Rp. {product.price}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
