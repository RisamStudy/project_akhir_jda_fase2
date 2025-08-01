"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";

export default function AddBookingPage() {
  const [propertyId, setPropertyId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        propertyId: Number(propertyId),
        startDate,
        endDate,
      }),
    });

    if (res.ok) {
      router.push("/dashboard/admin");
    } else {
      const error = await res.json();
      alert("Gagal menambahkan booking: " + error.error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Tambah Booking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Link href="/dashboard/admin">
              <Button variant="outline">← Kembali</Button>
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="propertyId">Property ID</Label>
              <Input
                id="propertyId"
                type="number"
                value={propertyId}
                onChange={(e) => setPropertyId(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="startDate">Tanggal Mulai</Label>
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="endDate">Tanggal Selesai</Label>
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Simpan
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
