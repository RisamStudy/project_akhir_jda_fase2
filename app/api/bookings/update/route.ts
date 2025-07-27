import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();
export async function POST(req: Request) {
  const { bookingId, status } = await req.json();

  try {
    await prisma.booking.update({
      where: { id: bookingId },
      data: { status },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Gagal update status:", error);
    return NextResponse.json({ error: "Gagal update status" }, { status: 500 });
  }
}
