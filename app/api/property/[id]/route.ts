import { prisma } from "../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  const idParam = request.nextUrl.pathname.split("/").pop();
  const id = parseInt(idParam ?? "");

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const data = await request.json();

  const updatedProperty = await prisma.property.update({
    where: { id },
    data,
  });

  return NextResponse.json(updatedProperty);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await prisma.property.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ message: "Deleted" });
}
