import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";
import prisma from "@/app/generated/prisma";
import Link from "next/link";
// import StatusForm from "../components/StatusForm"

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <p>
        Halo, {session?.user?.name} ({session?.user?.email})
      </p>
    </div>
  );
}
