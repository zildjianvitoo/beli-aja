"use client";
import axios from "axios";
import { GoTrash } from "react-icons/go";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Props = {
  productId: number;
  userId?: number;
};

export default function DeleteCart({ productId, userId }: Props) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete("/api/cart", {
        data: {
          productId: productId,
          userId: userId,
        },
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Terjadi Kesalahan saat menghapus produk");
    }
  };

  return (
    <div className="cursor-pointer mt-3 " onClick={handleDelete}>
      <GoTrash
        className="text-red-500 transition-all hover:scale-105"
        size={20}
      />
    </div>
  );
}
