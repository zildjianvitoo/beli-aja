import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";
import prisma from "@/app/prismadb";
import { AiTwotoneEdit } from "react-icons/ai";
import { BsCartX, BsBoxSeam } from "react-icons/bs";
import DeleteProduct from "@/components/Pages/ProdukSaya/DeleteProduct";
import Image from "next/image";

type Props = {};

export default async function ProdukSaya({}: Props) {
  const session = await getServerSession(options);

  const allMyProduct = await prisma.product.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  if (allMyProduct.length === 0) {
    return (
      <main className=" relative flex items-center justify-center py-10 min-h-[60vh]">
        <BsBoxSeam
          className={"text-4xl md:text-[100px]  my-5 text-purple-600"}
        />
        <h1 className="absolute top-[80%] text-2xl text-purple-600">
          Produk Kosong
        </h1>
      </main>
    );
  }

  return (
    <main>
      <section>
        {allMyProduct.map((product) => (
          <div
            key={product.id}
            className="relative flex items-center justify-between w-8/12 px-6 mx-auto shadow-lg shadow-purple-100 p-5 rounded-lg mt-10"
          >
            <div>
              <h3 className="text-2xl mb-3">{product.title}</h3>
              <h3 className="text-2xl mb-3">Harga: {product.price}</h3>
              <h3 className="text-2xl mb-3">Kategori: {product.category}</h3>
              <h3 className="text-2xl mb-3">Jenis: {product.style}</h3>
              <DeleteProduct productId={product.id} userId={product.userId} />
            </div>
            <Link href={`/dashboard/${product.id}`}>
              <div>
                <Image
                  width={200}
                  height={200}
                  src={
                    product.images
                      .replace("[", "")
                      .replace("]", "")
                      .replace(/["]/g, "")
                      .split(",")[0]
                  }
                  alt="Foto Produk"
                  className="w-[200px] h-[200px] object-cover object-top"
                />
              </div>
            </Link>
            {session?.user.id === product.userId && (
              <Link
                href={`/dashboard/edit/${product.id}`}
                className="absolute top-0 right-0"
              >
                <span className="absolute top-0 right-0 p-2 bg-green-600 rounded-full text-white cursor-pointer">
                  <AiTwotoneEdit size={24} />
                </span>
              </Link>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
