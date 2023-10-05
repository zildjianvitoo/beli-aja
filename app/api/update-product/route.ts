import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const body = await req.json();

  const {
    id,
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
  } = await body;

  try {
    const updateProduct = await prisma.product.update({
      where: {
        id: id,
      },
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

    return NextResponse.json(updateProduct);
  } catch (error) {
    return NextResponse.error();
  }
}
