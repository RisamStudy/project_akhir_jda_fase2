import { prisma } from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const properties = await prisma.property.findMany();
  return NextResponse.json(properties);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, description, imageUrl, price, name, location } =
    await req.json();
  const result = await prisma.property.create({
    data: {
      title,
      description,
      imageUrl,
      price,
      name,
      location,
      owner: { connect: { email: user.email! } },
    },
  });

  return NextResponse.json(result);
}
