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
    return NextResponse.error();
  }
}
