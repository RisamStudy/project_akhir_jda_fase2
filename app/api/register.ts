// // import { PrismaClient } from "../generated/prisma";
// // import bcrypt from "bcrypt";
// // import { v4 as uuidv4 } from "uuid";

// // const prisma = new PrismaClient();

// // import type { NextApiRequest, NextApiResponse } from "next";
// // // export default async function handler(req, res) {
// // export default async function handler(
// //   req: NextApiRequest,
// //   res: NextApiResponse
// // ) {
// //   if (req.method !== "POST") return res.status(405).end();

// //   const { email, name, password, role } = JSON.parse(req.body);
// //   const hashedPassword = await bcrypt.hash(password, 10);

// //   try {
// //     const id = uuidv4();
// //     await prisma.user.create({
// //       data: { id , email, name, password: hashedPassword, role: "user" },
// //     });
// //     res.status(200).json({ message: "User registered" });
// //   } catch (e) {
// //     console.error("Register error:", e); // log error ke terminal
// //     res.status(400).json({ error: "Email already exists" });
// //   }
// // }

// import { PrismaClient } from "../generated/prisma";
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
