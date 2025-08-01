import { prisma } from "../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id); // pastikan id berupa number

  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: "Invalid ID" }), {
      status: 400,
    });
  }

  try {
    await prisma.booking.delete({
      where: { id },
    });

    return new Response(JSON.stringify({ message: "Booking deleted" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete booking" }), {
      status: 500,
    });
  }
}
