import React from "react";
import prisma from "@/app/prismadb";
import Link from "next/link";
import Image from "next/image";
import DeleteCart from "./DeleteCart";
import Button from "@/components/Button";

type Props = {
  userId: number;
};

export default async function AllCartProduct({ userId }: Props) {
  console.log(userId);
  const allCartProduct = await prisma.cart.findMany({
    where: {
      userId: userId,
    },
  });

  const cartProductPromises = allCartProduct.map((cartProduct) =>
    prisma.product.findUnique({
      where: {
        id: cartProduct.productId,
      },
    })
  );

  const cartProducts = await Promise.all(cartProductPromises);

  const allIds = allCartProduct.map((item) => item.productId);

  if (cartProducts.length === 0) {
    return (
      <div className=" relative flex items-center justify-center">
        <Image src={"/assets/empty.png"} />
        <h1 className="absolute top-[80%] text-2xl text-purple-600">
          Keranjang Kosong
        </h1>
      </div>
    );
  }
  return (
    <div className="mt-14">
      {cartProducts.map((cartProduct) => (
        <div
          key={cartProduct?.id}
          className="flex items-center gap-y-6 justify-start flex-col sm:flex-row md:justify-between  shadow-lg w-8/12 mx-auto p-5 rounded-lg mt-6"
        >
          <div className=" mr-auto">
            <h1 className="text-2xl mb-3">{cartProduct?.title}</h1>
            <h2 className="mb-2 text-neutral-800">
              Harga: {cartProduct?.price}
            </h2>
            <h3 className="text-sm mb-2 text-neutral-600">
              Kategori: {cartProduct?.category}
            </h3>
            <h3 className="text-sm mb-2 text-neutral-600">
              Jenis: {cartProduct?.style}
            </h3>
            <h3 className="text-sm mb-2 text-neutral-600">
              Ukuran: {cartProduct?.size}
            </h3>
            <DeleteCart productId={cartProduct?.id} userId={userId} />
          </div>
          <Link href={`/dashboard/${cartProduct?.id}`}>
            <div>
              <Image
                src={cartProduct?.images.split(",")[0]!}
                width={200}
                height={200}
                alt="Foto produk"
                className="object-cover w-[200px] h-[200px] object-top rounded-lg"
              />
            </div>
          </Link>
        </div>
      ))}
      <Button allIds={allIds} userId={userId} />
    </div>
  );
}
