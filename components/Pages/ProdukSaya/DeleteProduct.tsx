"use client";
import { axiosInstance } from "@/utils/axiosIntance";
import { GoTrash } from "react-icons/go";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
type Props = {
  productId?: number;
  userId?: number;
};

export default function DeleteProduct({ productId, userId }: Props) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axiosInstance.delete("/api/add-product", {
        data: {
          productId: productId,
          userId: userId,
        },
      });
      router.refresh();
    } catch (error) {
      toast.error("Terdapat kesalahan saat mencoba menghapus produk");
      console.log(error);
    }
  };

  return (
    <div onClick={handleDelete} className="cursor-pointer">
      <GoTrash className="text-red-600" size={20} />
    </div>
  );
}
