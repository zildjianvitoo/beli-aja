import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { star, comment, productId, userId } = body;

  try {
    const review = await prisma.review.create({
      data: {
        rating: star,
        comment,
        productId,
        userId,
      },
    });

    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.error();
  }
}
