"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";

export default function UserDashboard() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">
              Dashboard Pengguna
            </CardTitle>
          </CardHeader>

          <CardContent className="flex items-center gap-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src={session?.user?.image ?? ""} alt="User Avatar" />
              <AvatarFallback>
                {session?.user?.name?.charAt(0).toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {session?.user?.name ?? "Pengguna"}
              </h2>
              <p className="text-gray-600 text-sm">{session?.user?.email}</p>
              <Badge variant="secondary" className="mt-2">
                Terverifikasi
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-10" />

        <div className="text-center text-gray-500 text-sm">
          Selamat datang di sistem manajemen kontrakan. Gunakan menu navigasi di
          atas untuk mulai menjelajah fitur.
        </div>
      </main>
    </div>
  );
}
