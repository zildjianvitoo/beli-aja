import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    title,
    description,
    category,
    style,
    size,
    inventory,
    color,
    price,
    images,
    userId,
    store,
  } = body;

  try {
    const product = await prisma.product.create({
      data: {
        title,
        description,
        category,
        style,
        size,
        inventory,
        color,
        price,
        images,
        userId,
        store,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    console.log(error);
    return NextResponse.error();
  }
}

export async function DELETE(req: Request) {
  const body = await req.json();

  const { productId, userId } = await body;

  try {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: productId,
        userId: userId,
      },
    });

    return NextResponse.json(deletedProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
