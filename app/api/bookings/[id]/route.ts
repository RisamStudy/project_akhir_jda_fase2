import { prisma } from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const match = url.pathname.match(/\/api\/bookings\/(\d+)/);
  const id = match ? parseInt(match[1]) : NaN;

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  await prisma.booking.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Booking deleted" });
}
