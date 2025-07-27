"use client";

import { useState } from "react";

export default function StatusForm({
  bookingId,
  currentStatus,
}: {
  bookingId: number;
  currentStatus: string;
}) {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    const res = await fetch("/api/bookings/update", {
      method: "POST",
      body: JSON.stringify({ bookingId, status }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(false);

    if (res.ok) {
      alert("Status berhasil diubah.");
      location.reload();
    } else {
      alert("Gagal mengubah status.");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <select
        className="border p-1"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        disabled={loading}
      >
        <option value="pending">Pending</option>
        <option value="approved">Disetujui</option>
        <option value="canceled">Dibatalkan</option>
      </select>
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-2 py-1 rounded"
        disabled={loading}
      >
        Simpan
      </button>
    </div>
  );
}
