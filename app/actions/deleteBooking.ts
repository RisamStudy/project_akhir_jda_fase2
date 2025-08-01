"use server";

import { prisma } from "../../lib/prisma"; 
import { revalidatePath } from "next/cache";

export async function deleteBookingById(id: number) {
  await prisma.booking.delete({
    where: { id },
  });

  revalidatePath("/dashboard/admin");
}
