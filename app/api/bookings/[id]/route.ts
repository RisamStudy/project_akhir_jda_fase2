import { prisma } from "../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(request: NextRequest, context: { params: { id: string } }) {
  const id = parseInt(context.params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  await prisma.booking.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Booking deleted" });
}