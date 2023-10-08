"use client";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CiShoppingCart, CiCreditCard1 } from "react-icons/ci";
import { toast } from "react-toastify";
import { axiosInstance } from "@/utils/axiosIntance";

type Props = {
  productId: number;
};

export default function AddCart({ productId }: Props) {
  const { data: session } = useSession();
  const userId = session?.user.id;
  const router = useRouter();

  const handleCart = async () => {
    if (!session?.user) {
      toast.error("Anda harus login terlebih dahulu");
      router.push("/masuk");
      return;
    }
    try {
      const { data } = await axiosInstance.post("/api/cart", {
        productId: productId,
        userId: userId,
      });
      toast.success("Berhasil menambah produk kedalam keranjang");
      router.push("/dashboard/keranjang");
    } catch (error) {
      console.log(error);
      toast.error("Terjadi kesalahan saat menambah produk");
    }
  };

  return (
    <button
      className="flex items-center space-x-2 bg-primary-beliAja text-white px-6 py-2 rounded-full cursor-pointer"
      onClick={handleCart}
    >
      <span>
        <CiShoppingCart size={24} />
      </span>
      <span className="text-sm">Tambah ke keranjang</span>
    </button>
  );
}
