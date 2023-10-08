"use client";
import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Size from "./Size";
import Color from "./Color";
import Para from "./Para";
import { toast } from "react-toastify";
import ImageUpload from "./ImageUpload";
import { axiosInstance } from "@/utils/axiosIntance";

type Props = {};

export default function TambahProdukForm({}: Props) {
  const { data: session } = useSession();
  const id = session?.user.id;

  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "<div><p>Masukkan deskripsimu disini</p></div>",
    category: "",
    style: "",
    size: "",
    inventory: "",
    color: "#fe345e",
    price: 1000,
    images: "",
    userId: id,
    store: "BeliAja",
  });
  const [Description, setDescription] = useState<string>("");
  const [info, setInfo] = useState<any>();
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    setFormData({
      ...formData,
      description: Description,
      images: imgUrls.toString(),
      userId: id,
    });
  }, [imgUrls]);

  const handleImageChange = () => {
    const stringImages = JSON.stringify(imgUrls);
    setFormData({
      ...formData,
      images: stringImages,
      description: Description,
      userId: id,
    });
  };

  const onFormDataValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    handleImageChange();
    try {
      const res = await axiosInstance.post("/api/add-product", formData);
      console.log(res);
      toast.success("Berhasil menambahkan produk");
      router.push("/dashboard/filter");
    } catch (error) {
      toast.error("Terjadi error saat menambahkan produk");
      console.log(error);
    }
  };

  return (
    <section className="pt-6 pb-14">
      <form onSubmit={onSubmitHandler} className="px-6 lg:px-0">
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
        <label htmlFor="" className="mt-10 inline-block font-medium">
          Description tentang produkmu
        </label>
        <Para
          setDescriptions={setDescription}
          description={formData.description}
        />

        <label htmlFor="" className="mt-10 inline-block font-medium">
          Unggah Foto Produk
        </label>
        <ImageUpload
          info={info}
          updateInfo={setInfo}
          imgUrls={imgUrls}
          setImgUrls={setImgUrls}
          handleImageChange={handleImageChange}
        />
        <button
          type="submit"
          className="text-white mt-10 border bg-purple-500 rounded-lg px-5 p-2 lg:w-1/4"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
