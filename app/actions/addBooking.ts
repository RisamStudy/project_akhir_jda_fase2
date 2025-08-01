"use server";

import { PrismaClient } from "../generated/prisma";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function addBooking(data: {
  userId: string;
  propertyId: string;
  status: string;
  startDate: string;
  endDate: string;
}) {
  await prisma.booking.create({
    data: {
      userId: Number(data.userId),
      propertyId: Number(data.propertyId),
      status: data.status,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
    },
  });

  revalidatePath("/dashboard/admin");
}
