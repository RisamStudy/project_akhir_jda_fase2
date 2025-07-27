import { PrismaClient } from "./generated/prisma/index.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Hash password sebelum disimpan
  const plainPassword = "secure123";
  const hashedPassword = await bcrypt.hash(plainPassword, 10); // 10 = salt rounds

  // Tambah user baru
  const newUser = await prisma.user.create({
    data: {
      name: "John",
      email: "john@example.com",
      password: "hashedPassword",
      role: "admin",
    },
  });

  console.log("User ditambahkan:", newUser);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
