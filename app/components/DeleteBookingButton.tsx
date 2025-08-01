"use client";

import { deleteBookingById } from "../actions/deleteBooking";

interface Props {
  bookingId: number;
}

export default function DeleteBookingButton({ bookingId }: Props) {
  const handleDelete = async () => {
    const confirmed = confirm("Yakin ingin menghapus booking ini?");
    if (!confirmed) return;

    await deleteBookingById(bookingId);
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
    >
      Hapus
    </button>
  );
}
