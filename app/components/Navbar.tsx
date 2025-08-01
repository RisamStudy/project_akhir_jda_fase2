"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          KontrakanApp
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="hidden md:flex gap-4 items-center font-medium text-gray-700">
          {status === "loading" && <span>Loading...</span>}

          {!session && (
            <>
              <Link
                href="/login"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Daftar
              </Link>
            </>
          )}

          {session?.user && session.user.role === "Admin" && (
            <>
              <Link
                href="/dashboard/admin"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Dashboard Admin
              </Link>
              <Link
                href="/dashboard/property"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Properti
              </Link>
              <button
                onClick={() => signOut()}
                className="text-red-500 hover:text-red-600 transition-colors duration-200"
              >
                Logout
              </button>
            </>
          )}

          {session?.user && session.user.role === "User" && (
            <>
              <Link
                href="/dashboard"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/bookings/create"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Pemesanan
              </Link>
              <button
                onClick={() => signOut()}
                className="text-red-500 hover:text-red-600 transition-colors duration-200"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 font-medium text-gray-700">
          {status === "loading" && <span>Loading...</span>}

          {!session && (
            <>
              <Link
                href="/login"
                className="block hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Daftar
              </Link>
            </>
          )}

          {session?.user && session.user.role === "Admin" && (
            <>
              <Link
                href="/dashboard/admin"
                className="block hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Dashboard Admin
              </Link>
              <Link
                href="/dashboard/property"
                className="block hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Properti
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  signOut();
                }}
                className="text-red-500 hover:text-red-600 block transition-colors duration-200"
              >
                Logout
              </button>
            </>
          )}

          {session?.user && session.user.role === "User" && (
            <>
              <Link
                href="/dashboard"
                className="block hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/bookings/create"
                className="block hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Pemesanan
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  signOut();
                }}
                className="text-red-500 hover:text-red-600 block transition-colors duration-200"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
