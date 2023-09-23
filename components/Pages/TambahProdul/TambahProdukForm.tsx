"use client";
import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Size from "./Size";
import Color from "./Color";

type Props = {};

export default function TambahProdukForm({}: Props) {
  const { data: session } = useSession();
  const id = session?.user.id;

  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    style: "",
    size: "",
    inventory: "",
    color: "#fe345e",
    price: "1000",
    images: "",
    userId: id,
    store: "VitoStore",
  });

  const onFormDataValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "price"
        ? parseInt(e.target.value)
        : parseInt(e.target.value);

    const inventory =
      e.target.name === "inventory"
        ? parseInt(e.target.value)
        : parseInt(e.target.value);

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
      [e.target.name]: inventory,
    }));
  };

  return (
    <section>
      <div>
        <h1 className="text-3xl font-semibold py-6 ">Tambah Produk</h1>
        <div className="text-black mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div>
              <label htmlFor="title" className="font-medium">
                Nama produk
              </label>
              <input
                type="text"
                className="w-full h-[50px] border rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none"
                name="title"
                id="title"
                value={formData.title}
                onChange={onFormDataValueChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="category" className="font-medium">
                Kategory
              </label>
              <input
                type="text"
                className="w-full h-[50px] border rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none"
                name="category"
                id="category"
                value={formData.category}
                onChange={onFormDataValueChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="size" className="font-medium">
                Ukuran
              </label>
              <input
                type="text"
                className="w-full h-[50px] border rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none"
                name="size"
                id="size"
                value={formData.size}
                onChange={onFormDataValueChangeHandler}
              />
              <Size setFormData={setFormData} />
            </div>
            <div>
              <label htmlFor="style" className="font-medium">
                Jenis
              </label>
              <input
                type="text"
                className="w-full h-[50px] border rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none"
                name="style"
                id="style"
                value={formData.style}
                onChange={onFormDataValueChangeHandler}
              />
            </div>

            {/* <div>
              <label htmlFor="store" className="font-medium">
                Toko
              </label>
              <input
                type="text"
                className="w-full h-[50px] border rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none"
                name="store"
                id="store"
                value={formData.store}
                onChange={onFormDataValueChangeHandler}
              />
            </div> */}

            <div>
              <label htmlFor="inventory" className="font-medium">
                Stok
              </label>
              <input
                type="number"
                className="w-full h-[50px] border rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none"
                name="inventory"
                id="inventory"
                value={formData.inventory}
                onChange={handlePriceChange}
              />
            </div>
            <div>
              <label htmlFor="price" className="font-medium">
                Harga
              </label>
              <input
                type="number"
                className="w-full h-[50px] border rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none"
                name="price"
                id="price"
                value={formData.price}
                onChange={handlePriceChange}
              />
            </div>
            <div>
              <div>
                {" "}
                <label htmlFor="color" className="font-medium">
                  Warna
                </label>
                <input
                  type="text"
                  className="w-full h-[50px] border rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none"
                  name="color"
                  id="color"
                  value={formData.color}
                  onChange={onFormDataValueChangeHandler}
                />
              </div>
              <Color setFormData={setFormData} formDataColor={formData.color} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
