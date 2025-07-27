import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { title, description, imageUrl, price } = await req.json();
  const id = Number(params.id);
  const updated = await prisma.property.update({
    where: { id },
    data: { title, description, imageUrl, price },
  });
  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await prisma.property.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ message: "Deleted" });
}
