import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import prisma from "@/app/prismadb";
import Image from "next/image";

type Props = {};

export default async function Item({}: Props) {
  const products = await prisma.product.findMany();
  console.log({ products: products });

  if (products.length === 0) {
    return <p>Tidak ada produk</p>;
  }

  return (
    <div>
      <h1 className="py-3 text-2xl font-medium">Pakaian</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 lg:gap-14 gap-12 mt-5">
        {products.map((product, index) => (
          <div key={product.id}>
            <Link href={`/dashboard/${product.id}`}>
              <div className="relative rounded-lg">
                <Image
                  src={product.images.split(",")[0]}
                  alt={product.title}
                  width={250}
                  height={250}
                  className="w-[250px] h-[300px] object-cover object-top rounded-lg hover:scale-[1.02] transition-all "
                />
              </div>
              <div className=" flex items-center justify-between mt-4">
                <div>
                  <h1 className="text-[14px] font-medium max-w-[150px] whitespace-nowrap overflow-hidden">
                    {product.title}
                  </h1>
                  <p className="text-[13px] opacity-60 ">{product.store}</p>
                </div>
                <span className="px-2 text-[14px] font-medium bg-gray-100 rounded-lg">
                  Rp. {product.price}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
