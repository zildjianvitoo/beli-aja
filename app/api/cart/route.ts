import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { productId, userId } = await body;

  try {
    const existingCartItem = await prisma.cart.findFirst({
      where: {
        productId: productId,
        userId: userId,
      },
    });

    if (existingCartItem) {
      await prisma.cart.delete({
        where: {
          id: existingCartItem.id,
        },
      });
    }

    const product = await prisma.cart.create({
      data: {
        productId,
        userId,
      },
    });

    return NextResponse.json(product);
    // if (!existingCartItem) {
    //   const product = await prisma.cart.create({
    //     data: {
    //       productId,
    //       userId,
    //     },
    //   });
    //   return NextResponse.json(product);
    // }
  } catch (error) {
    console.log(error);
    NextResponse.error();
  }
}
