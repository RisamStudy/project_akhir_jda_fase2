"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <Link href="/" className="font-bold text-xl">
        KontrakanApp
      </Link>

      <div className="flex gap-4 items-center">
        {status === "loading" && <span>Loading...</span>}
        {!session && (
          <>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/register" className="hover:underline">
              Daftar
            </Link>
          </>
        )}

        {/* {session && (
          <>
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )} */}

        {session?.user && session.user.role === "Admin" && (
          <>
            <Link href="/dashboard/admin">Dashboard Admin</Link>
            <Link href="/dashboard/property">Properti</Link>
            <button onClick={() => signOut()} className="text-red-500">
              Logout
            </button>
          </>
        )}

        {session?.user && session.user.role === "User" && (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/bookings/create">Pemesanan</Link>
            <button onClick={() => signOut()} className="text-red-500">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
