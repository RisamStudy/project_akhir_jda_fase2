import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

import type { NextApiRequest, NextApiResponse } from "next";
// export default async function handler(req, res) {
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, name, password, role } = JSON.parse(req.body);
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const id = uuidv4();
    await prisma.pengguna.create({
      data: { id, email, name, password: hashedPassword, role: "user" },
    });
    res.status(200).json({ message: "User registered" });
  } catch (e) {
    console.error("Register error:", e); // log error ke terminal
    res.status(400).json({ error: "Email already exists" });
  }
}
