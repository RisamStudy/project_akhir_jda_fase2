// import { PrismaClient } from "../../generated/prisma";
// import bcrypt from "bcrypt";
// // import { v4 as uuidv4 } from "uuid";

// const prisma = new PrismaClient();

// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") return res.status(405).end();

//   try {
//     const { email, name, password, role } = JSON.parse(req.body);

//     // Hash password dengan bcrypt
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Generate UUID sebagai ID (jika di schema Prisma kamu pakai id: String @id)
//     // const id = uuidv4();

//     // Simpan ke database
//     await prisma.user.create({
//       data: {
//         // id, // UUID sebagai string
//         email,
//         name,
//         password: hashedPassword,
//         role: role || "user", // default role jika tidak dikirim
//       },
//     });

//     res.status(200).json({ message: "User registered successfully" });
//   } catch (e: any) {
//     console.error("Register error:", e);
//     res.status(400).json({ error: "Email already exists or invalid data" });
//   }
// }

import { PrismaClient } from "../../generated/prisma"; // ganti path jika beda
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, password, role } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role,
      },
    });

    return NextResponse.json({ message: "User registered" }, { status: 200 });
  } catch (e) {
    console.error("Register error:", e);
    return NextResponse.json({ error: "Registration failed" }, { status: 400 });
  }
}
