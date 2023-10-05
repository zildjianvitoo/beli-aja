import React from "react";
import prisma from "@/app/prismadb";
import Link from "next/link";
import { BsCartX, BsCheckAll } from "react-icons/bs";
import Image from "next/image";
import Button from "@/components/Button";

type Props = { userId: number };

export default async function AllPurchased({ userId }: Props) {
  const purchasedProduct = await prisma.purchased.findMany({
    where: {
      userId: userId,
    },
  });

  const purchasedProductPromises = purchasedProduct.map((purchasedproduct) =>
    prisma.product.findUnique({
      where: {
        id: purchasedproduct.productId,
      },
    })
  );
  const purchasedProducts = await Promise.all(purchasedProductPromises);

  if (purchasedProduct.length === 0) {
    <div className=" relative flex items-center justify-center py-10 min-h-[60vh]">
      <BsCartX className={"text-4xl md:text-[100px]  my-5 text-purple-600"} />
      <h1 className="absolute top-[80%] text-2xl text-purple-600">
        Pmebelian Kosong
      </h1>
    </div>;
  }

  return (
    <section className="mt-14">
      {purchasedProducts.map((purchasedproduct) => (
        <div
          key={purchasedproduct?.id}
          className="flex items-center gap-y-6 justify-start flex-col sm:flex-row md:justify-between  shadow-lg w-8/12 mx-auto p-5 rounded-lg mt-6"
        >
          <div className=" mr-auto">
            <h1 className="text-2xl mb-3">{purchasedproduct?.title}</h1>
            <h2 className="mb-2 text-neutral-800">
              Harga: {purchasedproduct?.price}
            </h2>
            <h3 className="text-sm mb-2 text-neutral-600">
              Kategori: {purchasedproduct?.category}
            </h3>
            <h3 className="text-sm mb-2 text-neutral-600">
              Jenis: {purchasedproduct?.style}
            </h3>

            <p className="text-green-600">
              <BsCheckAll size={20} className="text-green-600" />
              Dibeli
            </p>
          </div>
          <Link href={`/dashboard/${purchasedproduct?.id}`}>
            <div>
              <Image
                src={
                  purchasedproduct?.images
                    .replace("[", "")
                    .replace("]", "")
                    .replace(/["]/g, "")
                    .split(",")[0]!
                }
                width={200}
                height={200}
                alt="Foto produk"
                className="object-cover w-[200px] h-[200px] object-top rounded-lg"
              />
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
