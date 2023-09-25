import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const allColors = await prisma.product.findMany({
      select: {
        color: true,
      },
    });
    return NextResponse.json(allColors);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
