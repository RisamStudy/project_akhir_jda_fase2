"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deletePropertyById(id: number) {
  await prisma.property.delete({ where: { id } });
  revalidatePath("/dashboard/property");
}
