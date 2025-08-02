import { prisma } from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { NextResponse } from "next/server";
import { PrismaClient } from "../../generated/prisma";

export async function GET() {
  const bookings = await prisma.booking.findMany({
    include: { property: true, user: true },
  });
  return NextResponse.json(bookings);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { propertyId, startDate, endDate } = await req.json();
  const dbUser = await prisma.user.findUnique({
    where: { email: user.email! },
  });

  const booking = await prisma.booking.create({
    data: {
      userId: dbUser!.id,
      propertyId,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    },
  });

  return NextResponse.json(booking);
}
